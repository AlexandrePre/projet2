import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetHeroesById } from "../../tools/GetHeroes";
import "./HeroDetails.css";

const HeroDetails = () => {
  const [hero, setHero] = useState({});
  const { id } = useParams();

  const getHeroesCallback = async () => {
    setHero(await GetHeroesById(id));
  };

  useEffect(() => {
    getHeroesCallback();
  }, [id]);
  console.warn(hero, "caca");
  return (
    <div className="heroDescriptionCodex">
      <h1>{hero && hero.name}</h1>
      <img
        src={hero.images && hero.images.lg}
        alt={hero && hero.name}
        className="heroImage"
      />
    </div>
  );
};

export default HeroDetails;
