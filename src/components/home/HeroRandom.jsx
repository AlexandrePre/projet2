import PropTypes from "prop-types";
import ImgColonne from "./ImgColonne";

/* Random for window just good hero sur les 2 right colone */

const HeroRandom = ({ heroes }) => {
  const good = heroes
    .filter(
      (publish) =>
        publish.biography.publisher === "Marvel Comics" ||
        publish.biography.publisher === "DC Comics"
    )
    .filter((karma) => karma.biography.alignment === "good");

  const ImgGoodFilter = good.map((hero) => <ImgColonne img={hero.images.lg} />);
  const tab = [1, 2, 3, 4, 5, 6];

  return (
    <div className="imgGood">
      {tab.map(() => {
        return ImgGoodFilter[Math.floor(Math.random() * ImgGoodFilter.length)];
      })}
    </div>
  );
};

HeroRandom.propTypes = {
  heroes: PropTypes.arrayOf.isRequired,
};
export default HeroRandom;
