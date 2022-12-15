window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.toggle('window-scrolled', window.scrollY > 0);
});

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
