const mainInfoDiv = document.getElementById("main-info");

const typeColors = {
  fire: "#fc7c4e",
  grass: "#48d07a",
  bug: "#60d351",
  normal: "#e4e4e4",
  water: "#4646eb",
  poison: "#5c279d",
  electric: "#ffce46",
  ground: "#a9702d",
  fairy: "#fc72a9",
  fighting: "#f04c3a",
  psychic: "#ff37a1",
  rock: "#8a7f43",
  ghost: "#573f57",
  ice: "#a3d2e6",
  dragon: "#6b41ce",
  dark: "#1f1d16",
  steel: "#686868",
  flying: "#c9a9dc",
};

export const changeBgColor = (mainType) => {
  mainInfoDiv.style.backgroundColor = typeColors[mainType];
};
