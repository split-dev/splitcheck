/* eslint-disable no-unused-vars */
import 'bootstrap/js/dist/modal';
import Swiper from 'swiper/swiper-bundle';
import Headroom from 'headroom.js';
import Flatpickr from 'flatpickr';
import 'select2/dist/js/select2.full';

// import '@chenfengyuan/datepicker/dist/datepicker.min';

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

    // let vid = document.getElementById('videoBox');


    function playVid(parent) {
      parent.play();
    }

    function pauseVid(parent) {
      parent.pause();
    }

    $('.js-select-gender').select2({
      minimumResultsForSearch: Infinity,
      width: 'resolve',
      // dropdownParent: $('.form__single--select'),
    });

    //timeline-global
    const optionForTimeline = {
      slidesPerView: 4,
      setWrapperSize: false,
      simulateTouch: false,
      preventInteractionOnTransition: true,
      mousewheel: true,
      navigation: {
        nextEl: '.card-timeline__slider .swiper-button-next',
        prevEl: '.card-timeline__slider .swiper-button-prev',
      },
      breakpoints: {
        1260: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
          // freeMode: true,
        },
        360: {
          slidesPerView: 4,
        },
        250: {
          slidesPerView: 3,
          setWrapperSize: false,
          simulateTouch: false,
          preventInteractionOnTransition: true,
          mousewheel: true,
          // freeMode: true,
        },
      },
    }
    let swiperTimeline = new Swiper('.card-timeline__slider .swiper-container', optionForTimeline);



    //* function INPUT SEARCH
    {
      const search = {
        formSearch: document.querySelector('.search'),
        inputSearch: document.querySelector('.search__input'),
        headerContent: document.querySelector('.header__content'),
        headerRight: document.querySelector('.header__right'),
        headerLeft: document.querySelector('.header__left'),
      }

      if (search.formSearch) {
        const focusSearchInput = () => {
          if (window.matchMedia('(max-width: 991px)').matches) {
            let whatWidthContent = search.headerContent.offsetWidth;
            let whatWidthHeaderLeft = search.headerLeft.offsetWidth;

            search.inputSearch.onfocus = function() {
              search.formSearch.style.width = (whatWidthContent - whatWidthHeaderLeft - 12) + 'px'
              search.headerRight.style.visibility = 'hidden';
              search.headerRight.style.opacity = 0;
            };

            search.inputSearch.onblur = function() {
              search.formSearch.style.width = ''
              search.headerRight.style.visibility = '';
              search.headerRight.style.opacity = '';
            };
          } else {
            search.inputSearch.onfocus = function() {
              search.formSearch.style.width = ''
              search.headerRight.style.visibility = '';
              search.headerRight.style.opacity = '';
            };
            search.formSearch.style.width = ''
            search.headerRight.style.visibility = '';
            search.headerRight.style.opacity = '';
          }
        }

        focusSearchInput();
        window.addEventListener('resize', focusSearchInput)
      }
    }

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

    // * datepicker and timepicker
    {
      if ($('input[data-toggle="datepicker"]').length) {
        Flatpickr($('input[data-toggle="datepicker"]'), {
          disableMobile: 'true',
          altFormat: 'F j, Y',
          dateFormat: 'm/d/Y',
        });
      }

      if ($('input[data-toggle="timepicker"]').length) {
        Flatpickr($('input[data-toggle="timepicker"]'), {
          disableMobile: 'true',
          enableTime: true,
          noCalendar: true,
          dateFormat: 'h:i K',
          time_24hr: false,
        });
      }
    }

    $('.video-play').each(function() {
      $(this).click(function (e) {
        $(this).removeClass('video-btn-none');
        e.preventDefault;
        let videoElem = e.target.nextElementSibling;
        if ($(this).hasClass('pause')) {
          pauseVid(videoElem);
          $(this).toggleClass('pause');
        } else {
          $(this).addClass('video-btn-none');
          playVid(videoElem);
          $(this).toggleClass('pause');
        }
      })
    })

    $('.modal').on('shown.bs.modal', function () {
      setTimeout(function() {
        $('.section-blur').addClass('filter');
      }, 50);

    })
    $('.modal').on('hidden.bs.modal', function(){
      if($('.modal:visible').length > 0) {
        $('body').addClass('modal-open');
        $('.section-blur').addClass('filter');
      } else {
        setTimeout(function() {
          $('.section-blur').removeClass('filter');
        }, 50);
      }
      for (let i = 0; i < $('.modal video').length; i++) {
        const element = $('.modal video')[i];
        if(element.previousElementSibling) {
          if(element.previousElementSibling.classList.contains('video-btn-none')) {
            element.previousElementSibling.classList.remove('video-btn-none', 'pause');
          }
        }
        pauseVid(element);
      }
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
    let menuBottom = document.querySelector('.menu-bottom');
    // construct an instance of Headroom, passing the element
    let headroom  = new Headroom(myElement);
    let headroomSecond  = new Headroom(menuBottom);
    // initialise
    headroom.init();
    headroomSecond.init();

    //get
    var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );
    if(params['data'] == 'shop-another') {
      $('#shop-another').modal();
    }

     // * function for "Select" template in modal
     if($('.form__single--select-default select[data-toggle="select"]')) {
      $('.form__single--select-user select[data-toggle="select"]').select2({
        minimumResultsForSearch: Infinity,
        width: '100%',
        templateResult: function (state) {
          if (!state.id) {
            return state.text;
          }
          var baseUrl = 'images/profiles';
          var $state = $(`
            <div class="profile-list">
              <figure class="profile-list__avatar">
                <img src="${baseUrl}/${state.element.value.toLowerCase()}.png" alt="avatar">
                <span class="profile-list__symbol"></span>
              </figure>
              <span>${state.text}</span>
            </div>
          `);

          return $state;
        },
        // dropdownParent: $('.form__single--select-user'),
      });
     }

     // * function for "Select is not avatar" template in modal
     if($('.form__single--select-not select[data-toggle="select"]')) {
      $('.form__single--select-user-not select[data-toggle="select"]').select2({
        minimumResultsForSearch: Infinity,
        width: '100%',
        // dropdownParent: $('.form__single--select-user'),
      });

     }

     //mini aside slider 
    var swiperAside = new Swiper('.personal-card--slider .swiper-container', {
      spaceBetween: 5,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    function setColor() {
      let color = $('.select-color--store').attr('data-color')
      $('.profile-face__background').css('background-color', color)
      $('.profile-face__photo').css('background-color', color)
      $('.shop-category__single').css('background-color', color)
      $('.internal-card__name--store').css('color', color)
    }
    //color picker
    if($('.select-color--store')) {
      setColor();
    }

    if($('.select-color')) {
      //setColor
     $('.profile-face__background .btn-border').click( function(e) {
      e.preventDefault();
      $(this).addClass('active');
     $('.profile-face__background .select-color').addClass('show');
    });
    $('.profile-face__background .select-color li').click( function() {
      $('.profile-face__background .select-color li').removeClass('select');
      $(this).addClass('select');
      let thisColor = $(this).css('background-color');
      $('.profile-face__background').css('background-color', thisColor)
      $('.profile-face__background .btn-border').removeClass('active');
      $('.profile-face__background .select-color').removeClass('show');
      $('.select-color--store').attr('data-color', thisColor)
      setColor();
    });
    $(function($){
     $(document).mouseup(function (e){
       var div = $('.profile-face__background .select-color');
       if (!div.is(e.target)
           && div.has(e.target).length === 0) {
             $('.profile-face__background .btn-border').removeClass('active');
             $('.profile-face__background .select-color').removeClass('show');
       }
     });
   });
    }

    //select2 multiple no img
      // * function for "Select" template in modal
      if($('.form__single--select-default select[data-toggle="select-img"]')) {
        $('.form__single--select-user select[data-toggle="select-img"]').select2({
          minimumResultsForSearch: Infinity,
          width: '100%',
          templateResult: function (state) {
            if (!state.id) {
              return state.text;
            }
            var baseUrl = 'images/profiles';
            var $state = $(`
              <div class="profile-list">
                <span>${state.text}</span>
              </div>
            `);
  
            return $state;
          },
          // dropdownParent: $('.form__single--select-user'),
        });
       }
  
       // * function for "Select is not avatar" template in modal
       if($('.form__single--select-not select[data-toggle="select-img"]')) {
        $('.form__single--select-user-not select[data-toggle="select-img"]').select2({
          minimumResultsForSearch: Infinity,
          width: '100%',
          // dropdownParent: $('.form__single--select-user'),
        });
      }

  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
