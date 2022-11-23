import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../../../../../SelectHeroes.css";
import ArenaBG from "./gameSection/ArenaBG";
import ArenaFightBt from "./gameSection/ArenaFightBt";
import ArenaLifeCounter from "./gameSection/ArenaLifeCounter";
import ArenaDrop from "./gameSection/ArenaDrop";
import fightTheme from "../../../../../tools/fightTheme";
import CardComputerDrop from "./gameSection/CardComputerDrop";
import FightAnimation from "../../../../FightAnimation";

const Game = ({
  isShown,
  drop,
  dropComputer,
  setDropComputer,
  isShownCardFavorite1,
  isShownCardFavorite2,
  displayNoneCardFavorite1,
  displayNoneCardFavorite2,
}) => {
  const navigate = useNavigate();
  const [computerLife, setComputerLife] = useState(5);
  const [firstPlayerLife, setFirstPlayerLife] = useState(5);
  const [themeFight, setThemeFight] = useState([]);
  const [isShownCardComputer, setIsShownCardComputer] = useState(false);
  const [isShownCardPlayer, setIsShownCardPlayer] = useState(true);

  const displayBlockCardComputer = () => {
    setIsShownCardComputer((current) => !current);
  };
  const displayBlockCardPlayer = () => {
    setIsShownCardPlayer((current) => !current);
  };

  const endOfTheGame = () => {
    if (firstPlayerLife <= 0) {
      navigate("/Loose");
    } else if (Number(computerLife) <= 0) {
      navigate("/Win");
    } else if (Number(computerLife) === 0 && Number(firstPlayerLife) === 0) {
      navigate("/Draw");
    } else {
      console.warn("Everyone is alive");
    }
  };

  const resetFightThemeIcone = () => {
    setThemeFight(fightTheme[Math.floor(Math.random() * fightTheme.length)]);
  };

  useEffect(() => {
    endOfTheGame();
    resetFightThemeIcone();
  }, [computerLife, firstPlayerLife]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    setTimeout(displayBlockCardPlayer, 250);
  }, [drop]);

  return (
    <div className="SelectHeroes">
      <div style={{ display: isShown ? "none" : "block" }}>
        <ArenaFightBt
          drop={drop}
          dropComputer={dropComputer}
          setComputerLife={setComputerLife}
          setFirstPlayerLife={setFirstPlayerLife}
          themeFight={themeFight}
          computerLife={computerLife}
          firstPlayerLife={firstPlayerLife}
          displayBlockCardComputer={displayBlockCardComputer}
          displayBlockCardPlayer={displayBlockCardPlayer}
          isShownCardComputer={isShownCardComputer}
          displayNoneCardFavorite1={displayNoneCardFavorite1}
          displayNoneCardFavorite2={displayNoneCardFavorite2}
        />

        <ArenaDrop
          isShown={isShown}
          themeFight={themeFight}
          drop={drop}
          isShownCardFavorite1={isShownCardFavorite1}
          isShownCardFavorite2={isShownCardFavorite2}
          isShownCardPlayer={isShownCardPlayer}
        />
        <CardComputerDrop
          setDropComputer={setDropComputer}
          dropComputer={dropComputer}
          drop={drop}
          isShownCardComputer={isShownCardComputer}
          displayBlockCardComputer={displayBlockCardComputer}
          isShownCardFavorite1={isShownCardFavorite1}
          isShownCardFavorite2={isShownCardFavorite2}
        />
        <ArenaLifeCounter
          computerLife={computerLife}
          firstPlayerLife={firstPlayerLife}
          fightThemeIcone={themeFight}
          isShownCardComputer={isShownCardComputer}
          displayBlockCardComputer={displayBlockCardComputer}
        />
        <ArenaBG isShown={isShown} />
      </div>
      <FightAnimation isShownCardComputer={isShownCardComputer} />
    </div>
  );
};
Game.propTypes = {
  isShown: PropTypes.bool.isRequired,
  drop: PropTypes.string.isRequired,
  dropComputer: PropTypes.string.isRequired,
  setDropComputer: PropTypes.string.isRequired,
  isShownCardFavorite1: PropTypes.string.isRequired,
  isShownCardFavorite2: PropTypes.string.isRequired,
  displayNoneCardFavorite1: PropTypes.string.isRequired,
  displayNoneCardFavorite2: PropTypes.string.isRequired,
};
export default Game;
