import PropTypes from "prop-types";

const ArenaLifeCounter = ({
  computerLife,
  firstPlayerLife,
  fightThemeIcone,
}) => {
  return (
    <div id="lifecounter">
      <img
        id="lifecounterSupport"
        src="./src/assets/img/LifeCounter.png"
        alt="Life counter"
      />
      <img id="FightThemeIcon" src={fightThemeIcone.img} alt="Fight theme" />
      <img
        id="lifecounterGlass"
        src="./src/assets/img/LifeCounterGlass.png"
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
