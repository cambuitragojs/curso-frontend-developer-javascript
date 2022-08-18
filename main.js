const navMail = document.querySelector('.navbar-email');
const desktopNav = document.querySelector('.desktop-menu');

navMail.addEventListener('click', toggleNav);

function toggleNav() {
  desktopNav.classList.remove('inactive');
}
