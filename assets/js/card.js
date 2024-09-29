
var productSlider = new Swiper('.big-card', {
    spaceBetween: 0,
    centeredSlides: false,
    loop:true,
    loopedSlides: 4,
    resizeObserver:true,

    navigation: {
      nextEl: '.swiper-product-next',
      prevEl: '.swiper-product-prev',
    },
});
var productThumbs = new Swiper('.small-card', {
    spaceBetween: 12,
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: 4, 
});
productSlider.controller.control = productThumbs;
productThumbs.controller.control = productSlider;



const select = document.querySelector('.select-head');
const options = document.querySelectorAll('.option');

select.addEventListener('click', () => {
  select.parentElement.classList.toggle('showSelect')
});

options.forEach(option => {
  option.addEventListener('click', () => {
    option.parentElement.parentElement.classList.remove('showSelect');
    option.parentElement.previousElementSibling.children[0].textContent = option.textContent
  })
})


document.addEventListener('click', (e) => {
  select.parentElement.contains(e.target) || select.parentElement.classList.remove('showSelect')
})