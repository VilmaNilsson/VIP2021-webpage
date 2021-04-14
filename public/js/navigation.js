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
let navCurrentPage = window.location.href;

navCurrentPage = navCurrentPage.split('/');
const navPageName = navCurrentPage[navCurrentPage.length - 1];

const navHome = document.querySelector('.navHome');
const navAbout = document.querySelector('.navAbout');
const navEvent = document.querySelector('.navEvents');
const navTheGame = document.querySelector('.navGame');
const navRegister = document.querySelector('.navRegister');

switch (navPageName) {
  case 'navAbout-project':
    navAbout.classList.toggle('currentPage');
    document.querySelector('.navnavAboutProject').classList.toggle('currentPage');
    break;
  case 'navAbout-team':
    navAbout.classList.toggle('currentPage');
    document.querySelector('.navnavAboutTeam').classList.toggle('currentPage');
    break;
  case 'beta-testing':
    navEvent.classList.toggle('currentPage');
    document.querySelector('.navBetaTesting').classList.toggle('currentPage');
    break;
  case 'release':
    navEvent.classList.toggle('currentPage');
    document.querySelector('.navReleaseDay').classList.toggle('currentPage');
    break;
  case 'rules':
    navTheGame.classList.toggle('currentPage');
    document.querySelector('.navRules').classList.toggle('currentPage');
    break;
  case 'crews':
    navTheGame.classList.toggle('currentPage');
    document.querySelector('.navCrews').classList.toggle('currentPage');
    break;
  case 'planets':
    navTheGame.classList.toggle('currentPage');
    document.querySelector('.navPlanets').classList.toggle('currentPage');
    break;
  case 'actions':
    navTheGame.classList.toggle('currentPage');
    document.querySelector('.navActions').classList.toggle('currentPage');
    break;
  case 'register':
    navRegister.classList.toggle('currentPage');
    break;
  default:
    navHome.classList.toggle('currentPage');
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
let navShowingGame = false;

navAbout.addEventListener('click', () => {
  displayNavDiv('.aboutDiv', navShowingAbout);
  navShowingAbout = !navShowingAbout;
  navAbout.classList.toggle('selected');
});

navEvent.addEventListener('click', () => {
  displayNavDiv('.eventDiv', navShowingEvents);
  navShowingEvents = !navShowingEvents;
});

navTheGame.addEventListener('click', () => {
  displayNavDiv('.gameDiv', navShowingGame);
  navShowingGame = !navShowingGame;
});
