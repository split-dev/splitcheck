
export default {
  init() {
      $('.nav-item').click(function() {
          $('.nav-item').removeClass('active-item');
          $(this).toggleClass('active-item');
      });
      $('.slideThree').click(function() {
          $(this).toggleClass('check');
      });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};