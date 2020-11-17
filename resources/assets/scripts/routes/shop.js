/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import 'ion-rangeslider/js/ion.rangeSlider';

export default {
  init() {
    //* Swiper
    {
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
      let swiperGoss = new Swiper('.internal-card__slider .swiper-container', optionForSwiperProduct);
    }

    //* ion-rangeslider
    {
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
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
