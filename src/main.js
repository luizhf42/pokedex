import { formatInput, input } from "./modules/formatInput";
import { makeRequest } from "./modules/getPokemonInfo";
import { randomize, randomizeButton } from "./modules/randomizePokemon";

randomize();
checkEvolutionsImgs(preEvolutionImg, nextEvolutionImg);

randomizeButton.addEventListener("click", randomize, false);

const form = document.querySelector("form");
const searchButton = document.querySelector("#search-btn");

const main = () => {
  const inputValue = formatInput();

  makeRequest(inputValue);
};

searchButton.addEventListener("click", main, false);

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) main();
});
