import anime from "animejs/lib/anime.es.js";
import axios from "../utils/axios";
import { input } from "./formatInput";
import { showMainInfo } from "./showMainInfo";
import { showSecondaryInfo } from "./showSecondaryInfo";

const errorMsg = document.querySelector(".error-msg");

export const makeRequest = async (pokemonName) => {
  try {
    const response = await axios.get(pokemonName);
    const { name, id, types, stats, abilities } = response.data;
    input.value = "";

    errorMsg.style.display = "none";
    showMainInfo(name, id, types);
    showSecondaryInfo(abilities, stats);
  } catch (error) {
    anime({
      targets: "#input, #search-btn",
      easing: "easeInOutSine",
      duration: 550,
      translateX: [
        {
          value: -16,
        },
        {
          value: 16,
        },
        {
          value: -8,
        },
        {
          value: 8,
        },
        {
          value: 0,
        },
      ],
    });

    errorMsg.style.display = "block";
    console.error(error);
  }
};
