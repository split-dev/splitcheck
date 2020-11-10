/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';

export default {
  init() {
    //* Swiper
    {
      //* option for swiper
      const optionForSwiperProduct = {
        slidesPerView: 'auto',
        spaceBetween: 16,
        setWrapperSize: true,
        navigation: {
          nextEl: '.internal-card__slider .swiper-button-next',
          prevEl: '.internal-card__slider .swiper-button-prev',
        },
        breakpoints: {
          767: {
            spaceBetween: 8,
          },
        },
      }


      //* swiper init
      let swiperGoss = new Swiper('.internal-card__slider.swiper-container', optionForSwiperProduct);
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
