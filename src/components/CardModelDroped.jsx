import PropTypes from "prop-types";
import { motion } from "framer-motion";
import React from "react";
import CardGood from "../assets/img/CardGood.png";
import CardBad from "../assets/img/CardBad.png";

const CardModelDroped = ({
  setDrop,
  id,
  name,
  img,
  intelligence,
  strength,
  speed,
  durability,
  combat,
  power,
  alignment,
  isShow,
}) => {
  const karma = alignment === "good" ? CardGood : CardBad;

  const variants = {
    open: {
      y: 0,
      rotate: 0,
      scale: 1.05,
      opacity: 1,
      transition: {
        duration: 0,
        repeat: 0,
        type: "spring",
        stiffness: 100,
        damping: 13,
      },
    },
    close: {
      y: 300,
      rotate: 20,
      scale: 0,
      opacity: 0.5,
      transition: {
        duration: 0,
        repeat: 0,
        type: "spring",
        stiffness: 100,
        damping: 13,
      },
    },
  };

  return [
    <motion.div
      variants={variants}
      animate={isShow ? "open" : "close"}
      id="cardModelDroped"
      onClick={() => setDrop(id)}
      onKeyDown=""
      role="presentation"
    >
      <div id="cardPictsDroped">
        <div id="cardDropedName">{name}</div>
        <img src={img} alt="" />
        <img id="habillageDroped" src={karma} alt="" />
      </div>
      <div className="cardDropedStatsTable">
        <div className="cardDropedLeftCol">
          <p id="int">{intelligence} INT</p>
          <p id="str">{strength} STR</p>
          <p id="agi">{speed} AGI</p>
        </div>
        <div className="cardDropedRightCol">
          <p id="sta">{durability} STA</p>
          <p id="fgt">{combat} FGT</p>
          <p id="pwr">{power} PWR</p>
        </div>
      </div>
    </motion.div>,
  ];
};

CardModelDroped.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
  intelligence: PropTypes.number.isRequired,
  strength: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  durability: PropTypes.number.isRequired,
  combat: PropTypes.number.isRequired,
  power: PropTypes.number.isRequired,
  isShownCardFavorite1: PropTypes.bool.isRequired,
  isShownCardFavorite2: PropTypes.bool.isRequired,
  isShow: PropTypes.bool.isRequired,
};
export default CardModelDroped;
