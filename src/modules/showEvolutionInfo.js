import axios from "../utils/axios";
import { showPreEvolution, preEvolutionImg } from "./showPreEvolution";
import { showNextEvolution, nextEvolutionImg } from "./showNextEvolution";
import { checkEvolutionsImgs } from "./checkEvolutionsImgs";
import { resetEvolutionsImgs } from "./resetEvolutionsImgs";

export const showEvolutionInfo = async (
  preEvolution,
  evolutionChainUrl,
  id
) => {
  const evolutionChain = evolutionChainUrl.substring(26);
  try {
    resetEvolutionsImgs();
    const nextEvolutionResponse = await axios.get(evolutionChain);
    const nextEvolutionInfo = nextEvolutionResponse.data;

    if (preEvolution) showPreEvolution(preEvolution);
    showNextEvolution(nextEvolutionInfo, id);
  } finally {
    checkEvolutionsImgs(preEvolutionImg, nextEvolutionImg);
  }
};
