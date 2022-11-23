import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CardModelRandom from "./CardModelRandom";
import { GetOneRandomHero } from "../tools/GetHeroes";

const CardRandom = ({ setDrop }) => {
  const [heroes, setHeroes] = useState();

  const [isShownCardRandom, setIsShownCardRandom] = useState(!true);

  const displayNoneCardRandom = () => {
    setIsShownCardRandom((current) => !current);
  };

  const getHeroesCallback = async () => {
    setHeroes(await GetOneRandomHero());
  };

  useEffect(() => {
    getHeroesCallback();
  }, []);

  return (
    <div className="cardRandomSize" id="zoomCardRandom">
      <motion.div
        whileHover={{ scale: 1.5, rotate: -5, y: -50 }}
        className="cardRandom"
      >
        {heroes && (
          <CardModelRandom
            isShownCardRandom={isShownCardRandom}
            displayNoneCardRandom={displayNoneCardRandom}
            setDrop={setDrop}
            id={heroes.id}
            img={heroes.images.lg}
            name={heroes.name}
            intelligence={heroes.powerstats.intelligence}
            strength={heroes.powerstats.strength}
            speed={heroes.powerstats.speed}
            durability={heroes.powerstats.durability}
            power={heroes.powerstats.power}
            combat={heroes.powerstats.combat}
            alignment={heroes.biography.alignment}
            publisher={heroes.biography.publisher}
          />
        )}
      </motion.div>
    </div>
  );
};
CardRandom.propTypes = {
  setDrop: PropTypes.string.isRequired,
};
export default CardRandom;
