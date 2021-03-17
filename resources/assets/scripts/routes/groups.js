/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
    
    $('.groups__oval').click(function() {
      $(this).toggleClass('active-oval-btn');
    });
    $('#phone').mask('+38 00 0000 000');

      
     
    },


  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {

  },
};
