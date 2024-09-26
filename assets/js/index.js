const showBtns = document.querySelectorAll('.show-btn');

showBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.classList.toggle('hideItem')
    })
})