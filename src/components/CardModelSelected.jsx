import PropTypes from "prop-types";
import { motion } from "framer-motion";
import CardGood from "../assets/img/CardGood.png";
import CardBad from "../assets/img/CardBad.png";

const CardModelSelected = ({
  isShownCardRandom,
  displayNoneCardRandom,
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
}) => {
  const karma = alignment === "good" ? CardGood : CardBad;

  return [
    <motion.div
      transition={{
        duration: 0,
        repeat: 0,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      initial={{ x: 500, rotate: 20, scale: 0.1, opacity: 1 }}
      animate={{ x: 0, rotate: 0, scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 1 }}
      style={{ display: isShownCardRandom ? "none" : "block" }}
      id="cardModelSelected"
      onClick={() => {
        setDrop(id);
        displayNoneCardRandom();
      }}
      onKeyDown=""
      role="presentation"
    >
      <div className="statsTableSelected">
        <div className="leftColSelected">
          <p id="int">{intelligence} INT</p>
          <p id="str">{strength} STR</p>
          <p id="agi">{speed} AGI</p>
        </div>
        <div className="rightColSelected">
          <p id="sta">{durability} STA</p>
          <p id="fgt">{combat} FGT</p>
          <p id="pwr">{power} PWR</p>
        </div>
      </div>
      <div id="cardPictsSelected">
        <div id="nameSelected">{name}</div>
        <img src={img} alt="" />
        <img id="habillageSelected" src={karma} alt="" />
      </div>
    </motion.div>,
  ];
};

CardModelSelected.propTypes = {
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
export default CardModelSelected;
