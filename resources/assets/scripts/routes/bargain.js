/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';

export default {
  init() {
      //* function progresBar for "goss-gallery__slider" and SWIPER
    {
      let swiperGoss;
        if($('.goss-gallery__slider').hasClass('goss-gallery__slider')) {
  
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
        setTimeout(function() {
            swiperGoss = new Swiper('.goss-gallery__slider.swiper-container', optionForSwiperGoss);
            startProgressbar();
          }, 20);
  
        // Ticking machine
        const slidesNumber = document.querySelectorAll('.goss-gallery__slider.swiper-container .swiper-slide').length - 1;
        const progress = document.querySelector('.goss-gallery');
        let progressWrap = document.querySelector('.goss-gallery__progress-wrap');
        let progressTimer = document.querySelector('.goss-gallery__timer');
        const defaultTime = progressTimer.dataset.time; // time to show one slide "data-time" in .goss-gallery__timer
        
        if(window.innerWidth < 991) {
          progressWrap = document.querySelector('.goss-gallery__mob .goss-gallery__progress-wrap');
          progressTimer = document.querySelector('.bottom-slider__info .goss-gallery__timer');
        } 
  
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
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
