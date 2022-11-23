import React from "react";

const sounds = () => {
  const audio = new Audio("../assets/sounds/rulesButtonSound.mp3");

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <button type="button" onClick={start}>
        Play
      </button>
    </div>
  );
};

export default sounds;
