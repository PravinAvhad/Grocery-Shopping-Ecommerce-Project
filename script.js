let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginform.classList.remove('active');
}
let cart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}
let loginform = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginform.classList.remove('active');
}
window.onscroll= () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginform.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1020: {
        slidesPerView: 3
      },
    },
});