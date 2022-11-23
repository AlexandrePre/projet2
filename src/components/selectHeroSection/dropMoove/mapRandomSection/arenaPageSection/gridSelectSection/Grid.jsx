import PropTypes from "prop-types";
import { motion } from "framer-motion";
import dataSelection from "../../../../../../tools/dataSelection";
import CardSelected from "./gridSection/CardSelected";
import "./Grid.css";

const Grid = ({ toSelected, setToSelected }) => {
  return (
    <div>
      <CardSelected toSelected={toSelected} />
      <div className="grid">
        {dataSelection.map((el) => {
          if (el.isHidden === false) {
            return (
              <motion.img
                whileHover={{ scale: 1.2, rotate: -2 }}
                transition={{
                  duration: 0,
                  delay: 0,
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
                initial={{ rotate: 20, scale: 0, opacity: 1 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 1 }}
                onClick={() => setToSelected(el.id)}
                id={el.id}
                className="eachHero"
                src={el.img}
                alt={el.name}
                onKeyDown=""
                role="presentation"
              />
            );
          }
          return (
            <img
              style={{ visibility: "hidden" }}
              className="eachHero"
              src={el.img}
              alt={el.name}
            />
          );
        })}
      </div>
    </div>
  );
};
Grid.propTypes = {
  toSelected: PropTypes.string.isRequired,
  setToSelected: PropTypes.string.isRequired,
};

export default Grid;
