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
       $('.svg-show').toggleClass('svg-top-hide');
       $('.settings__hide').slideToggle(400);
     })

     $('.svg-revert').on('click', function() {
      $('.mobile-nav').removeClass('mobile-before')
      $('.svg-show').removeClass('svg-top-hide');
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

      //check on and off -- text
      if ($('.slideThree').hasClass('check')) {
        $('.check-on').addClass('strong-text');
        $('.check-off').removeClass('strong-text');
      } else {
        $('.check-off').addClass('strong-text');
        $('.check-on').removeClass('strong-text');
      }

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

      //header height
      let mobileLinks = document.querySelector('.mobile-nav');
      let body = document.querySelector('body');
      // let header = document.querySelector('.header');
      

      

      function topMobile() {
        body.addEventListener('wheel', function(e) {
  
          let meNow = false;
  
          for (let i = 0; i < e.path.length - 3; i++) {
            const element = e.path[i];
            if (element) {
              if (element.classList.contains('mobile-nav')) {
                meNow = true
              }
            }
          }
  
          if (!meNow) {
            if (e.deltaY < 0) {
              if (window.matchMedia('(min-width: 767px)').matches) {
                mobileLinks.style.top = '';
              } else {
                mobileLinks.style.top = '55px';
              }
            } else {
              if (window.matchMedia('(min-width: 767px)').matches) {
                mobileLinks.style.top = '';
              } else {
                mobileLinks.style.top = '0';
              }
            }
          }
        })
      }
      topMobile();
      
     
      
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};