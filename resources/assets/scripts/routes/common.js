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

     // * function for "Select" template user add image
     if($('.form__single--select-profile select[data-toggle="select-profile"]')) {
      $('.form__single--select-profile select[data-toggle="select-profile"]').select2({
        minimumResultsForSearch: Infinity,
        maximumSelectionLength: 1,
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

    //  }

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
     $('.profile-face .btn-border').click( function(e) {
      e.preventDefault();
      $(this).addClass('active');
     $('.profile-face .select-color').addClass('show');
    });
    $('.profile-face .select-color li').click( function() {
      $('.profile-face .select-color li').removeClass('select');
      $(this).addClass('select');
      let thisColor = $(this).css('background-color');
      $('.profile-face').css('background-color', thisColor)
      $('.profile-face .btn-border').removeClass('active');
      $('.profile-face .select-color').removeClass('show');
      $('.select-color--store').attr('data-color', thisColor)
      setColor();
    });
    $(function($){
     $(document).mouseup(function (e){
       var div = $('.profile-face .select-color');
       if (!div.is(e.target)
           && div.has(e.target).length === 0) {
             $('.profile-face .btn-border').removeClass('active');
             $('.profile-face .select-color').removeClass('show');
       }
     });
   });
    }

    //select2 multiple no img
      // * function for "Select-tag" template in modal
      if($('.form__single--select-user select[data-toggle="select-img"]')) {
        $('.form__single--select-user select[data-toggle="select-img"]').select2({
          minimumResultsForSearch: Infinity,
          width: '100%',
          templateResult: function (state) {
            if (!state.id) {
              return state.text;
            }
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
      if($('.form__single--select-tag select[data-toggle="select-tag"]')) {
        $('.form__single--select-tag select[data-toggle="select-tag"]').select2()
        $('.form__single--select-tag select[data-toggle="select-tag"]').select2({
          minimumResultsForSearch: Infinity,
          width: '100%',
          templateResult: function (state) {
            if (!state.id) {
              return state.text;
            }
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
       if($('select.form__select--default[data-toggle="select"]')) {
        $('select.form__select--default[data-toggle="select"]').select2({
          minimumResultsForSearch: Infinity,
          width: '100%',
        });
        $('select.form__select--default[data-toggle="select"]').select2({
          minimumResultsForSearch: Infinity,
          width: '100%',
        });
      }
      //position select color
      function positinSelectColor() {
        if($('.button-color').hasClass('button-color')) {
          if(window.innerWidth > 767) {
            let left = $('.button-color').position().left;
            let top = $('.button-color').position().top + 41;
            $('.select-color').css({
              left: left,
              top: top,
            })
          } else {
            let right = ($('.profile-face__background').width() - $('.button-color').position().left) - 100;
            let top = $('.button-color').position().top + 41;
            $('.select-color').css({
              left: 'auto',
              right: right,
              top: top,
            })
          }
        }
      }
      positinSelectColor();
      $(window).resize(function() {
        positinSelectColor();
    });

    //toogle post
    $('.gift-shopping__header').click( function() {
      $(this).toggleClass('open');
      $(this).next().slideToggle();
    })

    //open mobile product
    $('.options-cart:not(.stock)').click( function() {
      $(this).toggleClass('open');
      $(this).parent().find($('.options-cart__body')).slideToggle();
    })


    const body = document.querySelector('body');
      //header height
      let mobileLinks = document.querySelector('.mobile-nav');
     
      function topMobile() {
        body.addEventListener('wheel', function(e) {
  
          let meNow = false;
  
          for (let i = 0; i < e.path.length - 3; i++) {
            const element = e.path[i];
            if (element) {
              if (element.classList.contains('mobile-nav')) {
                meNow = true
              }
            }
          }
  
          if (!meNow) {
            if (e.deltaY < 0) {
              if (window.matchMedia('(min-width: 767px)').matches) {
                mobileLinks.style.top = '';
              } else {
                mobileLinks.style.top = '55px';
              }
            } else {
              if (window.matchMedia('(min-width: 767px)').matches) {
                mobileLinks.style.top = '';
              } else {
                mobileLinks.style.top = '0';
              }
            }
          }
        })
      }

    if($('.mobile-nav').hasClass('mobile-nav')) {
      topMobile();
       //background change
      
       $('.account-preferences__card').on('click', function() {
        let bgColor = $(this).attr('data-class');
        $('.section-blur').attr('data-class', bgColor);
       })
     
       //mobile tabs
    $('.settings__hide li').click(function() {
       $(this).parent().slideToggle(400);
       $('.mobile-nav').toggleClass('mobile-before')
       $('.svg-show').toggleClass('svg-top-hide');
       $('.main-content').css('margin-top', '0')
     });

     $('.settings__toggle').on('click', function() {
      $('.mobile-nav').toggleClass('mobile-before');
      $('.svg-show').toggleClass('svg-top-hide');
      $('.settings__hide').slideToggle(400);
      
     if ($('.nav').hasClass('mobile-before')) {
       let heightPadding = $('.mobile-nav').height();
       $('.main-content').css('margin-top', heightPadding + 'px');
     } else {
       $('.main-content').css('margin-top', '0')
     }
    });
    }

    //plus and minus function
    function funcPlusMinus(init, par, proces) {
      if(proces == 'minus') {
        if(init > 0) {
          $(par).find($('.item-cart__int')).text(init - 1);
        }
      } else {
        $(par).find($('.item-cart__int')).text(init + 1);
      }
    }
    $('.item-cart__minus, .item-cart__plus').click( function() {
      let par = $(this).parent();
      let init = Number($(par).find($('.item-cart__int')).text());
      let proces = undefined;
      if($(this).hasClass('item-cart__minus')) {
        proces = 'minus';
      } else {
        proces = 'plus';
      }
      funcPlusMinus(init, par, proces)
    })

    //change bg
    $('.theme-background .theme-background__item').click( function() {
      $('.section-blur').attr('data-class', $(this).attr('data-bg'))
    })

    //coupon used
    $('.btn-green.not').click( function(e) {
      e.preventDefault();
      $(this).text('Coupon used').addClass('active')
    })

    //show and sticky bottom
    var lastScrollTop = 0;
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      if (st > lastScrollTop){
        if($('.bottom-slider__info').hasClass('bottom-slider__info')) {
          $('.bottom-slider__info').addClass('bottom');
        }
        if($('.cart-fixed').hasClass('cart-fixed')) {
          $('.cart-fixed').addClass('bottom');
        }
      } else {
        if($('.bottom-slider__info').hasClass('bottom-slider__info')) {
          $('.bottom-slider__info').removeClass('bottom');
        }
        if($('.cart-fixed').hasClass('cart-fixed')) {
          $('.cart-fixed').removeClass('bottom');
        }
      }
      lastScrollTop = st;
   });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
