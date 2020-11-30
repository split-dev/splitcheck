/* eslint-disable no-unused-vars */

export default {
  init() {
      $('.groups__toggle').on('click', function() {
        $(this).next().slideToggle(400);
        $(this).toggleClass('active-arrow');
      });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
