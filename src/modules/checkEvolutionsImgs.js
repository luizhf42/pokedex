export const checkEvolutionsImgs = (preEvolutionImg, nextEvolutionImg) => {
  if (preEvolutionImg.getAttribute("src") === "")
    preEvolutionImg.parentElement.style.display = "none";
  else preEvolutionImg.parentElement.style.display = "flex";
  if (nextEvolutionImg.getAttribute("src") === "")
    nextEvolutionImg.parentElement.style.display = "none";
  else nextEvolutionImg.parentElement.style.display = "flex";

  if (preEvolutionImg.getAttribute("src") === "" && nextEvolutionImg.getAttribute("src") === "") {
    
  }
}