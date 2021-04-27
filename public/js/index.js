/* eslint-disable linebreak-style */
// array with all the planets and pictures --> needs update when planets ready
const planets = [
  {
    name: 'PLUTO',
    imgUrl: '/static/images/planets/Pluto-18.svg',
    link: '/planets#pluto',
  },
  {
    name: 'MOO',
    imgUrl: '/static/images/planets/Moo-18.svg',
    link: '/planets#moo',
  },
  {
    name: 'URANUS',
    imgUrl: '/static/images/planets/Uranus-18.svg',
    link: '/planets#uranus',
  },
  {
    name: 'BLANDITO',
    imgUrl: '/static/images/planets/Blandito-18.svg',
    link: '/planets#blandito',
  },
  {
    name: 'DEAD EARTH',
    imgUrl: '/static/images/planets/Dead-Earth-17.svg',
    link: '/planets#deadEarth',
  },
  {
    name: 'KIM',
    imgUrl: '/static/images/planets/Kim-17.svg',
    link: '/planets#kim',
  },
  {
    name: 'MARGARETH',
    imgUrl: '/static/images/planets/Margareth-17.svg',
    link: '/planets#margareth',
  },
  {
    name: 'UR-MAMA',
    imgUrl: '/static/images/planets/Urmom-18.svg',
    link: '/planets#urMom',
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
