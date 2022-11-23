import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "../../../../../../../SelectHeroes.css";

const ButtonFavorite = ({ setFavorite, toSelected, favorite }) => {
  const NbButton = [1, 2];
  return (
    <motion.div
      transition={{
        duration: 0,
        delay: 1.4,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      initial={{ y: 300, scale: 1, opacity: 1 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 1 }}
    >
      {NbButton.map((button) => {
        return (
          <motion.img
            whileHover={{ scale: 1.2, rotate: -5 }}
            onClick={() => setFavorite([...favorite, toSelected])}
            onKeyDown=""
            role="presentation"
            id={`favoriteButton0${button}`}
            className="favoriteButtons"
            src="./src/assets/img/CardFavoriteBack.png"
            alt="favoriteButton"
          />
        );
      })}
    </motion.div>
  );
};
ButtonFavorite.propTypes = {
  setFavorite: PropTypes.string.isRequired,
  favorite: PropTypes.string.isRequired,
  toSelected: PropTypes.string.isRequired,
};

export default ButtonFavorite;
