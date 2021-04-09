//works without, is this needed?
const filepath = window.location.pathname;
const navLinks = document.querySelectorAll('.navLink');

navLinks.forEach((link) => {
  if (filepath === link.getAttribute('href')){
    console.log (`Welcome to page ${link.getAttribute('href')}`);
    link.classList.add ('currentPage');
  }
});

document.getElementById('navHamContainer').onclick = function(){
  this.classList.toggle('change');
  document.getElementById('navGrid').classList.toggle('navGridOpenClose');
};
