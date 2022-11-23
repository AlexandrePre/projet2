import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HeroCards from "./HeroCards";

const Heroes = ({ heroes, search }) => {
  return (
    <div className="all-container">
      {heroes
        .filter((hero) =>
          hero.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((hero) => (
          <Link to={`/Codex/${hero.id}`} key={hero.id}>
            <HeroCards
              id={hero.id}
              name={hero.name}
              image={hero.images.lg}
              int={hero.powerstats.intelligence}
              str={hero.powerstats.strength}
              agi={hero.powerstats.speed}
              sta={hero.powerstats.durability}
              fgt={hero.powerstats.combat}
              pwr={hero.powerstats.power}
              align={hero.biography.alignment}
            />
          </Link>
        ))}
    </div>
  );
};
Heroes.propTypes = {
  heroes: PropTypes.arrayOf.isRequired,
  search: PropTypes.string.isRequired,
};

export default Heroes;
