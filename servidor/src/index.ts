//configutacion de sevicios
import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import pruebaRoutes from './routes/pruebaRoutes';


//difinicion de la clase para el lado del servidor 
class Server{

    public app: Application;

    constructor(){
    //inicializa express
        this.app=express();
        this.config();
        this.routes();
    }
    //configurar la propiedad app
    config():void{
        this.app.set('port',process.env.PORT||3000)
    }
    //difinir las rutas detscl servidor 
    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/prueba',pruebaRoutes)
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    //iniciar el servidor
    start():void{
        this.app.listen(this.app.get('port'),()=>{

            console.log("Server on port",this.app.get('port'));
        });
    }
}
//ejcutar la clase
 const server=new Server ();
 server.start();
