/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import 'ion-rangeslider/js/ion.rangeSlider';
import PerfectScrollbar from 'perfect-scrollbar';

export default {
  init() {
    let swiperCard;

    //* option for swiper
    const optionForSwiperProduct = {
      slidesPerView: 'auto',
      spaceBetween: 16,
      setWrapperSize: true,
      navigation: {
        nextEl: '.internal-card__slider .swiper-button-next',
        prevEl: '.internal-card__slider .swiper-button-prev',
      },
      breakpoints: {
        767: {
          spaceBetween: 8,
        },
      },
    }

    //* swiper init
    if($('.internal-card__slider')) {
      swiperCard = new Swiper('.internal-card__slider.swiper-container', optionForSwiperProduct);
    }

    //scroll horizontal
    function resize() {
      ps.update();
    }

    if($('.store-link')) {
      var ps = new PerfectScrollbar('.store-link ul');
      window.onresize = resize;
    }



    //max count strong textarea
    $('.max-text textarea, .form__single--max textarea').keyup(function() {
      var maxCount = 500;
      var revText = this.value.length;
  
          if (this.value.length > maxCount)
              {
              this.value = this.value.substr(0, maxCount);
              }
          var cnt = (maxCount - revText);
          $(this).parent().find($('.count span:first-of-type')).text(revText)
  
      });

      function updatePosition() {
        let leftPosition = ($('.chat-button').offset().left);
        let widthObj = $('.chat-box').width() - 56;
        $('.chat-box').css('left', (leftPosition - widthObj));
      }

      if($('.chat-button').hasClass('chat-button')) {

        updatePosition()

        //open modals
        $('.chat-button').click( function (e) {
          e.preventDefault()
          $(this).toggleClass('close');
          $('.chat-box').toggleClass('show');
        })
        $('.chat-box .close').click( function (e) {
          e.preventDefault()
          $('.chat-button').toggleClass('close');
          $('.chat-box').toggleClass('show');
        })
        $(window).resize( function() {
          updatePosition();
        })
      }

      //store-link mobile scroll
      if($('.store-link').hasClass('store-link')) {
        if(window.innerWidth < 575) {
          let width = window.innerWidth;
          $('.store-link ul').css('width', width + 'px')
        }
      }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
