import anime from "animejs/lib/anime.es.js";
import axios from "../utils/axios";
import { input } from "./formatInput";
import { showMainInfo } from "./showMainInfo";
import { showSecondaryInfo } from "./showSecondaryInfo";

const errorMsg = document.querySelector(".error-msg");
const pokemonInfoSection = document.querySelector(".pokemon");

export const makeRequest = async (pokemon) => {
  try {
    const response = await axios.get(`pokemon/${pokemon}`);
    const { name, id, types, stats, abilities } = response.data;

    const speciesResponse = await axios.get(`pokemon-species/${id}/`);
    const { varieties } = speciesResponse.data;

    pokemonInfoSection.style.visibility = "visible";
    showMainInfo(name, id, types);
    showSecondaryInfo(abilities, stats, varieties, id);

    input.value = "";
    errorMsg.style.display = "none";
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
