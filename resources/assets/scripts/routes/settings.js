
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
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};