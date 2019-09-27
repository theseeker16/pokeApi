import { MongooseDocument } from "mongoose";
import { PokeService } from "../services/pokeApi.service";
import request from "supertest";
import app from "../app";

let pokeService;
beforeAll(() => {
  pokeService = new PokeService();
});

// MOCKS
// Use Mocks to:

// verify the contract between the code under test and a collaborator
// verify the the collaborator's method is called the correct number of times
// verify the collaborator's method is called with the correct parameters

// STUBS
// Use Stubs to:

// provide a predetermined response from a collaborator
// take a predetermined action from a collaborator, like throwing an exception

describe("Testing all services in pokeApi.services #api ", () => {
  it("It should retrieve all pokemon's registered in DB --> getAllPokemon()", async () => {
    // Arrange
    const mock = jest.fn();
    const pokemon = {
      _id: "5d8e340c1ab8c41545ed8345",
      name: "Charmander",
      type: "Water",
      gender: "Female",
      height: 0.6,
      __v: 0
    };
    // Act
    const res = await request(app).get("/pokemons");

    // Asserts
    expect(res.status).toEqual(200);
  });

  it("It should save a pokemon --> addNewPokemon()", () => {});
});
