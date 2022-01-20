import { showAbilities } from "./showAbilities";
import { showStats } from "./showStats";

export const showSecondaryInfo = (abilities, stats) => {
  showAbilities(abilities);
  showStats(stats);
};
