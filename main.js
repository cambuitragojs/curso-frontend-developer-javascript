const navMail = document.querySelector('.navbar-email');
const desktopNav = document.querySelector('.desktop-menu');
const navHamIcon = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-menu');


navMail.addEventListener('click', toggleNav);

function toggleNav(){
  desktopNav.classList.toggle('inactive');
}

navHamIcon.addEventListener('click', toggleNavMobile);

function toggleNavMobile() {
  mobileNav.classList.toggle('inactive');
}
