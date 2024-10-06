const menuBtn = document.querySelector('.menu-btn');
const body = document.querySelector('body');
const basket_count = document.querySelector('.basket-count');

function funcTest() {
    if(basket_count.textContent == 0) {
        basket_count.classList.add('d-none')
    }
}

funcTest();

menuBtn.addEventListener('click', () => {
    menuBtn.parentElement.parentElement.classList.toggle('showMenu');
    body.classList.toggle('bodyStopScroll')
});

document.addEventListener('click', (e) => {
    if(e.target == menuBtn.parentElement.parentElement) {
        menuBtn.parentElement.parentElement.classList.remove('showMenu');
        body.classList.remove('bodyStopScroll')
    }
});



// chat 
const chat = document.querySelector('.chat');
const chatBtn = document.querySelector('.chat-btn');
const chatBtn_hide = document.querySelector('.chat-hide');

chatBtn.addEventListener('click', () => {
    chat.classList.toggle('showChat')
})

chatBtn_hide.addEventListener('click', () => {
    chat.classList.remove('showChat')
});


document.addEventListener('click', (e) => {
    chat.contains(e.target) || chat.classList.remove('showChat')
})