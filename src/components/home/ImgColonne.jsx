import React from "react";
import PropTypes from "prop-types";

const ImgColonne = ({ img }) => {
  return (
    <div>
      <img id="ImgHero" src={img} alt="hero" />
    </div>
  );
};

ImgColonne.propTypes = {
  img: PropTypes.arrayOf.isRequired,
};
export default ImgColonne;
