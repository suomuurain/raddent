import Swiper from '../vendor/swiper';

const swiperPromo = new Swiper('.promo__swiper', {
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.promo__swiper-button--next',
    prevEl: '.promo__swiper-button--prev',
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

export {swiperPromo};
