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
  showAbilities(abilities);
  showStats(stats);
  showEvolutionInfo(evolvesFromSpecies, evolutionChain.url, id);
};
