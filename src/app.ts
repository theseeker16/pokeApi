import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { MONGO_URL } from "./constans/pokeApi.constans";

//importing our controller
import { MainController } from "./main.controller";
import { Mongoose } from "mongoose";

class App {
  public app: Application;

  //declaring our controller
  public pokeController: MainController;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();

    //Creating and assigning a new instance of our controller
    this.pokeController = new MainController(this.app);
  }

  private setConfig() {
    //Allows us to receive requests with data in json format
    this.app.use(bodyParser.json({ limit: "50mb" }));

    //Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

    //Enables cors
    this.app.use(cors());
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

export default new App().app;
