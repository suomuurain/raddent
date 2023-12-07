import Swiper from '../vendor/swiper';

const swiperReviews = new Swiper('.reviews__swiper', {
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.reviews__swiper-button--next',
    prevEl: '.reviews__swiper-button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  grabCursor: true,
  autoHeight: true,
});

export {swiperReviews};
