import { showAbilities } from "./showAbilities";
import { showStats } from "./showStats";
import { showEvolutionInfo } from "./showEvolutionInfo";

export const showSecondaryInfo = (
  abilities,
  stats,
  evolvesFromSpecies,
  evolutionChain,
  id
) => {
  showStats(stats);
  showAbilities(abilities);
  showEvolutionInfo(evolvesFromSpecies, evolutionChain.url, id);
};
