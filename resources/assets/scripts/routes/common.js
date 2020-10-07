import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
    //eslint-disable-next-line no-unused-vars
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
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
