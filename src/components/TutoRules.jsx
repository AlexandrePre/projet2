import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DataRules from "../tools/DataRules";

const TutoRules = () => {
  return (
    <div className="rulescontainer">
      <div>
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
            className="leaveRules"
          />
        </Link>
      </div>
      <div className="ruletext">
        {DataRules.map((rule) => (
          <div className="rulesText" key={rule.id}>
            <h2>{rule.text}</h2> <p>{rule.rulestuto}</p>
            <video
              className="rulesVideos"
              loop
              autoPlay
              controls
              muted
              width="400"
              height="300"
            >
              <source src={rule.watch} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutoRules;
