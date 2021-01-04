import 'jquery-mask-plugin'
export default {
  init() {

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
       $(this).addClass('active');
      });

     

      
   
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};