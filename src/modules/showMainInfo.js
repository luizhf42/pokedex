import { changeBgColor } from "./changeBgColor";

const nameElement = document.getElementById("name"),
  idElement = document.getElementById("id"),
  spriteElement = document.getElementById("sprite"),
  typesElement = document.getElementById("types");

export const showMainInfo = (name, id, types) => {
  nameElement.innerText = name;
  idElement.innerText = `#${id}`;

  let typesArray = [];
  types.forEach((type) => {
    typesArray.push(type.type.name);
  });
  changeBgColor(typesArray[0]);
  const typesText = typesArray.join(" / ");
  typesElement.innerText = typesText;

  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  spriteElement.src = spriteUrl;
};


