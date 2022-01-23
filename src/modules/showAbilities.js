const abilitiesElement = document.getElementById("normal-abilities"),
  hiddenAbilityElement = document.getElementById("hidden-ability");

export const showAbilities = (abilities) => {
  let abilitiesArray = [];
  let hasHiddenAbility = false;
  abilities.forEach((ability) => {
    if (ability.is_hidden) {
      const hiddenAbility = ability.ability.name;
      const formattedHiddenAbility = hiddenAbility.replace("-", " ");
      hiddenAbilityElement.innerText = formattedHiddenAbility;
      hiddenAbilityElement.setAttribute("data-after", " (hidden)");
      hasHiddenAbility = true;
    } else {
      abilitiesArray.push(ability.ability.name);
    }
  });

  let formattedAbilitiesArray = [];
  abilitiesArray.forEach((ability) => {
    const formattedAbility = ability.replace("-", " ");
    formattedAbilitiesArray.push(formattedAbility);
  });

  if (!hasHiddenAbility) {
    hiddenAbilityElement.innerText = "";
    hiddenAbilityElement.setAttribute("data-after", "No hidden ability");
  }

  const abilitiesText = formattedAbilitiesArray.join(" / ");
  abilitiesElement.innerText = abilitiesText;
};
