let menuBurger = document.querySelector('.menu-burger');
let menu = document.querySelector('.menu');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    menu.classList.toggle('active');
})