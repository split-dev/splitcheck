/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import 'ion-rangeslider/js/ion.rangeSlider';

export default {
  init() {

  
    
    //* Swiper
    {
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
      
    }

    //* function progresBar for "goss-gallery__slider" and SWIPER
    {

      if($('.goss-gallery__slider').hasClass('goss-gallery__slider')) {
        let swiperGoss;

      const optionForSwiperGoss = {
        slidesPerView: 1,
        spaceBetween: 16,
        hashNavigation: true,
        // setWrapperSize: true,
        navigation: {
          nextEl: '.goss-gallery__slider .swiper-button-next',
          prevEl: '.goss-gallery__slider .swiper-button-prev',
        },
        breakpoints: {
          767: {
            spaceBetween: 54,
          },
        },
      }

      // * init swiper in open modal
      $('.modal').on('shown.bs.modal', function () {
        setTimeout(function() {
          swiperGoss = new Swiper('.goss-gallery__slider.swiper-container', optionForSwiperGoss);
          startProgressbar();
        }, 50);
      })

      // Ticking machine
      const slidesNumber = document.querySelectorAll('.goss-gallery__slider.swiper-container .swiper-slide').length - 1;
      const progress = document.querySelector('.goss-gallery');
      const progressWrap = document.querySelector('.goss-gallery__progress-wrap');
      const progressTimer = document.querySelector('.goss-gallery__timer');
      const defaultTime = progressTimer.dataset.time; // time to show one slide "data-time" in .goss-gallery__timer

      let stopFlag = true;
      let isPauseProcessing = false;
      let percentTime; // initial position of the progress bar
      let tick;  // fills strips at specified intervals
      let timeout;
      let timer;
      let time = defaultTime; // time to show one slide
      let progressBarIndex = 0; // contains the index of the current slide

      document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
          isPauseProcessing = false;
        } else {
          isPauseProcessing = true;
        }
      }, false);

      if (progress) {
        for (let i = 0; i <= slidesNumber; i++) {
          // creating progress item
          let div = document.createElement('div');
          let divInner = document.createElement('span');
          let divInnerSpan = document.createElement('span');

          divInnerSpan.classList.add('goss-gallery__in-progress', 'processing' + i);
          divInner.classList.add('goss-gallery__progress-item');
          divInner.setAttribute('data-hash', i);

          divInner.appendChild(divInnerSpan);
          div.appendChild(divInner);
          progressWrap.appendChild(div);
        }
      }

      const startProgressbar = () => {
        resetProgressbar();

        const ItemsForFill = [];

        for (var i = 0; i < progressBarIndex; i++) {
          // leave filled progress item
          progressWrap.children[i].children[0].children[0].style.width = '100%'
        }

        percentTime = 0;
        timeout = progressTimer.dataset.time;
        progressTimer.querySelector('i').innerText = 10;

        tick = setInterval(interval, timeout);
        timer = setInterval(function() {
          if (isPauseProcessing) return;

          if (stopFlag) {
            timeout -= 1;
            progressTimer.querySelector('i').innerText = timeout;
          }
        }, 1000);
      }

      const interval = () => {
        if (isPauseProcessing) return;
        if (!$('.goss-gallery__slider .swiper-slide[data-hash="' + progressBarIndex +'"]').hasClass('swiper-slide-active')) {
          progressBarIndex = $('.goss-gallery__slider .swiper-slide.swiper-slide-active').data('hash');

          startProgressbar();
        } else {
          if (stopFlag) {
            percentTime += 1 / time;
            progressWrap.querySelector('.processing' + progressBarIndex)
              .style.width = percentTime + '%';

            if (percentTime >= 100) {
              swiperGoss.slideNext();
              progressBarIndex++;

              if (progressBarIndex > slidesNumber) {
                // if the index of the current button is greater than the number of slides, it stops playback
                stopProgressbar();
              } else {
                startProgressbar();
              }
            }
          }
        }
      }

      const resetProgressbar = () => {
        const allProgress = progressWrap.querySelectorAll('.goss-gallery__in-progress');
        for (let i = 0; i < allProgress.length; i++) {
          const element = allProgress[i];
          element.style.width = 0 + '%';
        }

        clearInterval(tick);
        clearInterval(timer);
      }

      const stopProgressbar = () => {
        progressWrap.querySelector('.goss-gallery__in-progress.processing' + slidesNumber)
          .style.width = 100 + '%',

        clearInterval(tick);
        clearInterval(timer);

        $('.goss-gallery__timer i').html('0');
      }

      $('.goss-gallery__progress-wrap div').click(function() {
        // changes the button on the progress bar when clicked
        clearInterval(tick);
        clearInterval(timer);

        let goToThisIndex = $(this)
          .find('span')
          .data('hash');

        swiperGoss.slideTo(goToThisIndex);
        startProgressbar();
      });

      $('.goss-gallery__slider .swiper-button').click(function() {
        clearInterval(tick);
        clearInterval(timer);

        startProgressbar();
      });
      }
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
