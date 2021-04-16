/* eslint-disable linebreak-style */
// array with all the planets and pictures --> needs update when planets ready
const planets = [
  {
    name: 'Pluto',
    imgUrl: 'static/images/Pluto-15.svg',
    link: '#Pluto',
  },
  {
    name: 'Moo',
    imgUrl: 'static/images/Moo-15.svg',
    link: '#Moo',
  },
  {
    name: 'Uranus',
    imgUrl: 'static/images/Pluto-15.svg',
    link: '#Uranus',
  },
  {
    name: 'Urfanny',
    imgUrl: 'static/images/Moo-15.svg',
    link: '#Urfanny',
  },
  {
    name: 'Urbum',
    imgUrl: 'static/images/Pluto-15.svg',
    link: '#Urbum',
  },
  {
    name: 'Urparts',
    imgUrl: 'static/images/Moo-15.svg',
    link: '#Urparts',
  },
];

// random number (max not included) --> got ES-lint error when calling the function from utils.js
// so I moved it here
function randomNumber(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

// randomize then 3 planets for each reload
// randomNumber-function is placed in utils.js
const randomPlanets = [];

for (let i = 0; i < 3; i += 1) {
  const randomNr = randomNumber(0, planets.length);
  randomPlanets.push(planets[randomNr]);
  planets.splice(randomNr, 1);
}

// make elements for these in the planetsContainer on the index-page
const planetWrapper = document.getElementById('indexWrapperDivPlanets');

// function for the HTML-elements for the planets
function createIndexPlanets(arrEl) {
  const planetDiv = document.createElement('a');
  planetDiv.classList.add('indexPlanetDiv');
  planetDiv.setAttribute('href', arrEl.link);
  const planetImg = document.createElement('div');
  planetImg.classList.add('indexPlanetImg');
  planetImg.style.backgroundImage = `url(${arrEl.imgUrl})`;
  const planetName = document.createElement('p');
  planetName.innerText = arrEl.name;
  planetDiv.append(planetImg, planetName);
  return planetDiv;
}

// place it in the container
randomPlanets.forEach((rdmPlanet) => {
  planetWrapper.append(createIndexPlanets(rdmPlanet));
});
