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

    let myId = mySwiper.activeIndex;

    mySwiper.on('slideChange', function () {
      $('.scrollbar-li').removeClass('active');
      $('#' + myId).addClass('active');
    });


    $('.scrollbar-li').click (function () {
      $('.scrollbar-li').attr('id').mySwiper.slideTo(myId);
      $('li').removeClass('active');
      $(this).addClass('active');
      let index = $(this).attr('id');
      mySwiper.slideTo ( index );
    });

    /*$('.scrollbar li').on('click', function () {
      $('li').removeClass('active');
      $(this).addClass('active');
    });*/
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
