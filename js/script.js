const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".hidden-menu");
const carouselInner = document.querySelector(".carousel-inner");
const mainNav = document.querySelector(".main-nav");
const nextBtn = document.querySelector(".carousel-control-next");
const prevBtn = document.querySelector(".carousel-control-prev");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("show-menu");
  carouselInner.classList.toggle("show-carousel-inner");
  mainNav.classList.toggle("show-main-nav");
});
