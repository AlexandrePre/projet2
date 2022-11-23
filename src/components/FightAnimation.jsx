import PropTypes from "prop-types";
import { motion } from "framer-motion";

const FightAnimation = ({ isShownCardComputer }) => {
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
        damping: 2,
      },
    },
    close: {
      y: 0,
      rotate: 20,
      scale: 2,
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
  return (
    <motion.img
      variants={variants}
      animate={isShownCardComputer ? "open" : "close"}
      id="fightAnimation"
      src="../../src/assets/img/fight01.gif"
      alt="Fight Animation"
      style={{ display: isShownCardComputer ? "block" : "none" }}
    />
  );
};
FightAnimation.propTypes = {
  isShownCardComputer: PropTypes.string.isRequired,
};
export default FightAnimation;
