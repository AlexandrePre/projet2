import React from "react";
import { motion } from "framer-motion";

const SelectHeroesBG = () => {
  document.body.style.overflow = "hidden";
  return (
    <motion.div
      transition={{
        duration: 0,
        repeat: 0,
        type: "spring",
        stiffness: 300,
        damping: 35,
      }}
      initial={{ rotate: 0, scale: 1.5, opacity: 1 }}
      animate={{ rotate: 0, scale: 1, opacity: 1 }}
    >
      <video loop autoPlay muted id="SelectHeroesBG">
        <source src="/src/assets/videos/homeBG.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default SelectHeroesBG;
