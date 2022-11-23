import PropTypes from "prop-types";
import CardRandom from "../../CardRandom";
import ArenaPage from "./mapRandomSection/ArenaPage";

const randomCardNum = [1, 2, 3, 4, 5, 6, 7, 8];

const MapRandom = ({ drop, setDrop, dropComputer, setDropComputer }) => {
  return (
    <div>
      <ArenaPage
        setDrop={setDrop}
        drop={drop}
        setDropComputer={setDropComputer}
        dropComputer={dropComputer}
      />
      <div id="cardsMaster">
        <div className="cardsRandomContener">
          {randomCardNum.map((el) => {
            return (
              <CardRandom setDrop={setDrop} className={`RandomClass${el}`} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
MapRandom.propTypes = {
  drop: PropTypes.string.isRequired,
  setDrop: PropTypes.string.isRequired,
  dropComputer: PropTypes.string.isRequired,
  setDropComputer: PropTypes.string.isRequired,
};

export default MapRandom;
