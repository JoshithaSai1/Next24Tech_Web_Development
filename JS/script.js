
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=() => {
    searchForm.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    resetPassword.classList.remove("active");
    registerAccount.classList.remove("active");
    forgotPassword.classList.remove('active');
    createAccount.classList.remove('active');
}
let shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=() => {
    shoppingcart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    resetPassword.classList.remove("active");
    registerAccount.classList.remove("active");
    forgotPassword.classList.remove('active');
    createAccount.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');
let resetPassword=document.querySelector('.reset');
let registerAccount=document.querySelector('.register');
let createAccount=document.querySelector('.account');
let forgotPassword=document.querySelector('.forgot');
document.querySelector('#login-btn').onclick=() => {
    loginForm.classList.toggle('active');
    





shoppingcart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    resetPassword.classList.remove("active");
    registerAccount.classList.remove("active");
    forgotPassword.classList.remove('active');
    createAccount.classList.remove('active');

    
forgotPassword.addEventListener("click",() =>{
  resetPassword.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  registerAccount.classList.remove("active");
  });
  
  
  
  createAccount.addEventListener("click",() =>{
  registerAccount.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  resetPassword.classList.remove("active");
  });
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=() => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    searchForm.classList.remove('active');
    resetPassword.classList.remove('active');
    registerAccount.classList.remove("active");
    forgotPassword.classList.remove('active');
    createAccount.classList.remove('active');
}
window.onscroll=() => {
    searchForm.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
      resetPassword.classList.remove("active");
    registerAccount.classList.remove("active");
    forgotPassword.classList.remove('active');
    createAccount.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
   autoplay:
   {
    delay:7500,
    disableOnInteraction:false,
   },
     breakpoints: {
      0: {
        slidesPerView:1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider",{
    loop: true,
    spaceBetween: 20,
   autoplay:
   {
    delay:7500,
    disableOnInteraction:false,
   },
     breakpoints: {
      0: {
        slidesPerView:1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });