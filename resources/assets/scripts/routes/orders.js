/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'bootstrap/js/dist/modal';
import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
      
    if($('.orders__slider-container').hasClass('orders__slider-container')) {
        let orderSlider = new Swiper('.orders__slider-card.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 16,
            navigation: {
              nextEl: '.orders__slider-card .swiper-button-next',
              prevEl: '.orders__slider-card .swiper-button-prev',
            },
            breakpoints: {
              1300: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
                1199: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                320: {
                  slidesPerView: 'auto',
                  spaceBetween: 8,
                },
              },
        });
        $('.orders__slider-container .swiper-button-prev').click( function(e) {
          e.preventDefault();
          orderSlider.slidePrev()
        })
        $('.orders__slider-container .swiper-button-next').click( function(e) {
          e.preventDefault();
          orderSlider.slideNext()
        });
    }

  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};





