import { formatInput, input } from "./modules/formatInput";
import { makeRequest } from "./modules/getPokemonInfo";

const form = document.querySelector("form");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", main);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) main();
  });
});

const main = () => {
  const inputValue = formatInput();

  makeRequest(inputValue);
};
