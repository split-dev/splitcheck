import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
    //eslint-disable-next-line no-unused-vars
    var swiper = new Swiper('.swiper-container', {
      autoplay: {
        slidesPerView: 1,
        delay : 5000,
        disableOnInteraction : false,
      },
      speed: 500,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'progress-bar',
      },
      on: {
        init: function () {
          $('.swiper-progress-bar').removeClass('animate');
          $('.swiper-progress-bar').removeClass('active');
          $('.swiper-progress-bar').eq(0).addClass('animate');
          $('.swiper-progress-bar').eq(0).addClass('active');
        },
        slideChangeTransitionStart: function () {
          $('.swiper-progress-bar').removeClass('animate');
          $('.swiper-progress-bar').removeClass('active');
          $('.swiper-progress-bar').eq(0).addClass('active');
        },
        slideChangeTransitionEnd: function () {
          $('.swiper-progress-bar').eq(0).addClass('animate');
        },
      },
    });
 /*   let observer = new MutationObserver((mutationRecords) => {
      if ($(mutationRecords[0].target).hasClass('swiper-button-disabled')) {
        $('.high-box__slider .swiper-wrapper').addClass('stop');
        $('.high-box__slider .swiper-container').addClass('end');
      } else {
        $('.high-box__slider .swiper-wrapper').removeClass('stop');
        $('.high-box__slider .swiper-container').removeClass('end');
      }
    });

    // наблюдать за всем, кроме атрибутов
    observer.observe(document.querySelector('.swiper-nav .swiper-button-next'), {
      attributes: true,
    });*/
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
