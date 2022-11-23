import React from "react";
import PropTypes from "prop-types";

const HeroCards = ({ name, image, int, str, agi, sta, fgt, pwr, align }) => {
  const style = `${align} card`;

  return (
    <div
      className="card-container"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={style}>
        <div className="detail-wrapper">
          <h3>{name}</h3>
        </div>
        <div className="vide" />

        <div className="stats">
          <div className="firstStats">
            <h4>INT {int}</h4>
            <h4>FOR {str}</h4>
            <h4>AGI {agi}</h4>
          </div>
          <div className="secondStats">
            <h4>STA {sta}</h4>
            <h4>FGT {fgt}</h4>
            <h4>PWR {pwr}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
HeroCards.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  int: PropTypes.number.isRequired,
  str: PropTypes.number.isRequired,
  agi: PropTypes.number.isRequired,
  sta: PropTypes.number.isRequired,
  fgt: PropTypes.number.isRequired,
  pwr: PropTypes.number.isRequired,
  align: PropTypes.string.isRequired,
};

export default HeroCards;
