import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { UserRouter } from './router/user.router'


class ServerBootstrap {

   // properties
   public app: express.Application = express();
   private port: number = 8000;

   constructor() {
      this.app.use(express.json());
      this.app.use(express.urlencoded({extended: true}));
      this.app.use(morgan('dev'));
      this.app.use(cors());

      this.app.use('/api', this.routers())

      // execute server
      this.listen();
   }

   // routes
   routers(): Array<express.Router> {
      return [new UserRouter().router];
   }

   // methods
   public listen() {
      this.app.listen(this.port, () => {
         console.log("Server Listening on port => " + this.port);
      })
   }
}

new ServerBootstrap();