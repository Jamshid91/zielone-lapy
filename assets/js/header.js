const menuBtn = document.querySelector('.menu-btn');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menuBtn.parentElement.parentElement.classList.toggle('showMenu');
    body.classList.toggle('bodyStopScroll')
});

document.addEventListener('click', (e) => {
    if(e.target == menuBtn.parentElement.parentElement) {
        menuBtn.parentElement.parentElement.classList.remove('showMenu');
        body.classList.remove('bodyStopScroll')
    }
})