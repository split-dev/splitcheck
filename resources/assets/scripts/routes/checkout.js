/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import 'bootstrap/js/dist/modal';


export default {
  init() {
    $('.checkout-card-toggle').click(function() {
      $(this).next().slideToggle(400);
      $(this).toggleClass('checkout-card-toggle__active');
    })

    $('.checkout__box-header').click(function() {
      $(this).next().slideToggle(400);
      $(this).toggleClass('checkout__box-header--active');
    })

    function toogleFunc(el, elArray) {
      for(let i = 0; i < elArray.length; i++) {
        $(elArray[i]).slideUp();
      }
      $(el).slideDown();
     
    }
 
    $('.checkout__members').click(function() {
      $('.checkout__members').removeClass('form-radio__active');
      $(this).toggleClass('form-radio__active');
      if(!$(this).find($('.radio-custom')).prop('checked')) {
       
        let elemThis = $(this).find($('.checkout__members-content'))
        let arrayThis = $(this).parent().find($('.checkout__members-content'));
      
        toogleFunc(elemThis, arrayThis)
      } 
      
    });
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
  function initNumber(number, element) {
    let allSlide = $(element).find($('.swiper-slide')).length;
    let counter = Math.floor(number);
    let countUser = allSlide - counter;
   $(element).find($('.count-slider')).attr('data-count', countUser);
   $(element).find($('.count-slider')).text('+'+ countUser);
    
  
  }
  
  if(document.querySelector('.checkout-connections__slider')) {
 
    const optionForTimelineFamily = {
      slidesPerView: 2,
      spaceBetween: 8,
      setWrapperSize: false,
      simulateTouch: false,
      preventInteractionOnTransition: true,
      mousewheel: true,
      navigation: {
        nextEl: '.checkout-connections__slider .swiper-button-next',
        prevEl: '.checkout-connections__slider .swiper-button-prev',
      },
      breakpoints: {
        1260: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
          // freeMode: true,
        },
        360: {
          slidesPerView: 2,
        },
        250: {
          slidesPerView: 2,
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
    }
    let swiperTimelineFamily = new Swiper('.checkout__slider', optionForTimelineFamily);
    let activeSlide = 0;
    swiperTimelineFamily.on('slideChange', function(event){
      if(activeSlide > swiperTimelineFamily.activeIndex) {
        activeSlide = swiperTimelineFamily.activeIndex;
        countSlide($(event.el).parent(), 'prev')
      } else if(activeSlide < swiperTimelineFamily.activeIndex) {
        countSlide($(event.el).parent(), 'next')
        activeSlide = swiperTimelineFamily.activeIndex;
      }
    });
  }


  //password hide
  $('.visible').click( function () {
  if ($(this).prev().attr('type') === 'password') {
    $(this).prev().attr('type', 'text');
  } else {
    $(this).prev().attr('type', 'password');
  }
});
      
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
