const allThemes = [
  "power",
  "speed",
  "combat",
  "intelligence",
  "durability",
  "strength",
];

const randomTheme = allThemes[Math.floor(Math.random() * allThemes.length)];

const fightTheme = [
  { txt: "PWR", img: "../src/assets/img/iconeFTPower.png", theme: "power" },
  { txt: "AGI", img: "../src/assets/img/iconeFTAgility.png", theme: "speed" },
  { txt: "FGT", img: "../src/assets/img/iconeFTFight.png", theme: "combat" },
  {
    txt: "INT",
    img: "../src/assets/img/iconeFTIntelligency.png",
    theme: "intelligence",
  },
  {
    txt: "STA",
    img: "../src/assets/img/iconeFTStamina.png",
    theme: "durability",
  },
  {
    txt: "STR",
    img: "../src/assets/img/iconeFTStrenght.png",
    theme: "strength",
  },
  {
    txt: "LUCK",
    img: "../src/assets/img/iconeFTRandom.png",
    theme: `${randomTheme}`,
  },
];

export default fightTheme;
