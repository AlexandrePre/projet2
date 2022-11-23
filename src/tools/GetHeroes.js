import axios from "axios";
// const for select 24 best heroes.
const selectableHeroes = [
  60, 70, 95, 106, 107, 149, 204, 213, 230, 280, 309, 346, 370, 405, 414, 423,
  460, 522, 620, 644, 655, 659, 717, 720,
];
//  2 const for select All heroes we choose in the game.
const publisherAuthorized = ["Marvel Comics", "DC Comics"];
const hiddenPublisher = [247, 687, 30, 157, 213, 561, 644, 659];
const noNeedCards = [111, 288, 369, 461, 475, 582];
// const with the API url.
const apiUrl = "https://akabab.github.io/superhero-api/api/";

// function with amovible url (with finalUrl you adjust your url) for calling the API.
const requestApi = (finalUrl) => {
  return axios.get(apiUrl + finalUrl).then((response) => response.data);
};
// ------------Components--------------------------------------------//

// Components for get all heroes from the API.
export function GetAllHeroes() {
  return requestApi("all.json");
}
// Components for get 1 hero by is ID.
export function GetHeroesById(id) {
  console.log("COUCOU", id);
  return requestApi(`id/${Number(id)}.json`);
}
// Components for get 1 hero by is ID.
export function GetHeroesByRandomId() {
  return requestApi(`id/${Number(Math.floor(Math.random() * 500) + 1)}.json`);
}

// Components for get all Authorized heroes.
export function GetHeroesAuthorized() {
  const filteredHeroes = GetAllHeroes().then((allHeroes) =>
    allHeroes.filter(
      (heroes) =>
        (publisherAuthorized.includes(heroes.biography.publisher) ||
          hiddenPublisher.includes(heroes.id)) &&
        !noNeedCards.includes(heroes.id)
    )
  );
  return filteredHeroes;
}
// Components for get all Random heroes.
export function GetRandomHeroes() {
  const filteredHeroes = GetHeroesAuthorized().then((allHeroes) =>
    allHeroes.filter((heroes) => !selectableHeroes.includes(heroes.id))
  );
  return filteredHeroes;
}
// Components for get all Authorized heroes.
export function GetselectableHeroes() {
  const filteredHeroes = GetAllHeroes().then((allHeroes) =>
    allHeroes.filter((heroes) => selectableHeroes.includes(heroes.id))
  );
  return filteredHeroes;
}

// Components for get all heroes by Authorized publisher.
export function GetHeroesByPublisher() {
  const filteredHeroes = GetAllHeroes().then((allHeroes) =>
    allHeroes.filter((heroes) =>
      publisherAuthorized.includes(heroes.biography.publisher)
    )
  );
  console.warn(filteredHeroes);
  return filteredHeroes;
}

// Components for get 1 Random Authorized heroe.
export function GetOneRandomHero() {
  const filteredHeroes = GetRandomHeroes().then(
    (allHeroes) => allHeroes[Number(Math.floor(Math.random() * 200) + 1)]
  );
  return filteredHeroes;
}

// Components for get 1 Random Authorized heroe.
export function GetOneRandomSuperHero() {
  const filteredHeroes = GetselectableHeroes().then(
    (allHeroes) => allHeroes[Number(Math.floor(Math.random() * 26) + 1)]
  );
  return filteredHeroes;
}
