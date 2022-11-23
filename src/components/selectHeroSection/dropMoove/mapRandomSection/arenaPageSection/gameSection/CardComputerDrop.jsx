import PropTypes from "prop-types";
import { useEffect } from "react";
import { GetOneRandomHero } from "../../../../../../tools/GetHeroes";
import CardModelDropedComputer from "../../../../../CardModelDropedComputer";

const CardComputerDrop = ({
  dropComputer,
  setDropComputer,
  drop,
  isShownCardComputer,
}) => {
  const getHeroesCallback = async () => {
    setDropComputer(await GetOneRandomHero());
  };

  useEffect(() => {
    getHeroesCallback();
  }, [drop]);

  return (
    <div
      className="cardSelectDropedComputer"
      style={{ display: isShownCardComputer ? "block" : "none" }}
    >
      {dropComputer && (
        <CardModelDropedComputer
          isShownCardComputer={isShownCardComputer}
          id={dropComputer.id}
          img={dropComputer.images.lg}
          name={dropComputer.name}
          intelligence={dropComputer.powerstats.intelligence}
          strength={dropComputer.powerstats.strength}
          speed={dropComputer.powerstats.speed}
          durability={dropComputer.powerstats.durability}
          power={dropComputer.powerstats.power}
          combat={dropComputer.powerstats.combat}
          alignment={dropComputer.biography.alignment}
          publisher={dropComputer.biography.publisher}
        />
      )}
    </div>
  );
};

CardComputerDrop.propTypes = {
  drop: PropTypes.string.isRequired,
  dropComputer: PropTypes.string.isRequired,
  setDropComputer: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  lg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  powerstats: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
  intelligence: PropTypes.number.isRequired,
  strength: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  durability: PropTypes.number.isRequired,
  combat: PropTypes.number.isRequired,
  power: PropTypes.number.isRequired,
  biography: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  isShownCardComputer: PropTypes.string.isRequired,
};

export default CardComputerDrop;
