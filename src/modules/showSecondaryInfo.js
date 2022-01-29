import { showAbilities } from "./showAbilities";
import { showStats } from "./showStats";
import { showFormVarieties } from "./showFormVarieties";

export const showSecondaryInfo = (abilities, stats, varieties, id) => {
  showStats(stats);
  showAbilities(abilities);
  showFormVarieties(varieties, id);
};
