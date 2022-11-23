import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { GetHeroesById } from "../../../../../../../tools/GetHeroes";
import ButtonFavorite from "../cardSelectedSection/ButtonFavorite";
import CardModelSelected from "../../../../../../CardModelSelected";

const CardSelected = ({ toSelected, setFavorite, favorite }) => {
  const [heroes, setHeroes] = useState();
  const getHeroesCallback = async () => {
    setHeroes(await GetHeroesById(toSelected));
  };

  useEffect(() => {
    getHeroesCallback();
  }, [toSelected]);

  return (
    <div className="cardSelected">
      <ButtonFavorite
        setFavorite={setFavorite}
        toSelected={toSelected}
        favorite={favorite}
      />

      {heroes && (
        <CardModelSelected
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
    </div>
  );
};
CardSelected.propTypes = {
  toSelected: PropTypes.string.isRequired,
  setFavorite: PropTypes.string.isRequired,
  favorite: PropTypes.string.isRequired,
};
export default CardSelected;
