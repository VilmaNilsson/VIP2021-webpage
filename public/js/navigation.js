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

const about = document.querySelector('.navAbout');
const events = document.querySelector('.navEvents');
const theGame = document.querySelector('.navGame');

let isAboutShowing = false;
let isEventsShowing = false;
let isTheGameShowing = false;

document.getElementById('navHamContainer').onclick = function () {
  this.classList.toggle('change');
  document.getElementById('navGrid').classList.toggle('navGridOpenClose');
};

function displayNavDiv(divClass) {
  const navDiv = document.querySelector(divClass);

  navDiv.style.display = 'flex';
}

about.addEventListener('click', () => {
  displayNavDiv('.aboutDiv');
});
