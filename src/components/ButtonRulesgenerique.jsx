import React from "react";
import { Link } from "react-router-dom";
import "./ButtonRulesgenerique.css";
import { motion } from "framer-motion";
import ButtonRules from "../assets/img/RulesButton.png";

const ButtonRulesgenerique = () => {
  return (
    <Link to="./TutoRules" target="_blank">
      <motion.button
        transition={{
          duration: 0,
          delay: 2,
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        initial={{ zIndex: 0, x: -200, rotate: 20, scale: 0, opacity: 0 }}
        animate={{ zIndex: 10, x: 0, rotate: 0, scale: 1, opacity: 1 }}
        onClick=""
        className="btn-rules"
        type="button"
      >
        <motion.img
          whileHover={{ scale: 1.3, rotate: 5 }}
          onClick=""
          id="SelectHeroesReadyBt"
          className="zoomSelectHeroesReadyBt"
          src={ButtonRules}
          alt="IntroCard"
          onKeyDown=""
          role="presentation"
        />
      </motion.button>
    </Link>
  );
};

export default ButtonRulesgenerique;
