import 'jquery-mask-plugin'
export default {
  init() {

      //background change
    //  function change () {
    //   let bgColor = $('.account-preferences__card').data('background');
    //   $('.section-blur').css('background-color', bgColor);
    //  }
     let bgColor = $('.account-preferences__card').data('background');
     $('.account-preferences__card').on('click', function() {
      $('.section-blur').css('background-color', bgColor);
     })

     $('.settings__toggle').on('click', function() {
       $('.mobile-nav').toggleClass('mobile-before')
       $('.settings__hide').slideToggle(400);
     })
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

      //mask phone
      
      $('#phone').mask('+38 00 0000 000');

      //tabs link active
      $('.nav-item').click(function (){
       $('.nav-link').removeClass('active');
       $('this').addClass('active');
      });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};