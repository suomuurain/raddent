import Swiper from '../vendor/swiper';

const swiperFounder = new Swiper('.about-founder__swiper', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.about-founder__swiper-pagination',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  grabCursor: true,
  autoHeight: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

export {swiperFounder};
