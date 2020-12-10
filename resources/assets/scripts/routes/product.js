/* eslint-disable no-unused-vars */
import 'bootstrap/js/dist/modal';
import Swiper from 'swiper/swiper-bundle';
import 'select2/dist/js/select2.full';

// import '@chenfengyuan/datepicker/dist/datepicker.min';

export default {
  init() {
    let mySwiper = new Swiper('.gallery-top', {
      autoplay: {
        slidesPerView: 1,
        delay : 5000,
        disableOnInteraction : false,
      },
      speed: 500,
    });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
