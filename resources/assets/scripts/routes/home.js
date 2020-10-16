/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';

export default {
  init() {

    const option = {
      slidesPerView: 4,
      simulateTouch: false,
      mousewheel: true,
    }
    let mySwiper = new Swiper('.card-goss__slider.swiper-container', option);


  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
