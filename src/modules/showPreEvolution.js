export const preEvolutionImg = document.getElementById("preEvolution");

export const showPreEvolution = (preEvolution) => {
  let preEvolutionId = preEvolution.url?.substring(42);
  preEvolutionId = preEvolutionId.replace("/", "");

  preEvolutionImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${preEvolutionId}.png`;
};
