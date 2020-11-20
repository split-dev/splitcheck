/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import 'jquery-mask-plugin'

export default {
  init() {
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
        if($('.connections__select--family')) {
          const optionForTimelineFamily = {
            slidesPerView: 3,
            setWrapperSize: false,
            simulateTouch: false,
            preventInteractionOnTransition: true,
            mousewheel: true,
            navigation: {
              nextEl: '.connections__select--family .swiper-button-next',
              prevEl: '.connections__select--family .swiper-button-prev',
            },
            breakpoints: {
              1260: {
                slidesPerView: 3,
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
          let swiperTimelineFamily = new Swiper('.connections__select--family .swiper-container', optionForTimelineFamily);
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
        if($('.connections__select--besties')) {
          const optionForTimelineBesties = {
            slidesPerView: 3,
            setWrapperSize: false,
            simulateTouch: false,
            preventInteractionOnTransition: true,
            mousewheel: true,
            navigation: {
              nextEl: '.connections__select--besties .swiper-button-next',
              prevEl: '.connections__select--besties .swiper-button-prev',
            },
            breakpoints: {
              1260: {
                slidesPerView: 3,
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
          let swiperTimelineBesties = new Swiper('.connections__select--besties .swiper-container', optionForTimelineBesties);
          let activeSlide = 0;
          swiperTimelineBesties.on('slideChange', function(event){
            if(activeSlide > swiperTimelineBesties.activeIndex) {
              activeSlide = swiperTimelineBesties.activeIndex;
              countSlide($(event.el).parent(), 'prev')
            } else if(activeSlide < swiperTimelineBesties.activeIndex) {
              countSlide($(event.el).parent(), 'next')
              activeSlide = swiperTimelineBesties.activeIndex;
            }
          });
        }
        if($('.connections__select--friends')) {
          const optionForTimelineFriends = {
            slidesPerView: 3,
            setWrapperSize: false,
            simulateTouch: false,
            preventInteractionOnTransition: true,
            mousewheel: true,
            navigation: {
              nextEl: '.connections__select--friends .swiper-button-next',
              prevEl: '.connections__select--friends .swiper-button-prev',
            },
            breakpoints: {
              1260: {
                slidesPerView: 3,
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
          let swiperTimelineFriends = new Swiper('.connections__select--friends .swiper-container', optionForTimelineFriends);
          let activeSlide = 0;
          swiperTimelineFriends.on('slideChange', function(event){
            if(activeSlide > swiperTimelineFriends.activeIndex) {
              activeSlide = swiperTimelineFriends.activeIndex;
              countSlide($(event.el).parent(), 'prev')
            } else if(activeSlide < swiperTimelineFriends.activeIndex) {
              countSlide($(event.el).parent(), 'next')
              activeSlide = swiperTimelineFriends.activeIndex;
            }
            
            // left
          });
        }
        
        
    let singleWidth = $('.connections__list').width();
      function createScroll() {
          for( let i = 0; i< $('.connections__slider').length; i++) {
            let count = $('.connections__slider')[i];
            let countUser = 0;
            if($(count).find($('.swiper-slide')).length > 3) {
              countUser = $(count).find($('.swiper-slide')).length - 3;
            }
            $(count).find($('.count-slider')).attr('data-count', countUser);
            $(count).find($('.count-slider')).text('+'+ countUser);
          }
      }
      createScroll()

     //setColor
     $('.profile-face__background .btn-border').click( function(e) {
       e.preventDefault();
       $(this).addClass('active');
      $('.profile-face__background .select-color').addClass('show');
     });
     $('.profile-face__background .select-color li').click( function() {
       $('.profile-face__background .select-color li').removeClass('select');
       $(this).addClass('select');
       $('.profile-face__background').css('background-color', $(this).css('background-color'))
       $('.profile-face__background .btn-border').removeClass('active');
       $('.profile-face__background .select-color').removeClass('show');
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
    //set statistic
    $('.overview__select .overview__item').click( function() {
      $('.overview__select .overview__item').removeClass('active');
      $('.overview__full .overview__full--item').removeClass('show');
      $(this).addClass('active');
      let count = $(this).attr('data-target');
      $('#'+ count).addClass('show');
    })
    //mask input
    $('.phone').mask('+ 3800000000');
    //edit show
    $('#editInfo').click( function (e) {
      e.preventDefault();
      $('.about-me__box--tell >div').toggleClass('hide');
      $('.about-me__form').toggleClass('hide');
    })
    //max count strong
    $('.max-text textarea').keyup(function() {
      var maxCount = 400;
      var revText = this.value.length;
  
          if (this.value.length > maxCount)
              {
              this.value = this.value.substr(0, maxCount);
              }
          var cnt = (maxCount - revText);
          $(this).parent().find($('.count span:first-of-type')).text(revText)
  
      });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
