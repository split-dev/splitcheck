/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import 'bootstrap/js/dist/modal';
export default {
  init() {
    function initNumber(number, element) {
        let allSlide = $(element).find($('.swiper-slide')).length;
        let counter = Math.floor(number);
        let countUser = allSlide - counter;
       $(element).find($('.count-slider')).attr('data-count', countUser);
       $(element).find($('.count-slider')).text('+'+ countUser);
        
       //password hide
      $('.show').click( function () {
        if ($(this).prev().attr('type') === 'password') {
          $(this).prev().attr('type', 'text');
        } else {
          $(this).prev().attr('type', 'password');
        }
      });
      }
      $('.form-radio').click( function() {
        $(this).next().slideToggle(400);
      })
      if (('.checkout__slider-container').hasClass('checkout__slider-container')) {
        var swiper = new Swiper('.checkout__slider.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 8,
            setWrapperSize: false,
            simulateTouch: false,
            preventInteractionOnTransition: true,
            mousewheel: true,
            navigation: {
              nextEl: '.connections__select--family .swiper-button-next',
              prevEl: '.connections__select--family .swiper-button-prev',
            },
            breakpoints: {
                1260: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                  // freeMode: true,
                },
                360: {
                  slidesPerView: 3,
                },
                250: {
                  slidesPerView: 3,
                  setWrapperSize: false,
                  simulateTouch: false,
                  preventInteractionOnTransition: true,
                  mousewheel: true,
                  // freeMode: true,
                },
              },
              on: {
                init: function (event) {
                  initNumber(event.params.slidesPerView, $(event.el).parent());
                },
              },
          });
      }
      
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
