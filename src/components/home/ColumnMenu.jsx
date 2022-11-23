import React, { useState } from "react";
import { Link } from "react-router-dom";
import IntroCards from "../../assets/img/IntroCards.png";
import LOGO from "../../assets/img/LOGO.png";
import CartRules from "../../assets/img/CardHomeRules.png";
import CartPlay from "../../assets/img/CardHomePlay.png";
import CartCodex from "../../assets/img/CardHomeCodex.png";
import sound from "../../assets/sounds/readyButtonSound.mp3";
import sound1 from "../../assets/sounds/rulesButtonSound.mp3";
import sound2 from "../../assets/sounds/buttonCodexSound.mp3";
import sound3 from "../../assets/sounds/buttonPlaySound.mp3";
import sound10 from "../../assets/sounds/musicIntro.mp3";

function play() {
  new Audio(sound).play();
}
function play1() {
  new Audio(sound1).play();
}
function play2() {
  new Audio(sound2).play();
}
function play3() {
  new Audio(sound3).play();
}

function play11() {
  new Audio(sound10).stop();
}
const ColumnMenu = () => {
  const [isShown, setIsShown] = useState(true);

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  return (
    <div className="columnMenu">
      <div className="LOGO">
        <img className="logo" src={LOGO} alt="Logo" />
      </div>

      <div style={{ display: isShown ? "block" : "none" }}>
        <button onClick={handleClick} className="btn1" type="button">
          <img
            onClick={() => play()}
            className="carte1"
            src={IntroCards}
            alt="IntroCard"
            onKeyDown=""
            role="presentation"
          />
        </button>
      </div>
      <nav>
        <Link to="/Rules">
          <button
            type="button"
            onClick={() => {
              play1();
              play11();
            }}
            className="btn-start"
          >
            <img
              className="carte2"
              src={CartRules}
              alt="cart"
              style={{ display: isShown ? "none" : "block" }}
              onKeyDown=""
              role="presentation"
            />
          </button>
        </Link>
        <Link to="/SelectHeroes">
          <button type="button" onClick={() => play3()} className="btn-game">
            <img
              className="carte3"
              src={CartPlay}
              alt="cart"
              style={{ display: isShown ? "none" : "block" }}
              onKeyDown=""
              role="presentation"
            />
          </button>
        </Link>
        <Link to="/Codex">
          <button type="button" onClick={() => play2()} className="btn-codex">
            <img
              className="carte4"
              src={CartCodex}
              alt="cart"
              style={{ display: isShown ? "none" : "block" }}
              onKeyDown=""
              role="presentation"
            />
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default ColumnMenu;
