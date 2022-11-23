import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { GetHeroesById } from "../../../../../../../tools/GetHeroes";
import CardModelDroped from "../../../../../../CardModelDroped";

const CardDroped = ({
  drop,
  isShownCardFavorite1,
  isShownCardFavorite2,
  isShownCardPlayer,
}) => {
  const [heroes, setHeroes] = useState();
  const getHeroesCallback = async () => {
    setHeroes(await GetHeroesById(drop));
  };

  useEffect(() => {
    getHeroesCallback();
  }, [drop]);

  return (
    <div
      className="cardSelectDroped"
      style={{ display: isShownCardPlayer ? "block" : "none" }}
    >
      {heroes && (
        <CardModelDroped
          isShownCardFavorite2={isShownCardFavorite2}
          isShownCardFavorite1={isShownCardFavorite1}
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
          isShow={isShownCardPlayer}
        />
      )}
    </div>
  );
};
CardDroped.propTypes = {
  drop: PropTypes.string.isRequired,
  isShownCardFavorite1: PropTypes.bool.isRequired,
  isShownCardFavorite2: PropTypes.bool.isRequired,
  isShownCardPlayer: PropTypes.bool.isRequired,
};
export default CardDroped;
