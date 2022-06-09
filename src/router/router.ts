import { Router } from "express";

/*
   T => Controler
   U => Middleware
*/
export class BaseRouter<T> {

   public router: Router;
   public controller: T;
   // public middelware: U

   constructor(TController: {new (): T}) {
      this.router = Router();
      this.controller = new TController();
      this.routes();
   }

   routes() {}

}