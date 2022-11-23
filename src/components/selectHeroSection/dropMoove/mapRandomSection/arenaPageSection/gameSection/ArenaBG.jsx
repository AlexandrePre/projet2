import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ArenaBG = ({ isShown }) => {
  const variants = {
    open: {
      y: 0,
      rotate: 0,
      scale: 1.5,
      opacity: 1,
      transition: {
        duration: 0,
        repeat: 0,
        type: "spring",
        stiffness: 300,
        damping: 35,
      },
    },
    close: {
      y: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
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
    <motion.div
      variants={variants}
      animate={isShown ? "open" : "close"}
      id="arenaBG"
    >
      <video loop autoPlay muted id="bgVideo">
        <source src="/src/assets/videos/arenaBG.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

ArenaBG.propTypes = {
  isShown: PropTypes.bool.isRequired,
};

export default ArenaBG;
