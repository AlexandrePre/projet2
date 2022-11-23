import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Search from "./components/codex/Search";
import Heroes from "./components/codex/Heroes";
import "./Codex.css";

const Codex = ({ heroes }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.body.style.overflow = "visible";
  }, []);

  return (
    <div className="container">
      <Link to="/">
        <motion.img
          whileHover={{ scale: 1.5, rotate: 5, zIndex: 15 }}
          transition={{
            duration: 0,
            repeat: 0,
            type: "spring",
            stiffness: 300,
            damping: 7,
          }}
          initial={{ rotate: 20, scale: 0.1, opacity: 1 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 1 }}
          src="./src/assets/img/LeaveButton.png"
          alt="favoriteButton"
          onKeyDown=""
          role="presentation"
          type="button"
          className="leaveRules"
        />
      </Link>
      <div className="codex">
        <h1>CODEX</h1>
      </div>
      <div className="search-container">
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className="card-call">
        <Heroes heroes={heroes} search={search} />
      </div>
    </div>
  );
};
Codex.propTypes = {
  heroes: PropTypes.arrayOf.isRequired,
};

export default Codex;
