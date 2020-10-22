/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';

export default {
  init() {

    const option = {
      slidesPerView: 'auto',
      spaceBetween: 12,
      setWrapperSize: true,
      breakpoints: {
        767: {
          slidesPerView: 4,
          mousewheel: true,
          setWrapperSize: false,
          simulateTouch: false,
          // freeMode: true,
        },
      },
    }
    let mySwiper = new Swiper('.card-goss__slider.swiper-container', option);
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
