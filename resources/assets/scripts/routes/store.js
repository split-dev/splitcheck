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


      //* ion-rangeslider
    {
      if($('.js-range-slider').hasClass('js-range-slider')) {
        const $range = $('.js-range-slider.form__range');
      const min = 0;
      const max = 2000;
      const marks = [25, 500, 1000];

      const convertToPercent = (num) => {
        return (num - min) / (max - min) * 100;
      }

      const addMarks = ($slider) => {
        var html = '';
        var left = 0;
        var left_p = '';
        var transformLeft = '';
        var i;

        for (i = 0; i < marks.length; i++) {
            left = convertToPercent(marks[i]);
            left_p = left + '%';
            transformLeft = '-' + left + '%';
            html += '<span class="form__range-mark" style="left: ' + left_p + '; transform: translateX(' + transformLeft + ');">';
            html += '$' + marks[i];
            html += '</span>';
        }

        $slider.append(html);
      }

      $range.ionRangeSlider({
        type: 'double',
        grid: false,
        min: min,
        max: max,
        from: 25,
        to: 500,
        step: 5,
        prefix: '$',
        onStart: function(data) {
          addMarks(data.slider);
      },
      });
      }
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
