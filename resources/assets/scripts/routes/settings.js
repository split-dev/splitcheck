import 'jquery-mask-plugin'
export default {
  init() {
    const body = document.querySelector('body');
    

   
   

    // * function for "Select" template in modal
    {
      $('.form__single--select-default select[data-toggle="select"]').select2({
        minimumResultsForSearch: Infinity,
        width: '100%',
      });
      $('.form__single--select-user select[data-toggle="select"]').select2({
        minimumResultsForSearch: Infinity,
        width: '100%',
        templateResult: function (state) {
          if (!state.id) {
            return state.text;
          }
          var baseUrl = 'images/profiles';
          var $state = $(`
            <div class="profile-list">
              <figure class="profile-list__avatar">
                <img src="${baseUrl}/${state.element.value.toLowerCase()}.png" alt="avatar">
                <span class="profile-list__symbol"></span>
              </figure>
              <span>${state.text}</span>
            </div>
          `);

          return $state;
        },
        // dropdownParent: $('.form__single--select-user'),
      });


    }



      //background change
      
      $('.account-preferences__card').on('click', function() {
        let bgColor = $(this).attr('data-class');
        $('.section-blur').attr('data-class', bgColor);
       })
     
       //mobile tabs
    $('.settings__hide li').click(function() {
       $(this).parent().slideToggle(400);
       $('.mobile-nav').toggleClass('mobile-before')
       $('.svg-show').toggleClass('svg-top-hide');
       $('.main-content').css('margin-top', '0')
     });
     

     $('.settings__toggle').on('click', function() {
       $('.mobile-nav').toggleClass('mobile-before');
       $('.svg-show').toggleClass('svg-top-hide');
       $('.settings__hide').slideToggle(400);
       
      if ($('.nav').hasClass('mobile-before')) {
        let heightPadding = $('.mobile-nav').height();
        $('.main-content').css('margin-top', heightPadding + 'px');
      } else {
        $('.main-content').css('margin-top', '0')
      }
     });

    
    


    //check input
      $('.nav-item').click(function() {
          $('.nav-item').removeClass('active-item');
          $(this).toggleClass('active-item');
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

      //header height
      let mobileLinks = document.querySelector('.mobile-nav');
     
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