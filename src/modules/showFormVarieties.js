const defaultFormImg = document.getElementById("default-form"),
  defaultFormName = document.getElementById("default-form-name"),
  firstVarietyImg = document.getElementById("first-variety"),
  firstVarietyName = document.getElementById("first-variety-name"),
  secondVarietyImg = document.getElementById("second-variety"),
  secondVarietyName = document.getElementById("second-variety-name");

const rotomVarietiesDiv = document.getElementById("rotom-varieties"),
  varietiesDiv = document.getElementById("varieties");

export const showFormVarieties = (varieties, id) => {
  if (id === 479) {
    rotomVarietiesDiv.style.display = "flex";
    varietiesDiv.style.display = "none";
  } else {
    rotomVarietiesDiv.style.display = "none";
    varietiesDiv.style.display = "flex";

    varieties.forEach((variety) => {
      if (variety.is_default) {
        defaultFormImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        defaultFormName.innerText = variety.pokemon.name;
      }
    });
  
    if (varieties[1]) {
      let varietyId = varieties[1].pokemon.url;
      varietyId = varietyId.substring(34);
      varietyId = varietyId.replace("/", "");
      firstVarietyImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${varietyId}.png`;
      firstVarietyName.innerText = varieties[1].pokemon.name;
      firstVarietyImg.parentElement.style.display = "flex";
    } else {
      firstVarietyImg.parentElement.style.display = "none";
    }
  
    if (varieties[2]) {
      let varietyId = varieties[2].pokemon.url;
      varietyId = varietyId.substring(34);
      varietyId = varietyId.replace("/", "");
      secondVarietyImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${varietyId}.png`;
      secondVarietyName.innerText = varieties[2].pokemon.name;
      secondVarietyImg.parentElement.style.display = "flex";
    } else {
      secondVarietyImg.parentElement.style.display = "none";
    }
  }
};
