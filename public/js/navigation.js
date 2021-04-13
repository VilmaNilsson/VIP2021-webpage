// works without, is this needed?
// const filepath = window.location.pathname;
// const navLinks = document.querySelectorAll('.navLink');
//
// navLinks.forEach((link) => {
//   if (filepath === link.getAttribute('href')) {
//     console.log(`Welcome to page ${link.getAttribute('href')}`);
//     link.classList.add('currentPage');
//   }
// });
let currentPage = window.location.href;

currentPage = currentPage.split('/');
const pageName = currentPage[currentPage.length - 1];

const home = document.querySelector('.navHome');
const about = document.querySelector('.navAbout');
const events = document.querySelector('.navEvents');
const theGame = document.querySelector('.navGame');
const register = document.querySelector('.navRegister');

switch (pageName) {
  case 'about-project':
    about.classList.toggle('currentPage');
    document.querySelector('.navAboutProject').classList.toggle('currentPage');
    break;
  case 'about-team':
    about.classList.toggle('currentPage');
    document.querySelector('.navAboutTeam').classList.toggle('currentPage');
    break;
  case 'beta-testing':
    events.classList.toggle('currentPage');
    document.querySelector('.navBetaTesting').classList.toggle('currentPage');
    break;
  case 'release':
    events.classList.toggle('currentPage');
    document.querySelector('.navReleaseDay').classList.toggle('currentPage');
    break;
  case 'rules':
    theGame.classList.toggle('currentPage');
    document.querySelector('.navRules').classList.toggle('currentPage');
    break;
  case 'crews':
    theGame.classList.toggle('currentPage');
    document.querySelector('.navCrews').classList.toggle('currentPage');
    break;
  case 'planets':
    theGame.classList.toggle('currentPage');
    document.querySelector('.navPlanets').classList.toggle('currentPage');
    break;
  case 'actions':
    theGame.classList.toggle('currentPage');
    document.querySelector('.navActions').classList.toggle('currentPage');
    break;
  case 'register':
    register.classList.toggle('currentPage');
    break;
  default:
    home.classList.toggle('currentPage');
    break;
}

// const currentPage = document.querySelector('.currentPage');

const animationDurations = 500;

document.getElementById('navHamContainer').onclick = function () {
  this.classList.toggle('change');
  document.getElementById('navGrid').classList.toggle('navGridOpenClose');
};

function displayNavDiv(divClass, showing) {
  const navDiv = document.querySelector(divClass);

  if (showing) {
    setTimeout(() => {
      navDiv.classList.toggle('menuDropVisable');
    }, animationDurations);
  } else {
    navDiv.classList.toggle('menuDropVisable');
  }

  if (divClass === '.gameDiv') navDiv.classList.toggle('menuDropDownShowingTheGame');
  else navDiv.classList.toggle('menuDropDownShowing');
}
let navShowingAbout = false;
let navShowingEvents = false;
let navShowingTheGame = false;

about.addEventListener('click', () => {
  displayNavDiv('.aboutDiv', navShowingAbout);
  navShowingAbout = !navShowingAbout;
  about.classList.toggle('selected');
});

events.addEventListener('click', () => {
  displayNavDiv('.eventDiv', navShowingEvents);
  navShowingEvents = !navShowingEvents;
});

theGame.addEventListener('click', () => {
  displayNavDiv('.gameDiv', navShowingTheGame);
  navShowingTheGame = !navShowingTheGame;
});
