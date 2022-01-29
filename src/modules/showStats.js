import anime from "animejs/lib/anime.es.js";

const hpBar = document.getElementById("hp"),
  attackBar = document.getElementById("attack"),
  defenseBar = document.getElementById("defense"),
  spAttackBar = document.getElementById("sp-attack"),
  spDefenseBar = document.getElementById("sp-defense"),
  speedBar = document.getElementById("speed");

const barsIds = [
  "#hp",
  "#attack",
  "#defense",
  "#sp-attack",
  "#sp-defense",
  "#speed",
];

export const showStats = (stats) => {
  const hpStat = stats[0].base_stat;
  const attackStat = stats[1].base_stat;
  const defenseStat = stats[2].base_stat;
  const spAttackStat = stats[3].base_stat;
  const spDefenseStat = stats[4].base_stat;
  const speedStat = stats[5].base_stat;

  const statsArray = [
    hpStat,
    attackStat,
    defenseStat,
    spAttackStat,
    spDefenseStat,
    speedStat,
  ];

  for (let i = 0; i < barsIds.length; i++) {
    let actualBarId = barsIds[i];
    actualBarId = actualBarId.replace("#", "");
    const actualBar = document.getElementById(actualBarId);
    const width = calculateWidth(statsArray[i]);
    anime({
      targets: barsIds[i],
      width: `${width}%`,
      easing: "linear",
      loop: false,
      duration: 1000,
    });

    if (width >= 100) actualBar.style.borderRadius = "3px";
    else actualBar.style.borderRadius = "3px 0 0 3px";
  }

  hpBar.firstChild.innerText = `HP: ${hpStat}`;
  attackBar.firstChild.innerText = `Attack: ${attackStat}`;
  defenseBar.firstChild.innerText = `Defense: ${defenseStat}`;
  spAttackBar.firstChild.innerText = `Sp. Attack: ${spAttackStat}`;
  spDefenseBar.firstChild.innerText = `Sp. Defense: ${spDefenseStat}`;
  speedBar.firstChild.innerText = `Speed: ${speedStat}`;
};

const calculateWidth = (stat) => (stat / 255) * 100;
