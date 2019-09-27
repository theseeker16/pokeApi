import { Application } from "express";
import { PokeService } from "./services/pokeApi.service";

export class MainController {
  private pokeService: PokeService;

  constructor(private app: Application) {
    this.pokeService = new PokeService();
    this.routes();
  }

  public routes() {
    this.app.route("/").get(this.pokeService.welcomeMessage);

    //Our new route
    this.app.route("/pokemons").get(this.pokeService.getAllPokemon);
    this.app.route("/pokemon").post(this.pokeService.addNewPokemon);
    this.app
      .route("/pokemon/:id")
      .delete(this.pokeService.deletePokemon)
      .put(this.pokeService.updatePokemon);
  }
}
