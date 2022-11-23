import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { GetHeroesAuthorized } from "./tools/GetHeroes";

import Home from "./Home";
import Codex from "./Codex";
import Arena from "./components/selectHeroSection/dropMoove/mapRandomSection/ArenaPage";
import SelectHeroes from "./SelectHeroes";
import Win from "./components/selectHeroSection/dropMoove/mapRandomSection/arenaPageSection/gameSection/Win";
import Loose from "./components/selectHeroSection/dropMoove/mapRandomSection/arenaPageSection/gameSection/Loose";
import Draw from "./components/selectHeroSection/dropMoove/mapRandomSection/arenaPageSection/gameSection/Draw";
import HeroDetails from "./components/codex/HeroDetails";
import Rules from "./Rules";
import "./App.css";

const App = () => {
  const [heroes, setHeroes] = useState([]);

  const getHeroesCallback = async () => {
    setHeroes(await GetHeroesAuthorized());
  };

  useEffect(() => {
    getHeroesCallback();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home heroes={heroes} />} />
        <Route path="/Codex" element={<Codex heroes={heroes} />} />
        <Route path="/Codex/:id" element={<HeroDetails />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Arena" element={<Arena heroes={heroes} />} />
        <Route path="/Win" element={<Win />} />
        <Route path="/Loose" element={<Loose />} />
        <Route path="/Draw" element={<Draw />} />
        <Route
          path="/SelectHeroes"
          element={<SelectHeroes heroes={heroes} />}
        />
        <Route path="/*" element={<Rules />} />
      </Routes>
    </div>
  );
};

export default App;
