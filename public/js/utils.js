/* eslint-disable linebreak-style */
// We'll store common utility functions within this file

// function byId(id) {
//   return document.getElementById(id);
// }

// arrow-button in footer
const toTopBtn = document.getElementById('scrollToTop');
// takes the user back to the top of the page
toTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // for the other browsers
});

const card = document.querySelectorAll('.cardSpace');

card.forEach( el => {
  el.addEventListener('mouseover', () => {
    console.log('flippa mig');
  })
})