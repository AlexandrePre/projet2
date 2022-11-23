import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GetHeroesById } from "../../../../../../tools/GetHeroes";
import sound5 from "../../../../../../assets/sounds/fightSound.mp3";

function play5() {
  new Audio(sound5).play();
}

const ArenaFightBt = ({
  computerLife,
  firstPlayerLife,
  drop,
  dropComputer,
  setComputerLife,
  setFirstPlayerLife,
  themeFight,
  displayBlockCardComputer,
  displayBlockCardPlayer,
  displayNoneCardFavorite1,
  displayNoneCardFavorite2,
}) => {
  const [heroes, setHeroes] = useState([]);

  const getHeroesCallback = async () => {
    setHeroes(await GetHeroesById(drop));
  };

  useEffect(() => {
    getHeroesCallback();
  }, [drop]);

  const figthCalc = () => {
    const scoreFight =
      Number(heroes.powerstats[themeFight.theme]) -
      Number(dropComputer.powerstats[themeFight.theme]);
    if (scoreFight > 0) {
      setComputerLife(computerLife - 1);
    } else if (scoreFight === 0) {
      setComputerLife(computerLife - 1);
      setFirstPlayerLife(firstPlayerLife - 1);
    } else {
      setFirstPlayerLife(firstPlayerLife - 1);
    }
  };

  const fightTimeout = () => setTimeout(figthCalc, 4000);
  clearTimeout(fightTimeout);
  const cardComputerTimeout = () => setTimeout(displayBlockCardComputer, 3500);
  clearTimeout(cardComputerTimeout);
  const cardPlayerTimeout = () => setTimeout(displayBlockCardPlayer, 3500);
  clearTimeout(cardPlayerTimeout);

  return (
    <div>
      <motion.img
        whileHover={{ scale: 1.5, rotate: 5, zIndex: 15 }}
        transition={{
          duration: 0,
          repeat: 0,
          type: "spring",
          stiffness: 300,
          damping: 7,
        }}
        initial={{ rotate: 20, scale: 0.1, opacity: 1 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 1 }}
        id="fightButt"
        onClick={() => {
          play5();
          displayBlockCardComputer();
          fightTimeout();
          cardComputerTimeout();
          cardPlayerTimeout();
          displayNoneCardFavorite1();
          displayNoneCardFavorite2();
        }}
        className="zoomfightButt"
        src="./src/assets/img/fightButton.png"
        alt="Fight Button"
        onKeyDown=""
        role="presentation"
      />
    </div>
  );
};

ArenaFightBt.propTypes = {
  computerLife: PropTypes.number.isRequired,
  firstPlayerLife: PropTypes.number.isRequired,
  setFirstPlayerLife: PropTypes.number.isRequired,
  drop: PropTypes.string.isRequired,
  dropComputer: PropTypes.string.isRequired,
  setComputerLife: PropTypes.number.isRequired,
  themeFight: PropTypes.string.isRequired,
  displayBlockCardComputer: PropTypes.string.isRequired,
  displayBlockCardPlayer: PropTypes.string.isRequired,
  displayNoneCardFavorite1: PropTypes.string.isRequired,
  displayNoneCardFavorite2: PropTypes.string.isRequired,
};
export default ArenaFightBt;
