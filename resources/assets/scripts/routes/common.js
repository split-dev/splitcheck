import Swiper from 'swiper/swiper-bundle';
import Headroom from 'headroom.js';
import 'select2';
import 'bootstrap/js/dist/modal';
import '@chenfengyuan/datepicker/dist/datepicker.min';

export default {
  init() {
    //eslint-disable-next-line no-unused-vars
    let mySwiper = new Swiper('.page-hero__bg .swiper-container', {
      effect: 'fade',
      autoplay: {
        slidesPerView: 1,
        delay : 5000,
        disableOnInteraction : false,
      },
      speed: 500,
    });

    let vid = document.getElementById('videoBox');
    function playVid() {
      vid.play();
    }

    function pauseVid() {
      vid.pause();
    }

    $('.js-select-gender').select2({
      minimumResultsForSearch: Infinity,
      dropdownParent: $('.form__single--select'),
    });

    // * change visible password
    {
      const btnPass = document.querySelectorAll('.form__symbol-pass');
      // const inputPass = document.querySelector('.form__single--pass input');

      if (btnPass.length > 0) {
        btnPass.forEach(element => {
          element.addEventListener('click', function() {
            element.classList.toggle('visible')
            if (element.classList.contains('visible')) {
              element.previousElementSibling.type = 'text';
            } else {
              element.previousElementSibling.type = 'password';
            }
          });
        });
      }
    }

    // * datepicker
    {
      $('[data-toggle="datepicker"]').datepicker({
        zIndex: 9999,
      });
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

    let swiper = new Swiper('.card-detail .swiper-container', {
      slidesPerView: 1,
      cssMode: true,
      loop: false,
      mousewheel: true,
      keyboard: true,
    });

    $('.card-detail__small-img').click (function () {
      $(this).toggleClass('active');
      let index = $(this).attr('data-id');
      swiper.slideTo ( index );
    });

    let myElement = document.querySelector('header');
// construct an instance of Headroom, passing the element
    let headroom  = new Headroom(myElement);
    // initialise
    headroom.init();
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
