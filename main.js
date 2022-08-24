// Variables
const navMail = document.querySelector('.navbar-email');
const desktopNav = document.querySelector('.desktop-menu');
const navHamIcon = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart')
const asideCart = document.querySelector('.product-detail')

// Menú desktop
navMail.addEventListener('click', toggleNav);

function toggleNav(){
  if (!asideCart.classList.contains('inactive')) {
    asideCart.classList.add('inactive');
  }
  desktopNav.classList.toggle('inactive');
  navMail.classList.toggle('active');
}

// Menú mobile
navHamIcon.addEventListener('click', toggleNavMobile);

function toggleNavMobile() {
  if (!asideCart.classList.contains('inactive')){
    asideCart.classList.add('inactive');
  }
  mobileNav.classList.toggle('inactive');
}

// Menú Cart
iconCart.addEventListener('click', toggleIconCart);

function toggleIconCart() {
  if (!mobileNav.classList.contains('inactive') || !desktopNav.classList.contains('inactive')) {
    mobileNav.classList.add('inactive');
    desktopNav.classList.add('inactive');
  }
  asideCart.classList.toggle('inactive');
}