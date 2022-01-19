import { formatInput } from "./modules/formatInput";

const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", () => {
  const inputValue = formatInput();
});
