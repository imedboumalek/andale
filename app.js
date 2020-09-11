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

function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if (where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}