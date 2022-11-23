import PropTypes from "prop-types";
import React from "react";

const LightningItem = ({ number, image }) => {
  return (
    <div className={`lightning${number}`}>
      <img className="lightning" src={image} alt="lightning" />
    </div>
  );
};

LightningItem.propTypes = {
  image: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default LightningItem;
