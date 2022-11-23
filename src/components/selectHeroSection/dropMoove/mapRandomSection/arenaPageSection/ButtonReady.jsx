import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import sound4 from "../../../../../assets/sounds/getReadySound.mp3";

function play4() {
  new Audio(sound4).play();
}

const ButtonReady = ({ isShown, setIsShown, favorite }) => {
  const handleClick = () => {
    setIsShown((current) => !current);
  };
  const variants = {
    open: {
      x: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        repeat: 0,
      },
    },
    close: {
      x: -200,
      rotate: 20,
      scale: 0,
      opacity: 0,
    },
  };
  return (
    <div>
      <motion.button onClick={handleClick} className="btn-ready" type="button">
        <motion.img
          style={{ display: isShown && favorite[1] ? "block" : "none" }}
          variants={variants}
          animate={isShown && favorite[1] ? "open" : "close"}
          whileHover={{ scale: 1.3, rotate: 5 }}
          onClick={() => {
            play4();
          }}
          id="SelectHeroesReadyBt"
          className="zoomSelectHeroesReadyBt"
          src="./src/assets/img/readyButton.png"
          alt="IntroCard"
          onKeyDown=""
          role="presentation"
        />
      </motion.button>
    </div>
  );
};
ButtonReady.propTypes = {
  isShown: PropTypes.bool.isRequired,
  setIsShown: PropTypes.func.isRequired,
  favorite: PropTypes.string.isRequired,
};

export default ButtonReady;
