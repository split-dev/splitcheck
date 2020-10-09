import Swiper from 'swiper/swiper-bundle';
import Headroom from 'headroom.js';
export default {
  init() {
    //eslint-disable-next-line no-unused-vars
    var mySwiper = new Swiper('.swiper-container', {
      effect: 'fade',
      autoplay: {
        slidesPerView: 1,
        delay : 5000,
        disableOnInteraction : false,
      },
      speed: 500,
    });

    var vid = document.getElementById('videoBox');
    function playVid() {
      vid.play();
    }

    function pauseVid() {
      vid.pause();
    }

    $(document).ready(function () {
      $('.video-play').click(function (e) {
        $(this).removeClass('video-btn-none');
        e.preventDefault;
        if ($(this).hasClass('pause')) {
          pauseVid();
          $(this).toggleClass('pause');
        } else {
          $(this).addClass('video-btn-none');
          playVid();
          $(this).toggleClass('pause');
        }
      });
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

    var myElement = document.querySelector('header');
// construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement);
    // initialise
    headroom.init();
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
