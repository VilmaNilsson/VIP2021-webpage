const filepath = window.location.pathname;
const navLinks = document.querySelectorAll('.navLink');

navLinks.forEach((link) => {
  if (filepath === link.getAttribute('href')) {
    console.log(`Welcome to page ${link.getAttribute('href')}`);
    link.classList.add('currentPage');
  }
});
