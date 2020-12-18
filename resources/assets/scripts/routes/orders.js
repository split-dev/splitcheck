/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'bootstrap/js/dist/modal';
import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
      
    if($('.orders__slider').hasClass('orders__slider')) {
        let orderSlider = new Swiper('.internal-card__slider.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 16,
            navigation: {
              nextEl: '.internal-card__slider .swiper-button-next',
              prevEl: '.internal-card__slider .swiper-button-prev',
            },
            breakpoints: {
              1199: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
                991: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                320: {
                  slidesPerView: 'auto',
                  spaceBetween: 8,
                },
              },
        })
    }

  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};





