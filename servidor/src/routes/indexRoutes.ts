// Definir un enrutador
import {Router} from  'express';
import pruebaController from '../Controllers/pruebaController'

class IndexRoutes{
    public router:Router =Router();
    constructor(){
    this.config(); 
    }
    config():void{
        this.router.get('/',pruebaController.index);

    }
}

const  indexRoutes= new IndexRoutes();
export default indexRoutes.router;