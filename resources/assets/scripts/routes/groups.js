/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
      $('.groups__toggle').on('click', function() {
        $(this).next().slideToggle(400);
        $(this).toggleClass('active-arrow');
      });

      //* option for swiper

      var swiper = new Swiper('.groups__slider.swiper-container', {
        slidesPerView: 3,
        setWrapperSize: false,
        simulateTouch: false,
        preventInteractionOnTransition: true,
        mousewheel: true,
        navigation: {
          nextEl: '.connections__select--follower .swiper-button-next',
          prevEl: '.connections__select--follower .swiper-button-prev',
        },
        breakpoints: {
          1260: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
            // freeMode: true,
          },
          360: {
            slidesPerView: 4,
          },
          250: {
            slidesPerView: 4,
            setWrapperSize: false,
            simulateTouch: false,
            preventInteractionOnTransition: true,
            mousewheel: true,
            // freeMode: true,
          },
      },
      });


      


      //* swiper init
     
    },


  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {

  },
};
