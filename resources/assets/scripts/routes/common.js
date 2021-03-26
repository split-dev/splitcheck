/* eslint-disable no-unused-vars */
import '@babel/polyfill';
import 'bootstrap/js/dist/modal';
import Swiper from 'swiper/swiper-bundle';
import 'jquery-mask-plugin';
import Headroom from 'headroom.js';
import Flatpickr from 'flatpickr';
import Dropzone from 'dropzone';
import 'select2/dist/js/select2.full';
import PerfectScrollbar from 'perfect-scrollbar';
import { log } from 'handlebars';

export default {
  init() {
    Dropzone.autoDiscover = false;


// if ($('body').width() > 991) {
//   let sum = 0
//   let content = $('.main-content').children();
//    $(content).each(function() {
//   let sumContent = sum + $(this).outerWidth(true);
//   console.log(sumContent);
// });
// if (sumContent > $('.main-content').width()) {
//   // $('.aside-right').css('display','none');
//   // $('.main-content .justify-content-between').css('justify-content', 'flex-start');
//   console.log(true);
// } else {
//   console.log(false);
//   // $('.aside-right').css('display','block');
//   // $('.main-content .justify-content-between').css('justify-content', 'space-between');
// }
// }


if ($('.size-container').hasClass('size-container')) {
  if($('body').width() > 991) {
    let widthMain = $('.size-container').width();
    $('.header__search').css('width', widthMain);
  }
}

function sizeAside() {
  if (window.matchMedia('(max-width: 1050px) and (min-width: 992px)').matches) {
    let asideLeftWidth = $('.aside-left').outerWidth(true);
  let asideRightWidth = $('.aside-right').outerWidth(true);
  let mainWidth = $('main').outerWidth(true);
  let summ = asideLeftWidth + asideRightWidth + mainWidth;
  console.log(summ);
  if (summ > $('.main-content').width()) {
      $('.aside-right').css('display','none');
      $('.main-content.justify-content-between').removeClass('justify-content-between');
      console.log(true);
    } else {
      console.log(false);
      $('.aside-right').css('display','block');
      $('.main-content.justify-content-between').addClass('justify-content-between');
    }
  }
}
sizeAside();

function sizeSearch() {
  if ($('.size-container').hasClass('size-container')) {
    if($('body').width() > 991) {
      if(!$('.size-container').hasClass('main--fluid')) {
        let left = document.querySelector('.size-container').getBoundingClientRect().left;
        $('.header__search').css({
          position: 'absolute',
          top: '50%',
          transform: 'translate(0, -50%)',
          left: left,
        })
      }
    } else {
      $('.header__search').css({
        position: 'static',
        top: 'auto',
        transform: 'none',
      })
    }
    if($('body').width() > 991) {
      if($('.size-container').hasClass('main--fluid')) {
        let left = document.querySelector('.main--fluid').getBoundingClientRect().left;
        $('.header__search').css({
          position: 'absolute',
          left: left,
        })
      }
    }
  }
}
sizeSearch();
window.addEventListener('resize', sizeSearch, sizeAside)

    //snackbar
$('.snackbar-close').click(function() {
  $(this).parent().parent().removeClass('show');
 
});
   
//* scroll - perfect-scrollbar
{
  if($('[data-scroll="perfect-scrollbar"]').length > 0) {
    const psItems = document.querySelectorAll('[data-scroll="perfect-scrollbar"]')

    const resize = (elem) => {
      elem.update();
    }

    for (let i = 0; i < psItems.length; i++) {
      const element = psItems[i];

      const ps = new PerfectScrollbar(element);

      window.onresize = resize(ps);
    }
  }
}
    
$('.link-more').click(function() {
  $('.text-more').addClass('open');
  $(this).hide();
});

//header search dropdown
$('.search-dropdown__close').click(function() {
  $('.search-dropdown').removeClass('open');
})
$('.header .search__input').click(function() {
 
  var searchHeader = document.querySelector('.search__input').value;
  if(searchHeader.length > 0) {
    $('.search-dropdown').addClass('open');
  } else {
    $('.search-dropdown').remove('open');
  }
});
$('.header .search__input').keyup(function() {
  $('.search-dropdown').addClass('open');
  var searchHeader = document.querySelector('.search__input').value;
  if(searchHeader.length > 0) {
    $('.search-dropdown').addClass('open');
  } else {
    $('.search-dropdown').remove('open');
  }
});

$(document).mouseup(function(e) {
  if (!$('.search-dropdown').is(e.target) && $('.search-dropdown').has(e.target).length === 0) { 
   $('.search-dropdown').removeClass('open') 
  }
  if (!$('.modal-invite .form__single').is(e.target) && $('.modal-invite .form__single').has(e.target).length === 0) { 
    $('.modal-invite .form__single').removeClass('before-none');
   }
 });

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
      slidesPerView: 'auto',
      spaceBetween: 8,
      setWrapperSize: true,
      // simulateTouch: false,
      // preventInteractionOnTransition: true,
      // mousewheel: true,
      navigation: {
        nextEl: '.card-timeline__slider .swiper-button-next',
        prevEl: '.card-timeline__slider .swiper-button-prev',
      },
      // breakpoints: {
      //   1260: {
      //     slidesPerView: 'auto',
      //   },
      //   992: {
      //     slidesPerView: 'auto',
      //     // freeMode: true,
      //   },
      //   360: {
      //     slidesPerView: 4,
      //   },
      //   250: {
      //     slidesPerView: 3,
      //     setWrapperSize: false,
      //     simulateTouch: false,
      //     preventInteractionOnTransition: true,
      //     mousewheel: true,
      //     // freeMode: true,
      //   },
      // },
    }

    const swiperTimeline = new Swiper('.card-timeline__slider .swiper-container', optionForTimeline);



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

    if ($('.bottom-banner').hasClass('bottom-banner')) {
      if (window.innerWidth > 991) {
        let bottomBanner = document.querySelector('.bottom-banner');
        let headroomBottom  = new Headroom(bottomBanner);
        headroomBottom.init();
      }
      
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
              <span class="disable-error">(no-permission)</span>
            </div>
          `);

          return $state;
        },
        // dropdownParent: $('.form__single--select-user'),
      });
     }

     // * function for "Select" template user add image
     let arrayInfo = [
       {
         id: 1,
         sky: '#134567',
         Qty: 999,
         price: 49.99,
         text: 'Title here could be so much longer…',
         img: 'images/product/7142447382608.png',
         selected: true,
         disable: '',
       },
       {
         id: 2,
         sky: '#134568',
         Qty: 999,
         price: 49.99,
         text: 'Title here could be so much longer…',
         img: 'images/product/7142447382608.png',
         disable: '',
       },
       {
         id: 3,
         sky: '#134567',
         Qty: 999,
         price: 49.99,
         text: 'Title here could be so much longer…',
         img: 'images/product/7142447382608.png',
         disable: '',
       },
       {
         id: 4,
         sky: '#134568',
         Qty: 999,
         price: 49.99,
         text: 'Title here could be so much longer1…',
         img: 'images/product/7142447382608.png',
         disable: '',
       },
       {
         id: 5,
         sky: '#134567',
         Qty: 999,
         price: 49.99,
         text: 'Title here could be so much longer2…',
         img: 'images/product/7142447382608.png',
         disable: '',
       },
       {
         id: 6,
         sky: '#134568',
         Qty: 999,
         price: 49.99,
         text: 'Title here could be so much longer3…',
         img: 'images/product/7142447382608.png',
         disable: '',
       },
       {
        id: 7,
        sky: '#134567',
        Qty: 999,
        price: 49.99,
        text: 'Title here could be so much longer…',
        img: 'images/groups/user-boy.png',
       
      },
    ]

     if($('.form__single--select-product select[data-toggle="select-product"]')) {
      $('.form__single--select-product select[data-toggle="select-product"]').select2({
        minimumResultsForSearch: Infinity,
        maximumSelectionLength: 4,
        closeOnSelect: false,
        width: '100%',
        theme: 'select2-container select2-container--default static-select',
        data: arrayInfo,
        templateResult: function (state) {
          if (!state.id) {
            return state.text;
          }
          var $state = $(`
            <div class="profile-list">
              <figure class="profile-list__avatar">
                <img src="${state.img}" alt="product">
                <span class="profile-list__symbol"></span>
              </figure>
              <div class="select-info">
                <strong>${state.text}</strong>
                <ul>
                <li>Sku: <span>${state.sky}</span></li>
                <li>Qty: <span>${state.Qty}</span></li>
                <li>$ <span>${state.price}</span></li>
                </ul>
              </div>
            </div>
          `);

          return $state;
        },
        dropdownParent: $('.associated-box__select'),
      });
     }

     //select2 select
     $('[data-toggle="select-product"]').on('select2:select', function (e) {
      var data = e.params.data;
      let resultBox = $(this).parent().parent().parent().parent().next();
      let stateEl = `
            <div class="selected-item">
            <div class="selected-item__left">
                <div class="selected-item__photo"
                    style="background-image: url('${data.img}');">
                    <span>SM</span>
                </div>
                <div class="selected-item__info">
                    <strong>${data.text}</strong>
                    <ul>
                        <li>Sku: <span>${data.sky}</span></li>
                        <li>Qty: <span>${data.Qty}</span></li>
                        <li>$ <span>${data.price}</span></li>
                    </ul>
                </div>
            </div>
            <div class="selected-item__right">
                <a href="#" id="${data.id}">Delete</a>
            </div>
        </div>
        `;
        $(resultBox).append(stateEl)
  });

  //select2 custom scroll product
  //scroll
  $('[data-toggle="select-product"]').on('select2:open', function (e) {
    function resizeLine() {
      psLine.update();
    }
    var psLine = new PerfectScrollbar('ul.select2-results__options');
    window.onresize = resizeLine;
    setTimeout( function() {
      resizeLine();
    }, 1)
  });
  //select2 remove checked element
  $('[data-toggle="select-product"]').on('select2:unselect', function (e) {
    let resultBox = $(this).parent().parent().parent().parent().next().find($('.selected-item'));
    var id = e.params.data.id;
    console.log(id);
    $(resultBox).each( function() {
      if($(this).find($('a')).attr('id') == id) {
        $(this).remove();
      }
    })
    //$('#' + id).parent().parent().remove();
  });
  //click create object
  $('.associated-box__result').on('click', 'a', function(e) {
    e.preventDefault();
    let id = $(this).attr('id');
    let selectEl = $(this).parent().parent().parent().parent().find($('select'))
    let arraySelected = $(selectEl).val();
    delete arraySelected[arraySelected.indexOf(id)]
    $(selectEl).val(arraySelected).trigger('change');
    //remove item
    $(this).parent().parent().remove();
   })


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

      let dropdownParent = null;
       // * function for "Select is dropdown parent" template in modal
       if($('select.form__select--default[data-toggle="select-parent"]')) {
        $('select.form__select--default[data-toggle="select-parent"]').select2({
          minimumResultsForSearch: Infinity,
          width: '100%',
          theme: 'abs-box select2-container--default',
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
      $(this).toggleClass('arrow-turn');
      $(this).parent().toggleClass('open');
      $(this).parent().find($('.options-cart__body')).slideToggle();
    })


    const body = document.querySelector('body');
      //header height

      if($('.tabs-global__nav').hasClass('tabs-global__nav')) {
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
    $('.item-cart__minus:not(.product), .item-cart__plus:not(.product)').click( function() {
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
        if($('.nav-product').hasClass('nav-product')) {
          $('.nav-product').addClass('top');
        }
        if($('.bottom-banner').hasClass('bottom-banner')) {
          $('.bottom-banner').addClass('bottom');
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
        if($('.nav-product').hasClass('nav-product')) {
          $('.nav-product').removeClass('top');
        }
        if($('.bottom-banner').hasClass('bottom-banner')) {
          $('.bottom-banner').removeClass('bottom');
        }
      }
      lastScrollTop = st;
   });

    //show and sticky aside left
    if ($('.aside-left').hasClass('aside-left')) {
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

  //add default file
  if($('.modal.add-files-default').hasClass('add-files-default')) {
    const dropZoneDef = document.querySelectorAll('.add-files-default .drop-files');

    const dropZoneDefFiles = new Dropzone(dropZoneDef[0], {
      url: '/file/download',
      thumbnailWidth: 120,
      thumbnailHeight: 120,
      maxFiles: 5,
    });
  }

  if($('.modal.add-files').hasClass('add-files')) {
    const dropZoneEl = document.querySelectorAll('.add-files .drop-files');

      const myDropzoneFiles = new Dropzone(dropZoneEl[0], {
        url: '/file/coments',
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        maxFiles: 5,
      });


      if(document.getElementById('columns-sort-drag')) {
        $('.add-files .btn-blue').click( function() {
          let arrayImg = [];
          let file = $('.add-files .drop-photo img');
          $(file).each( function() {
            if(!$(this).hasClass('load')) {
              let imgBase = $(this).attr('src')
              arrayImg.push(imgBase);
              $(this).addClass('load')
            }
          })
          let elemUl = $('.images-box-loader ul li:not(.img)')
          for(let i = 0; i < arrayImg.length; i++) {
            let image = new Image();
            image.src = arrayImg[i];
            if(!$(elemUl[i]).hasClass('ignore-elements')) {
              document.getElementById('columns-sort-drag').insertAdjacentHTML('beforeend', '<li class="ignore-elements"></li>');
              $('.images-box-loader ul li:not(.img)').append(image).removeClass('ignore-elements').addClass('sortable-drag img');
              document.getElementById('columns-sort-drag').insertAdjacentHTML('beforeend', '<li class="ignore-elements"></li>');
            }
            $(elemUl[i]).append(image).removeClass('ignore-elements').addClass('sortable-drag img');

          }

        })
      }
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

      //* function button Options(three dots)
    {
      const btnOptionsWrap = document.querySelectorAll('.options');
      const btnOptions = document.querySelectorAll('.options__btn');

      body.addEventListener('click', e => {
        let activeClass = 'options--open';
        let activeClassIcon = 'icon-more-active';
        let classNameBackDrop = 'option-backDrop';

        if (e.target.offsetParent) {
          const targetoffset = e.target.offsetParent;
          const {type} = e.target.offsetParent.firstElementChild.dataset;

          if (type === 'options') {
            if (!targetoffset.classList.contains(activeClass)) {
                const blockBackDrop = document.createElement('div');
                blockBackDrop.classList.add(classNameBackDrop);
                targetoffset.classList.add(activeClass);
                targetoffset.appendChild(blockBackDrop);
                targetoffset.children[0].children[0].classList.add(activeClassIcon);
            } else {
              targetoffset.classList.remove(activeClass)
              targetoffset.querySelector('.' + classNameBackDrop).remove();
              targetoffset.children[0].children[0].classList.remove(activeClassIcon);
            }
          }
        }

        if (e.target.classList.contains(classNameBackDrop)) {
          btnOptionsWrap.forEach(element => {
            element.classList.remove(activeClass);
            const thisBackDrop = element.querySelector('.' + classNameBackDrop);
            const activeIcon = element.querySelector('.' + activeClassIcon);

            if (thisBackDrop) {
              element.parentNode.lastElementChild.removeChild(thisBackDrop)
            }
            if (activeIcon) {
              activeIcon.classList.remove(activeClassIcon);
            }
          });
        }
      });
    }

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
      $('.toogle-box__scroll').each(function(){
        const ps = new PerfectScrollbar($(this)[0]);
      });
      var ps = new PerfectScrollbar('.toogle-box__scroll');
      window.onresize = resize;
    }

    $('.toogle-box__header .reset').click( function() {
      $(this).addClass('anim');
      setTimeout(function () {
        $('.toogle-box__header .reset').removeClass('anim');
      }, 3000)
    })

    $('.toogle-box__header .arrow-open').click( function() {
      $(this).parent().parent().toggleClass('open');
      $(this).parent().parent().next().slideToggle();
    })


    //drag and drop
    let sourceContainerId = '';

// Allow multiple draggable items
let dragSources = document.querySelectorAll('[draggable="true"]');
dragSources.forEach(dragSource => {
    dragSource.addEventListener('dragstart', dragStart);
    dragSource.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
    this.classList.add('dragging');
    e.dataTransfer.setData('text/plain', e.target.id);
    sourceContainerId = this.parentElement.id;
    console.log(this);
}

function dragEnd(e) {
    this.classList.remove('dragging');
}

// Allow multiple dropped targets
let dropTargets = document.querySelectorAll(
    '[data-role="drag-drop-container"]'
);
dropTargets.forEach(dropTarget => {
    dropTarget.addEventListener('drop', dropped);
    dropTarget.addEventListener('dragenter', cancelDefault);
    dropTarget.addEventListener('dragover', dragOver);
    dropTarget.addEventListener('dragleave', dragLeave);
});

function dropped(e) {
    // execute function only when target container is different from source container
    if (this.id !== sourceContainerId) {
        cancelDefault(e);
        let id = e.dataTransfer.getData('text/plain');
        //e.target.appendChild(document.querySelector('#' + id));
        let element = document.querySelector('#' + id);
        $(element).css('display', 'none');
        let textEl = $(element).find('.drag-drop__info >strong').text()
        console.log($(element).find('.drag-drop__info >strong').text());
        let stateEl = `
                <div class="product-tag"><strong>${textEl}</strong><a href="#" data-close="${id}" class="remove"><img src="images/icons/remove-white.svg" alt="remove-white"></a></div>
        `;
        document.querySelector('.form-add-comment__content').insertAdjacentHTML('beforeend', stateEl);
        this.classList.remove('hover');
    }
}

function dragOver(e) {
    cancelDefault(e);
    this.classList.add('hover');
}

function dragLeave(e) {
    this.classList.remove('hover');
}

function cancelDefault(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

//reset product
$('.form-add-comment__content').on('click', 'a', function(e){
  e.preventDefault();
  let id = $(this).attr('data-close');
  $(this).parent().remove();
  $('#' + id).css('display', 'flex');
});




    // Accordion Menu
    let AccordionMenu = function(selector) {
      this.colMenu = document.querySelectorAll(`${selector} li`);
      let This = this;
      this.colMenu.forEach(function(items) {
          if (items.querySelector('ul')) {
              // items.firstElementChild.insertAdjacentHTML('beforeend', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 451.847 451.847" xml:space="preserve"> <g> <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/> </g> </svg>');

              items.firstElementChild.onclick = function(e) {
                  e.preventDefault();

                  let isTrue = this.parentElement.classList.toggle('js-open');

                  if (isTrue) {
                      This.show(this.nextElementSibling);
                  } else {
                      This.hide(this.nextElementSibling);
                  }
              }
          }
      })
    }

    // Show an element
    AccordionMenu.prototype.show = function(elem) {
      // Get the natural height of the element
      var getHeight = function() {
          elem.style.display = 'block'; // Make it visible
          var height = elem.scrollHeight + 'px'; // Get it's height
          return height;
      };

      var height = getHeight(); // Get the natural height
      elem.style.height = height; // Update the height

      setTimeout(function() {
          elem.style.height = 'auto';
      }, 350);
    };

    // Hide an element
    AccordionMenu.prototype.hide = function(elem) {
      // Give the element a height to change from
      elem.style.height = elem.scrollHeight + 'px';

      // Set the height back to 0
      setTimeout(function() {
          elem.style.height = '0';
      }, 110);

      setTimeout(function() {
          elem.style.display = '';
      }, 700);
    };

    // admin-menu
    {
      const adminMenu = document.querySelector('.admin-menu');
      const btnMinimize = document.querySelector('.admin-menu__btn-minimize');
      const adminMenuItem = document.querySelectorAll('.admin-menu__item--submenu');

      if (adminMenu) {
        $('.header__dashboard-burger').click (function () {
          if (window.matchMedia('(max-width: 991px)').matches) {
            $('.admin-menu').css('left', '0');
            $('.admin-menu').css('z-index', '9991');
            $('.header.header--dashboard').addClass('filter');
            $('.section-blur').addClass('filter');
            $('body').css('overflow', 'hidden');
          }
        });
        $('.admin-menu__close').click (function () {
          if (window.matchMedia('(max-width: 991px)').matches) {
            $('.admin-menu').css('left', '-100%');
            $('.admin-menu').css('z-index', '');
            $('.section-blur').removeClass('filter');
            $('.header.header--dashboard').removeClass('filter');
            $('body').css('overflow', 'visible');
          }
        });

        new AccordionMenu('.admin-menu__nav');
        btnMinimize.addEventListener('click', (e) => {
          e.preventDefault();

          adminMenu.classList.toggle('admin-menu--minimize');

          if (adminMenu.classList.contains('admin-menu--minimize')) {
            for (let i = 0; i < adminMenuItem.length; i++) {
              const element = adminMenuItem[i];
              element.classList.remove('js-open');
              element.querySelector('.admin-menu__list').style = '';
            }
          }
        })

        for (let i = 0; i < adminMenuItem.length; i++) {
          const element = adminMenuItem[i];
          element.addEventListener('click', () => {
            if (adminMenu.classList.contains('admin-menu--minimize')) {
              adminMenu.classList.remove('admin-menu--minimize');
            }
          })
        }

        //* function resize
        window.addEventListener('resize', function() {
          if (!window.matchMedia('(max-width: 991px)').matches) {
            $('.admin-menu').css('left', '');
            $('.admin-menu').css('z-index', '');
          }
          if (window.matchMedia('(max-width: 991px)').matches) {
            $('.admin-menu').css('top', '');
          }

        }, false);
      }
    }

    //select2 new type
    $('[data-toggle="select-parent"]').on('select2:open', function (e) {
      let thisElem = $(this).parent().prev();
      $(thisElem).addClass('open');
    });
    $('[data-toggle="select-parent"]').on('select2:opening', function (e) {
      let thisElemWidth = $(this).parent().prev().width() + 10;
      let windowWith = document.body.clientWidth;
      let posEl = (windowWith - $(this).parent().offset().left) - thisElemWidth;
      document.documentElement.style.setProperty('--pos', `${posEl}px`);
    });

    $('[data-toggle="select-parent"]').on('select2:close', function (e) {
      let thisElem = $(this).parent().prev();
      $(thisElem).removeClass('open');
    });

    $('[data-toggle="select-parent"]').on('select2:select', function (e) {
      let thisElem = $(this).parent().prev();
      var data = e.params.data;
      $(thisElem).find('strong').text(data.text);
    });

    //open and close body product admin
    // $('.open-full').click( function(e) {
    //   e.preventDefault();
    //   $(this).parent().parent().parent().toggleClass('open');
    //   $(this).parent().parent().parent().next().slideToggle();
    // });
    $('.product-items-list__header').click( function(e) {
      e.preventDefault();
      $(this).next().slideToggle();
      $(this).toggleClass('open');
    });


    //emotion script
    function emotionCalc(item) {
      let atr = Number($(item).attr('data-progress'));
      $(item).children('.line').css('height', atr + 'px')
    }

    if($('.statistic-box__emotion')) {
      let array = $('.progress');
      for(let i = 0; i<= array.length; i++) {
        emotionCalc(array[i]);
      }
    }

    //focus element .form__single--atr
    $('.form__single--select input, .form__single--attr input').focus(function() {
      $(this).parent().addClass('focus');
    });
    $('.form__single--select input, .form__single--attr input').focusout(function() {
      $(this).parent().removeClass('focus');
    });

    //height descktop 
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    //toogle next option
    $('.toogle-next').click( function() {
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    })

    //visible and hide number card
    $('.form__single .visible').click( function() {
      if(!$(this).hasClass('hide')) {
        $(this).parent().find($('.select2-selection__choice')).addClass('hide');
        $(this).addClass('hide');
      } else {
        $(this).removeClass('hide');
        $(this).parent().find($('.select2-selection__choice')).removeClass('hide');
      }
    });
    $('.form__single--card .visible ').click( function() {
      if($(this).prev().attr('type') == 'text') {
        $(this).prev().attr('type', 'password');
        $(this).prev().addClass('hide');
      } else {
        $(this).prev().attr('type', 'text');
        $(this).prev().removeClass('hide');
      }
    })

    //check card
    //check status additional
    $('.card-check input').click(function() {
      if ($(this).prop('checked')) {
        $('.card-form').find($('.form__single--card')).hide();
        $('.card-form').find($('.form__single--select')).show();
      } else {
        $('.card-form').find($('.form__single--card')).show();
        $('.card-form').find($('.form__single--select')).hide();
      }
    })

    //mask cvv card
    $('.card-cvv input').mask('000');
    $('.form__single--card input').mask('0000 0000 0000 0000');

  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
