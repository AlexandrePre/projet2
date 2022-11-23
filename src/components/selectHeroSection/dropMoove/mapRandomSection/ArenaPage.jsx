import { useState } from "react";
import PropTypes from "prop-types";
import Game from "./arenaPageSection/Game";
import GridSelect from "./arenaPageSection/GridSelect";
import ButtonReady from "./arenaPageSection/ButtonReady";
import "../../../../SelectHeroes.css";

const ArenaPage = ({ drop, setDrop, dropComputer, setDropComputer }) => {
  const [isShown, setIsShown] = useState(true);
  const [favorite, setFavorite] = useState([]);

  return (
    <div>
      <Game
        isShown={isShown}
        drop={drop}
        dropComputer={dropComputer}
        setDropComputer={setDropComputer}
      />
      <GridSelect
        isShown={isShown}
        setDrop={setDrop}
        drop={drop}
        favorite={favorite}
        setFavorite={setFavorite}
      />
      <ButtonReady
        isShown={isShown}
        setIsShown={setIsShown}
        favorite={favorite}
      />
    </div>
  );
};
ArenaPage.propTypes = {
  drop: PropTypes.string.isRequired,
  setDrop: PropTypes.string.isRequired,
  dropComputer: PropTypes.string.isRequired,
  setDropComputer: PropTypes.string.isRequired,
};

export default ArenaPage;
