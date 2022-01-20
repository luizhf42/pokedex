import axios from "../utils/axios";
import { input } from "./formatInput";
import { showMainInfo } from "./showMainInfo";
import { showSecondaryInfo } from "./showSecondaryInfo";


export const makeRequest = async (pokemonName) => {
  try {
    const response = await axios.get(pokemonName);
    const { name, id, types, stats, abilities } =
      response.data;
    input.value = "";

    showMainInfo(name, id, types);
    showSecondaryInfo(abilities, stats);
  } catch (error) {
    console.error(error);
  }
};
