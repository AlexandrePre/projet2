import { useState } from "react";
import SelectHeroesBG from "./components/selectHeroSection/SelectHeroesBG";
import "./SelectHeroes.css";
import MapRandom from "./components/selectHeroSection/dropMoove/MapRandom";
import ButtonRulesgenerique from "./components/ButtonRulesgenerique";

const SelectHeroes = () => {
  const [drop, setDrop] = useState("");
  const [dropComputer, setDropComputer] = useState("");

  document.body.style.overflow = "hidden";

  return (
    <div className="SelectHeroes">
      <ButtonRulesgenerique />
      <MapRandom
        drop={drop}
        setDrop={setDrop}
        dropComputer={dropComputer}
        setDropComputer={setDropComputer}
      />
      <SelectHeroesBG />
    </div>
  );
};
export default SelectHeroes;
