const addProducts = document.querySelectorAll('.amount-plus'),
removeProducts = document.querySelectorAll('.amount-minus'),
amountNum = document.querySelector('.amount-val');

let count = 1;
addProducts.forEach(add => {
    add.addEventListener('click', () => {
        count++
        add.previousElementSibling.innerHTML = count;
    });
})

removeProducts.forEach(rem => {
    rem.addEventListener('click', () => {
        if(count > 1) {
            count--
            rem.nextElementSibling.innerHTML = count;
        }
    });
});




// input mask
$("#phone").inputmask({"mask": "+48999 999 999"});
$("#zip-code").inputmask({"mask": "__-___"});