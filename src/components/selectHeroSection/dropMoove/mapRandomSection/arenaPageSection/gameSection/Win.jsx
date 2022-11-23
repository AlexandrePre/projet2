import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./endGame.css";
import gif2 from "../../../../../../assets/img/win.gif";
import sound7 from "../../../../../../assets/sounds/winMusic.mp3";

function play7() {
  new Audio(sound7).play();
}

const Win = () => {
  document.body.style.overflow = "hidden";

  useEffect(() => {
    play7();
  }, []);

  return (
    <div className="endGame">
      <motion.p
        transition={{
          duration: 0,
          type: "spring",
          stiffness: 100,
        }}
        initial={{ x: 600, y: 300, scale: 5, opacity: 1 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        className="finalTextWin"
      >
        YOU WIN !
      </motion.p>
      <motion.img
        transition={{
          duration: 0,
          repeat: 0,
          type: "spring",
          stiffness: 10,
          damping: 1.5,
        }}
        initial={{ rotate: 0, scale: 0, opacity: 1 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        className="venomWin"
        src={gif2}
        alt="win"
      />
      <div className="buttons">
        <Link to="/SelectHeroes">
          <motion.img
            whileHover={{ scale: 1.5, rotate: -5, zIndex: 15 }}
            transition={{
              duration: 0,
              repeat: 0,
              type: "spring",
              stiffness: 300,
              damping: 7,
            }}
            initial={{ rotate: -20, scale: 0.1, opacity: 1 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 1 }}
            src="./src/assets/img/ReplayButton.png"
            alt="favoriteButton"
            onKeyDown=""
            role="presentation"
            type="button"
            className="playAgainFinal"
          />
        </Link>
        <Link to="/">
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
            src="./src/assets/img/LeaveButton.png"
            alt="favoriteButton"
            onKeyDown=""
            role="presentation"
            type="button"
            className="mainMenuFinal"
          />
        </Link>
      </div>
    </div>
  );
};

export default Win;
