import PropTypes from "prop-types";
import LifeCounter from "../../../../../../assets/img/LifeCounter.png";
import LifeCounterGlass from "../../../../../../assets/img/LifeCounterGlass.png";

const ArenaLifeCounter = ({
  computerLife,
  firstPlayerLife,
  fightThemeIcone,
}) => {
  return (
    <div id="lifecounter">
      <img id="lifecounterSupport" src={LifeCounter} alt="Life counter" />
      <img id="FightThemeIcon" src={fightThemeIcone.img} alt="Fight theme" />
      <img
        id="lifecounterGlass"
        src={LifeCounterGlass}
        alt="Life counter glass"
      />
      <div id="score">
        <p id="computerLife">{computerLife}</p>
        <p id="firstPlayerLife">{firstPlayerLife}</p>
      </div>
    </div>
  );
};
ArenaLifeCounter.propTypes = {
  computerLife: PropTypes.number.isRequired,
  firstPlayerLife: PropTypes.number.isRequired,
  fightThemeIcone: PropTypes.arrayOf.isRequired,
};
export default ArenaLifeCounter;
