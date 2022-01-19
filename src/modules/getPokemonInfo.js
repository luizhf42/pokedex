import axios from "../utils/axios";
import { input } from "./formatInput";
import { showMainInfo } from "./showMainInfo";

export const makeRequest = async (pokemonName) => {
  try {
    const response = await axios.get(pokemonName);
    const { name, id, types, stats, abilities, species } =
      response.data;
    input.value = "";

    showMainInfo(name, id, types);
  } catch (error) {
    console.error(error);
  }
};
