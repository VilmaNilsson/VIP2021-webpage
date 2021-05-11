let navCurrentPage = window.location.href;

navCurrentPage = navCurrentPage.split('/');
const navPageName = navCurrentPage[navCurrentPage.length - 1];

const navHome = document.querySelector('.navHome');
const navAbout = document.querySelector('.navAbout');
const navEvent = document.querySelector('.navEvents');
const navTheGame = document.querySelector('.navGame');
const navRegister = document.querySelector('.navRegister');

let navShowingAbout = false;
let navShowingEvents = false;
let navShowingGame = false;

switch (navPageName) {
  case 'project':
    navAbout.classList.toggle('currentPage');
    document.querySelector('.navAboutProject').classList.toggle('currentSubPage');
    break;
  case 'team':
    navAbout.classList.toggle('currentPage');
    document.querySelector('.navAboutTeam').classList.toggle('currentSubPage');
    break;
  case 'beta-testing':
    navEvent.classList.toggle('currentPage');
    document.querySelector('.navBetaTesting').classList.toggle('currentSubPage');
    break;
  case 'release':
    navEvent.classList.toggle('currentPage');
    document.querySelector('.navReleaseDay').classList.toggle('currentSubPage');
    break;
  case 'rules':
    navTheGame.classList.toggle('currentPage');
    document.querySelector('.navRules').classList.toggle('currentSubPage');
    break;
  case 'crews':
    navTheGame.classList.toggle('currentPage');
    document.querySelector('.navCrews').classList.toggle('currentSubPage');
    break;
  case 'planets':
    navTheGame.classList.toggle('currentPage');
    document.querySelector('.navPlanets').classList.toggle('currentSubPage');
    break;
  case 'actions':
    navTheGame.classList.toggle('currentPage');
    document.querySelector('.navActions').classList.toggle('currentSubPage');
    break;
  case 'register':
    navRegister.classList.toggle('currentPage');
    break;
  default:
    navHome.classList.toggle('currentPage');
    break;
}

const animationDurations = 200;

const navHam = document.getElementById('navHamContainer');

navHam.addEventListener('click', (event) => {
  event.stopPropagation();
  navHam.classList.toggle('change');
  document.getElementById('navGrid').classList.toggle('navGridOpenClose');
});

function displayNavDiv(divClass, showing) {
  const navDiv = document.querySelector(`.${divClass}`);
  const selectedMenu = document.querySelector('.menuDropVisable');

  if (selectedMenu) {
    const anySelected = Array.from(selectedMenu.className.split(' '));
    if (!anySelected.includes(divClass)) {
      if (anySelected.includes('gameDiv')) {
        selectedMenu.classList.toggle('menuDropDownShowingTheGame');
        navShowingGame = false;
      } else {
        selectedMenu.classList.toggle('menuDropDownShowing');
        if (anySelected.includes('aboutDiv')) navShowingAbout = false;
        if (anySelected.includes('eventDiv')) navShowingEvents = false;
      }
      setTimeout(() => {
        selectedMenu.classList.toggle('menuDropVisable');
      }, animationDurations);
    }
  }

  if (showing) {
    setTimeout(() => {
      navDiv.classList.toggle('menuDropVisable');
    }, animationDurations);
  } else {
    navDiv.classList.toggle('menuDropVisable');
  }

  if (divClass === 'gameDiv') navDiv.classList.toggle('menuDropDownShowingTheGame');
  else navDiv.classList.toggle('menuDropDownShowing');
}

navAbout.addEventListener('click', (event) => {
  event.stopPropagation();
  displayNavDiv('aboutDiv', navShowingAbout);
  navShowingAbout = !navShowingAbout;
});

navEvent.addEventListener('click', (event) => {
  event.stopPropagation();
  displayNavDiv('eventDiv', navShowingEvents);
  navShowingEvents = !navShowingEvents;
});

navTheGame.addEventListener('click', (event) => {
  event.stopPropagation();
  displayNavDiv('gameDiv', navShowingGame);
  navShowingGame = !navShowingGame;
});

document.addEventListener('click', (event) => {
  if (event.target.id !== 'navGrid') {
    document.getElementById('navHamContainer').classList.remove('change');
    document.getElementById('navGrid').classList.remove('navGridOpenClose');
  }
});
