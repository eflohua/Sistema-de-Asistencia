import {Request,Response} from 'express';
class IndexController{

index (req:Request,res:Response){
     
     res.json({text:'API IS  /API/GAMES'})
     
          }
         
   }
   new IndexController();
   export const indexController=new IndexController();