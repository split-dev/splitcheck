/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import 'bootstrap/js/dist/modal';

export default {
  init() {
      
    $('.gift-shopping__header').on('click', function() {
        $(this).next().slideToggle(400);
    })
    

  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};





