import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import CardModelFavorite from "./CardModelFavorite";
import { GetHeroesById } from "../tools/GetHeroes";

const FavoritsCards = ({ favorite }) => {
  const [heroes, setHeroes] = useState();
  const getHeroesCallback = async () => {
    setHeroes(await GetHeroesById(favorite));
  };

  useEffect(() => {
    getHeroesCallback();
  }, [favorite]);

  return (
    <div className="FavoritsCards">
      {heroes &&
        heroes.map((hero) => (
          <CardModelFavorite
            className="EachFavorite"
            id={hero.id}
            img={hero.images.lg}
            name={hero.name}
            intelligence={hero.powerstats.intelligence}
            strength={hero.powerstats.strength}
            speed={hero.powerstats.speed}
            durability={hero.powerstats.durability}
            power={hero.powerstats.power}
            combat={hero.powerstats.combat}
            alignment={hero.biography.alignment}
            publisher={hero.biography.publisher}
          />
        ))}
    </div>
  );
};

FavoritsCards.propTypes = {
  favorite: PropTypes.string.isRequired,
};
export default FavoritsCards;
