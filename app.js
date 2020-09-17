const menuBtn = document.querySelector('.menu-btn');
const dropDown = document.querySelector('.mobile-nav');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        dropDown.classList.add('open');
        menuOpen = true;


    } else {
        menuBtn.classList.remove('open');
        dropDown.classList.remove('open');
        menuOpen = false;
    }
});