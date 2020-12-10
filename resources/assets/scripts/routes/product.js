/* eslint-disable no-unused-vars */
import 'bootstrap/js/dist/modal';
import Swiper from 'swiper/swiper-bundle';
import 'select2/dist/js/select2.full';

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
    var galleryThumbs = new Swiper('.box-item-top__img .gallery-thumbs', {
        spaceBetween: 8,
        slidesPerView: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          1260: {
            slidesPerView: 4,
          },
          575: {
            slidesPerView: 4,
            // freeMode: true,
          },
          360: {
            slidesPerView: 3,
          },
          250: {
            slidesPerView: 4,
            setWrapperSize: false,
            simulateTouch: false,
            preventInteractionOnTransition: true,
            mousewheel: true,
            // freeMode: true,
          },
        },
        on: {
          init: function (event) {
            if(window.innerWidth < 992) {
              initNumber(event.params.slidesPerView + 1, $(event.el).parent());
              $('.gallery-thumbnails .swiper-container').append($('.gallery-thumbnails .count-slider'));
            } else {
              initNumber(event.params.slidesPerView, $(event.el).parent());
            }
            
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

  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
