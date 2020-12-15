const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('.hidden-menu');
const carouselInner = document.querySelector('.carousel-inner');


hamburger.addEventListener('click', function () {
    menu.classList.toggle('show-menu');
    carouselInner.classList.toggle('show-carousel-inner')

})