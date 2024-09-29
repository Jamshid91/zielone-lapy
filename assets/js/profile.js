const change_subscriptions = document.querySelector('.change-subscriptions');
const save_subscriptions = document.querySelector('.subscriptions-save');

change_subscriptions.addEventListener('click', () => {
    change_subscriptions.parentElement.classList.toggle('show-subscriptions');
});
save_subscriptions.addEventListener('click', () => {
    save_subscriptions.parentElement.parentElement.parentElement.classList.remove('show-subscriptions');
});

document.addEventListener('click', (e) => {
    change_subscriptions.parentElement.contains(e.target) || change_subscriptions.parentElement.classList.remove('show-subscriptions');
})