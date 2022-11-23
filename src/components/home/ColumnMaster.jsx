import React from "react";
import PropTypes from "prop-types";
import HeroRandom from "./HeroRandom";
import ColoneMenu from "./ColumnMenu";
import BadRandom from "./BadRandom";

const ColumnMaster = ({ heroes }) => {
  return (
    <div className="Column">
      <div className="ColumnSlideDown">
        <BadRandom heroes={heroes} />
      </div>
      <div className="ColumnSlideHigh">
        <BadRandom heroes={heroes} />
      </div>
      <div className="ColumnMenu">
        <ColoneMenu />
      </div>
      <div className="ColumnSlideHigh">
        <HeroRandom heroes={heroes} />
      </div>
      <div className="ColumnSlideDown">
        <HeroRandom heroes={heroes} />
      </div>
    </div>
  );
};
ColumnMaster.propTypes = {
  heroes: PropTypes.arrayOf.isRequired,
};
export default ColumnMaster;
