import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GetHeroesById } from "../../../../../../tools/GetHeroes";
import CardModelFavorite from "../../../../../CardModelFavorite";

const FavoriteCard = ({ number, className, favorite, setDrop }) => {
  const [heroes, setHeroes] = useState();
  const [isShownCardFavorite, setIsShownCardFavorite] = useState(!false);

  const displayNoneCardFavorite = () => {
    setIsShownCardFavorite((current) => !current);
  };

  const getHeroesCallback = async () => {
    setHeroes(await GetHeroesById(favorite[number - 1]));
  };
  console.warn(number, "hello");

  useEffect(() => {
    getHeroesCallback();
  }, [favorite]);

  return (
    <motion.div
      whileHover={{ scale: 1.5, rotate: -5, y: -30 }}
      className={className}
      style={{ display: isShownCardFavorite ? "block" : "none" }}
      onClick={() => {
        setDrop(heroes.id);
        displayNoneCardFavorite();
      }}
      onKeyDown=""
      id={className}
      role="presentation"
    >
      {heroes && (
        <CardModelFavorite
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
  );
};
FavoriteCard.propTypes = {
  favorite: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  setDrop: PropTypes.string.isRequired,
};
export default FavoriteCard;
