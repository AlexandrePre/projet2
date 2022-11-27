import PWR from "../assets/img/iconeFTPower.png";
import AGI from "../assets/img/iconeFTAgility.png";
import FGT from "../assets/img/iconeFTFight.png";
import INT from "../assets/img/iconeFTIntelligency.png";
import STA from "../assets/img/iconeFTStamina.png";
import STR from "../assets/img/iconeFTStrenght.png";
import LUCK from "../assets/img/iconeFTRandom.png";

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
  { txt: "PWR", img: PWR, theme: "power" },
  { txt: "AGI", img: AGI, theme: "speed" },
  { txt: "FGT", img: FGT, theme: "combat" },
  {
    txt: "INT",
    img: INT,
    theme: "intelligence",
  },
  {
    txt: "STA",
    img: STA,
    theme: "durability",
  },
  {
    txt: "STR",
    img: STR,
    theme: "strength",
  },
  {
    txt: "LUCK",
    img: LUCK,
    theme: `${randomTheme}`,
  },
];

export default fightTheme;
