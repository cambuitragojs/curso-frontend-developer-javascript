// Variables
const navMail = document.querySelector('.navbar-email');
const desktopNav = document.querySelector('.desktop-menu');
const navHamIcon = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.product-detail');
const productDetail = document.querySelector('.product');
const cardsWrapper = document.querySelector('.cards-container');
const iconCloseDetail = document.querySelector('.product-detail-close');

// Menú desktop
navMail.addEventListener('click', toggleNav);

function toggleNav(){
  if (!asideCart.classList.contains('inactive') || !productDetail.classList.contains('inactive')) {
    asideCart.classList.add('inactive');
    productDetail.classList.add('inactive');
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
  closeProductDetail();
}

// Menú Cart
iconCart.addEventListener('click', toggleIconCart);

function toggleIconCart() {
  if (!mobileNav.classList.contains('inactive') || !desktopNav.classList.contains('inactive') || !productDetail.classList.contains('inactive')) {
    mobileNav.classList.add('inactive');
    desktopNav.classList.add('inactive');
    productDetail.classList.add('inactive');
  }
  asideCart.classList.toggle('inactive');
}

// Open, Close Detail
iconCloseDetail.addEventListener('click', closeProductDetail);

function closeProductDetail() {
  productDetail.classList.add('inactive');
}

function openProductDetail(){
  asideCart.classList.add('inactive');
  mobileNav.classList.add('inactive');
  desktopNav.classList.add('inactive');
  productDetail.classList.remove('inactive');
}

// Product category

const productList = []
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg'
});
productList.push({
  name: 'Bike DTX',
  price: 220,
  image: 'https://images.pexels.com/photos/5446316/pexels-photo-5446316.jpeg'
});
productList.push({
  name: 'Bike - RHT',
  price: 110,
  image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg'
});
productList.push({
  name: 'Bike - XYZ',
  price: 110,
  image: 'https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
  name: 'Bike - XYZ',
  price: 110,
  image: 'https://images.pexels.com/photos/90454/pexels-photo-90454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg'
});
productList.push({
  name: 'Bike DTX',
  price: 220,
  image: 'https://images.pexels.com/photos/5446316/pexels-photo-5446316.jpeg'
});
productList.push({
  name: 'Bike - RHT',
  price: 110,
  image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg'
});
productList.push({
  name: 'Bike - XYZ',
  price: 110,
  image: 'https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
  name: 'Bike - XYZ',
  price: 110,
  image: 'https://picsum.photos/300/300'
});

function renderProduct(arr){
  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add("product-card");

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.image);
    imgProduct.setAttribute('alt', product.name);
    imgProduct.addEventListener('click', openProductDetail);


    const productInfo = document.createElement('div');
    productInfo.classList.add("product-info");

    const productInfoWrap = document.createElement('div');

    const productInfoPrice = document.createElement('p');
    productInfoPrice.innerHTML = '$' + product.price;
    const productInfoName = document.createElement('p');
    productInfoName.innerHTML = product.name;

    productInfoWrap.append(productInfoPrice, productInfoName);

    const productInfoFigure = document.createElement('figure');
    const imgProductAdd = document.createElement('img');
    imgProductAdd.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(imgProductAdd);
    productInfo.append(productInfoWrap, productInfoFigure);
    productCard.append(imgProduct, productInfo);

    cardsWrapper.appendChild(productCard);
  }
}
renderProduct(productList);



