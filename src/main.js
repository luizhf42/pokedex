import { formatInput, input } from "./modules/formatInput";
import { makeRequest } from "./modules/getPokemonInfo";

const form = document.querySelector("form");
const searchBtn = document.querySelector("#search-btn");

const main = () => {
  const inputValue = formatInput();

  makeRequest(inputValue);
};

searchBtn.addEventListener("click", main, false);

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) main();
});
