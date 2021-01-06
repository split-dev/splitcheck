/* eslint-disable no-unused-vars */
import '@babel/polyfill';
import 'bootstrap/js/dist/modal';
import Swiper from 'swiper/swiper-bundle';
import Headroom from 'headroom.js';
import Flatpickr from 'flatpickr';
import Dropzone from 'dropzone';
import 'select2/dist/js/select2.full';
import PerfectScrollbar from 'perfect-scrollbar';

export default {
  init() {
    Dropzone.autoDiscover = false;


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
    if ($('.menu-bottom').hasClass('menu-bottom')) {
      let menuBottom = document.querySelector('.menu-bottom');
      let headroomSecond  = new Headroom(menuBottom);
      headroomSecond.init();
    }

    let myElement = document.querySelector('header');
    
    // construct an instance of Headroom, passing the element
    let headroom  = new Headroom(myElement);
    
    // initialise
    headroom.init();
    

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

     // * function for "Select" template select search no image
     if($('.form__single--select-no-image select[data-toggle="select-no-image"]')) {
      $('.form__single--select-no-image select[data-toggle="select-no-image"]').select2({
        minimumResultsForSearch: Infinity,
        maximumSelectionLength: 1,
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
      $('.chat-button').css('background-color', color)
      $('.chat-prev__user').css('background-color', color)
      $('.chat-box__header').css('background-color', color)
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
      $('.profile-face').css('background-color', thisColor);
      $('.profile-face__background ').css('background-color', thisColor);
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
    $('.options-cart:not(.stock) .arrow-open').click( function() {
      $(this).parent().toggleClass('open');
      $(this).parent().find($('.options-cart__body')).slideToggle();
    })


    const body = document.querySelector('body');
      //header height

      if($('.settings__toggle').hasClass('settings__toggle')) {
        var ScrollTopEv = 0;
        $(window).scroll(function(event){
          var st = $(this).scrollTop();
          if (st > ScrollTopEv){
            $('.tabs-global__nav.mobile-nav').css('top', '0px');
          } else {
            if(window.innerWidth < 991 &&  window.innerWidth > 767) {
              $('.tabs-global__nav.mobile-nav').css('top', '70px');
            }
            if(window.innerWidth < 767) {
              $('.tabs-global__nav.mobile-nav').css('top', '55px');
            }
          }
          if(st > 70) {
            if($('.svg-show').hasClass('svg-top-hide')) {
              $('.tabs-global__nav.mobile-nav').addClass('overlay');
            }
          }
          ScrollTopEv = st;
      });
      }
      
     

      

    if($('.mobile-nav').hasClass('mobile-nav')) {
      
       //background change
      
       $('.account-preferences__card').on('click', function() {
        let bgColor = $(this).attr('data-class');
        $('.section-blur').attr('data-class', bgColor);
       })
     
       //mobile tabs
    $('.settings__hide li').click(function() {
       $(this).parent().slideToggle(100);
       $('.mobile-nav').toggleClass('mobile-before')
       $('.svg-show').toggleClass('svg-top-hide');
       $('.main-content').css('margin-top', '0')
       $('.tabs-global__nav.mobile-nav').removeClass('overlay');
     });

     $('.settings__toggle').on('click', function() {
      $('.mobile-nav').toggleClass('mobile-before');
      $('.svg-show').toggleClass('svg-top-hide');
      $('.settings__hide').slideToggle(100);
      if($(window).scrollTop() > 60) {
        $('.tabs-global__nav.mobile-nav').addClass('overlay');
      }
      
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
        if($('.cart .aside-right').hasClass('aside-right')) {
          $('.aside-right').addClass('bottom');
        }
      } else {
        if($('.bottom-slider__info').hasClass('bottom-slider__info')) {
          $('.bottom-slider__info').removeClass('bottom');
        }
        if($('.cart-fixed').hasClass('cart-fixed')) {
          $('.cart-fixed').removeClass('bottom');
        }
        if($('.cart .aside-right').hasClass('aside-right')) {
          $('.aside-right').removeClass('bottom');
        }
      }
      lastScrollTop = st;
   });

    //show and sticky aside left
    if($('.aside-left').hasClass('aside-left')) {
      var ScrollTop = 0;
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      if (st > ScrollTop){
        $('.aside-left').css('top', '30px');
      } else {
        $('.aside-left').css('top', '90px');
      }
      ScrollTop = st;
   });
    }

    //validator email
    function validateEmail(email) {
      //eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
  $('.form__input[type="email"]').keyup(function() {
    if(validateEmail(this.value)){
      $(this).parent().removeClass('error');
      if($('.modal-register')) {
        $('.modal-register button[disabled], .modal-login button.form__button').prop('disabled', false);
        $('.modal-register .form__errors-text').css('display', 'none');
      }
    }else{
      $(this).parent().addClass('error');
      if($('.modal-register')) {
        $('.modal-register button.form__button, .modal-login button.form__button').prop('disabled', true);
        $('.modal-register .form__errors-text').css('display', 'block');
      }
    }
  });

  
  $('.mobile-menu__info a[data-toggle="modal"]').click( function() {
    $('body').css({
      overflow:'visible',
    })
    $('.mobile-menu').css({
      left:'-100%',
    })
    $('#myModal').modal('hide')
  })

  $('.modal-menu-mobile a[data-toggle="modal"]').click( function() {
    $('#menu-mobile').modal('hide');
  })

  $('.modal-menu-mobile--not-shop a[data-toggle="modal"]').click( function() {
    $('#menu-mobile--not-shop').modal('hide');
  })

  if($('.modal.add-files').hasClass('add-files')) {
    const dropZoneEl = document.querySelectorAll('.add-files .drop-files');

      const myDropzoneFiles = new Dropzone(dropZoneEl[0], {
        url: '/file/coments',
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        maxFiles: 5,
      });
  }

  $('.form-add-comment__user select').on('select2:select', function (e) { 
    var data = e.params.data;
    $('.form-add-comment__user figure span').text(data.title)
});


    function calcEl (arrayEl) {
      for(let i = 0; i < arrayEl.length; i++) {
        let widthEl = $(arrayEl[i]).text().length;
        $(arrayEl[i]).css('width', (widthEl * 7.5) + 'px');
      }
    }
    function calcClick() {
      let checkOn = $('.check-on');
      let checkOff = $('.check-off');
      let arrayEl = [];
      arrayEl.push(...checkOn);
      arrayEl.push(...checkOff);
      calcEl(arrayEl)
    }
    //calc animate input radio
    if($('.check-on').hasClass('check-on')) {
      calcClick();
    }
    //max count strong textarea
    $('.max-text textarea, .form__single--max textarea').keyup(function() {
      var maxCount = Number($(this).parent().attr('data-maxlength'));
      var revText = this.value.length;
  
          if (this.value.length > maxCount)
              {
              this.value = this.value.substr(0, maxCount);
              }
          var cnt = (maxCount - revText);
          $(this).parent().find($('.count span:first-of-type')).text(revText)
  
      });
    //max count strong input
    $('.form__single--max input').keyup(function() {
      var maxCount = Number($(this).parent().attr('data-maxlength'));
      var revText = this.value.length;
  
          if (this.value.length > maxCount)
              {
              this.value = this.value.substr(0, maxCount);
              }
          var cnt = (maxCount - revText);
          $(this).parent().find($('.count span:first-of-type')).text(revText)
  
      });





    //dashboard header select
    $('.user-select select').on('select2:select', function (e) {
      var data = e.params.data;
      $('.user-select__name').text(data.text)
    });

    $('.user-select select').on('select2:open', function (e) {
      $('.user-select__name').addClass('active')
    });
    $('.user-select select').on('select2:close', function (e) {
      $('.user-select__name').removeClass('active')
    });

    //scroll
    function resize() {
      ps.update();
    }

    if($('.toogle-box__scroll').hasClass('toogle-box__scroll')) {
      var ps = new PerfectScrollbar('.toogle-box__scroll');
      window.onresize = resize;
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
