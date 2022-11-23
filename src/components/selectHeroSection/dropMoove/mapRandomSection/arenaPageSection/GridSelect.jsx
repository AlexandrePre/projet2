import { useState } from "react";
import PropTypes from "prop-types";
import Grid from "./gridSelectSection/Grid";
import CardSelected from "./gridSelectSection/gridSection/CardSelected";
import FavoriteCard from "./gridSelectSection/FavoriteCard";
import "../../../../../SelectHeroes.css";

const GridSelect = ({ isShown, setDrop, drop, favorite, setFavorite }) => {
  const favoriteCard = [1, 2];
  const [toSelected, setToSelected] = useState();

  return (
    <div className="SelectHeroes">
      {favoriteCard.map((card) => {
        return (
          <FavoriteCard
            favorite={favorite}
            number={card}
            setDrop={setDrop}
            drop={drop}
            className={`cardFavorite0${card}`}
          />
        );
      })}

      <div style={{ display: isShown ? "block" : "none" }}>
        <Grid toSelected={toSelected} setToSelected={setToSelected} />
        <CardSelected
          id="cardsMaster"
          toSelected={toSelected}
          favorite={favorite}
          setFavorite={setFavorite}
        />
      </div>
    </div>
  );
};
GridSelect.propTypes = {
  isShown: PropTypes.bool.isRequired,
  setDrop: PropTypes.string.isRequired,
  drop: PropTypes.string.isRequired,
  favorite: PropTypes.string.isRequired,
  setFavorite: PropTypes.string.isRequired,
};
export default GridSelect;
