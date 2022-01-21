export const nextEvolutionImg = document.getElementById("nextEvolution");

export const showNextEvolution = (nextEvolutionInfo, id) => {
  let nextEvolutionId =
    nextEvolutionInfo.chain.evolves_to[0].evolves_to[0]?.species.url.substring(
      42
    );

  if (!nextEvolutionId)
    nextEvolutionId =
      nextEvolutionInfo.chain.evolves_to[0].species.url.substring(42);
  nextEvolutionId = nextEvolutionId.replace("/", "");

  if (nextEvolutionId != id)
    nextEvolutionImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${nextEvolutionId}.png`;
};
