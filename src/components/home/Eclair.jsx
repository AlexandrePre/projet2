import React from "react";
import lightningPic from "../../tools/data";
import LightningItem from "./lightningItems";

const Eclair = () => {
  const lightningMap = lightningPic.map((lightImg) => (
    <LightningItem image={lightImg.image} number={lightImg.number} />
  ));

  return <div>{lightningMap}</div>;
};

export default Eclair;
