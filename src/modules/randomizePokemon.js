import { makeRequest } from "./getPokemonInfo";

const randomizeButton = document.getElementById("randomize-btn");

const randomize = () => {
  const randomId = Math.round(Math.random() * 899);

  makeRequest(randomId);
};

export { randomize, randomizeButton };
