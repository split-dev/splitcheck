
export default {
  init() {

      //background change
    //   let bgEl = getElementById('background');

    function changeColor(colorValue) {
        document.bgEl.style.background = document.getElementById(colorValue).dataset.color;
    }
    console.log(changeColor);

    //check input
      $('.nav-item').click(function() {
          $('.nav-item').removeClass('active-item');
          $(this).toggleClass('active-item');
      });
      $('.slideThree').click(function() {
          $(this).toggleClass('check');
      });

      //password hide
      $('.show').click( function () {
        if ($(this).prev().attr('type') === 'password') {
          $(this).prev().attr('type', 'text');
        } else {
          $(this).prev().attr('type', 'password');
        }
      });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};