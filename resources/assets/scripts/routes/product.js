/* eslint-disable no-unused-vars */
import 'bootstrap/js/dist/modal';
import Swiper from 'swiper/swiper-bundle';
import 'select2/dist/js/select2.full';
import PerfectScrollbar from 'perfect-scrollbar';

// import '@chenfengyuan/datepicker/dist/datepicker.min';

export default {
  init() {

    //thumnail
    function initNumber(number, element) {
        let allSlide = $(element).find($('.swiper-slide')).length;
        let counter = Math.floor(number);
        let countUser = allSlide - counter;
       $(element).find($('.count-slider')).attr('data-count', countUser);
       $(element).find($('.count-slider')).text('+'+ countUser);
        
      }
          //timeline-global
          function countSlide(el, direction) {
            let element = $(el).find($('.count-slider'));
            let countElement = Number($(element).attr('data-count'))
            if(direction == 'next') {
              countElement -= 1;
              $(element).attr('data-count', countElement)
              $(element).text('+' + countElement)
            } else {
              countElement += 1;
              $(element).attr('data-count', countElement)
              $(element).text('+' + countElement)
            }
          }
    //modal-galery slider
    if($('.box-item-top__img .gallery-thumbs').hasClass('gallery-thumbs')) {
      var galleryThumbs = new Swiper('.box-item-top__img .gallery-thumbs', {
        spaceBetween: 8,
        slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          1260: {
            slidesPerView: 4,
          },
          991: {
            slidesPerView: 4,
            // freeMode: true,
          },
          575: {
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
        on: {
          init: function (event) {
            initNumber(event.params.slidesPerView, $(event.el).parent());
          },
        },
      });

        //navifation slider thumbs
    $('.gallery-thumbnails .swiper-button-prev').click( function(e) {
      e.preventDefault();
      galleryThumbs.slidePrev()
    })
    $('.gallery-thumbnails .swiper-button-next').click( function(e) {
      e.preventDefault();
      galleryThumbs.slideNext()
    });

    galleryThumbs.on('slideChange', function () {
      galleryThumbs.isBeginning ? $('.gallery-thumbnails .swiper-button-prev').addClass('swiper-button-disabled') : $('.gallery-thumbnails .swiper-button-prev').removeClass('swiper-button-disabled');
      galleryThumbs.isEnd ? $('.gallery-thumbnails .swiper-button-next').addClass('swiper-button-disabled') : $('.gallery-thumbnails .swiper-button-next').removeClass('swiper-button-disabled');
    });

    //static counter thumbs
    let activeSlide = 0;
    galleryThumbs.on('slideChange', function(event){
      if(activeSlide > galleryThumbs.activeIndex) {
        activeSlide = galleryThumbs.activeIndex;
        countSlide($(event.el).parent(), 'prev')
      } else if(activeSlide < galleryThumbs.activeIndex) {
        countSlide($(event.el).parent(), 'next')
        activeSlide = galleryThumbs.activeIndex;
      }
      
      // left
    });
    
    let mySwiper = new Swiper('.gallery-top', {
      slidesPerView: 1,
    thumbs: {
      swiper: galleryThumbs,
    },
  });
    }

    let mySwiper = new Swiper('.gallery-top', {
      slidesPerView: 1,
  });


    //* Swiper
    {
      let swiperCard;

      //* option for swiper
      const optionForSwiperProduct = {
        slidesPerView: 4,
        spaceBetween: 16,
        navigation: {
          nextEl: '.internal-card__slider .swiper-button-next',
          prevEl: '.internal-card__slider .swiper-button-prev',
        },
        breakpoints: {
          1260: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          320: {
            slidesPerView: 'auto',
            spaceBetween: 8,
          },
        },
      }

      //* swiper init
      if($('.slider-recomend')) {
        swiperCard = new Swiper('.internal-card__slider.swiper-container', optionForSwiperProduct);
      }
      
    }

    //scroll horizontal
    function resize() {
      ps.update();
    }

    if($('.tabs-product').hasClass('tabs-product')) {
      var ps = new PerfectScrollbar('.tabs-product');
      window.onresize = resize;
    }

    //anim arrow acordion
    $('.card-header button').click( function() {
      $(this).parent().parent().toggleClass('open');
    })

    //product link mobile scroll
    if($('.main-item .nav-tabs').hasClass('nav-tabs')) {
      if(window.innerWidth < 575) {
        let width = window.innerWidth;
        $('.nav-tabs').css('width', (width - 25) + 'px')
      }
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
