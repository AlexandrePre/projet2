import PropTypes from "prop-types";
import ImgColonne from "./ImgColonne";

/* Random for window just Bad hero sur les 2 left colone */

const BadRandom = ({ heroes }) => {
  const bad = heroes
    .filter(
      (publish) =>
        publish.biography.publisher === "Marvel Comics" ||
        publish.biography.publisher === "DC Comics"
    )
    .filter((karma) => karma.biography.alignment === "bad");

  const ImgBadFilter = bad.map((hero) => <ImgColonne img={hero.images.lg} />);

  const tab = [1, 2, 3, 4, 5, 6];

  return (
    <div className="imgBad">
      {tab.map(() => {
        return ImgBadFilter[Math.floor(Math.random() * ImgBadFilter.length)];
      })}
    </div>
  );
};

BadRandom.propTypes = {
  heroes: PropTypes.arrayOf.isRequired,
};
export default BadRandom;
