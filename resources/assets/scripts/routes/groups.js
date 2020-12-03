/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
      $('.groups__toggle').on('click', function() {
        $(this).next().slideToggle(400);
        $(this).toggleClass('active-arrow');
      });

      $('.profile-link .btn-blue').on('click', function() {
        $(this).text('');
        $(this).html('<img src="images/groups/check.svg" alt="img"/>')
      });
      //* option for swiper

      var swiper = new Swiper('.groups__slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 12,
        setWrapperSize: false,
        simulateTouch: false,
        preventInteractionOnTransition: true,
        mousewheel: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1260: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            // freeMode: true,
          },
         
          250: {
            slidesPerView: 2,
            setWrapperSize: false,
            simulateTouch: false,
            preventInteractionOnTransition: true,
            mousewheel: true,
            // freeMode: true,
          },
      },
      });


      


      
     
    },


  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {

  },
};
