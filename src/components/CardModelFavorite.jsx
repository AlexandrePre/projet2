import PropTypes from "prop-types";
import React from "react";
import { motion } from "framer-motion";
import CardGood from "../assets/img/CardGood.png";
import CardBad from "../assets/img/CardBad.png";

const CardModelFavorite = ({
  name,
  img,
  intelligence,
  strength,
  speed,
  durability,
  combat,
  power,
  alignment,
}) => {
  const karma = alignment === "good" ? CardGood : CardBad;
  return [
    <motion.div
      transition={{
        duration: 0,
        delay: 0,
        type: "spring",
        stiffness: 100,
        damping: 13,
      }}
      initial={{ y: -300, rotate: 20, scale: 0, opacity: 0.5 }}
      animate={{ y: 0, rotate: 0, scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 1 }}
      id="cardModelFavorite"
    >
      <div id="cardPictsFavorite">
        <div id="favoriteName">{name}</div>
        <img src={img} alt="" />
        <img id="habillageFavorite" src={karma} alt="" />
      </div>
      <div className="favoriteStatsTable">
        <div className="favoriteLeftCol">
          <p id="int">{intelligence} INT</p>
          <p id="str">{strength} STR</p>
          <p id="agi">{speed} AGI</p>
        </div>
        <div className="favoriteRightCol">
          <p id="sta">{durability} STA</p>
          <p id="fgt">{combat} FGT</p>
          <p id="pwr">{power} PWR</p>
        </div>
      </div>
    </motion.div>,
  ];
};

CardModelFavorite.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
  intelligence: PropTypes.number.isRequired,
  strength: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  durability: PropTypes.number.isRequired,
  combat: PropTypes.number.isRequired,
  power: PropTypes.number.isRequired,
};
export default CardModelFavorite;
