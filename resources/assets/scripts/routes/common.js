import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
    //eslint-disable-next-line no-unused-vars
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        slidesPerView: 1,
        delay : 5000,
        disableOnInteraction : false,
      },
      speed: 500,
    });



    mySwiper.on('slideChange', function () {
      let myId = mySwiper.activeIndex;
      $('.scrollbar li').removeClass('active');
      $('#' + myId).addClass('active');
    });


    $('.scrollbar li').click (function () {
      $('li').removeClass('active');
      $(this).addClass('active');
      let index = $(this).attr('id');
      mySwiper.slideTo ( index );
    });
    $('.header__burger').click (function () {
    $('.mobile-menu').css('left', '0');
    $('.section-blur').addClass('filter');
    $('body').css('overflow', 'hidden');
    });

    $('.mobile-menu__close').click (function () {
      $('.mobile-menu').css('left', '-100%');
      $('.section-blur').removeClass('filter');
      $('body').css('overflow', 'visible');
    });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
