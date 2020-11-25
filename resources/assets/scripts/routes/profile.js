/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import 'jquery-mask-plugin'
import 'lightgallery/dist/js/lightgallery-all.min';

export default {
  init() {
    
    function initNumber(number, element) {
      let allSlide = $(element).find($('.swiper-slide')).length;
      let counter = Number($(element).find($('.count-slider')).attr('data-count'));
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
        if($('.connections__select--family')) {
          const optionForTimelineFamily = {
            slidesPerView: 3,
            spaceBetween: 8,
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
                slidesPerView: 2,
                // freeMode: true,
              },
              360: {
                slidesPerView: 3,
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
                slidesPerView: 2,
                // freeMode: true,
              },
              360: {
                slidesPerView: 3,
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
                slidesPerView: 2,
                // freeMode: true,
              },
              360: {
                slidesPerView: 3,
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
        if($('.connections__select--follower')) {
          const optionForTimelineFollower = {
            slidesPerView: 4,
            setWrapperSize: false,
            simulateTouch: false,
            preventInteractionOnTransition: true,
            mousewheel: true,
            navigation: {
              nextEl: '.connections__select--follower .swiper-button-next',
              prevEl: '.connections__select--follower .swiper-button-prev',
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
                initNumber(event.params.slidesPerView, $(event.el).parent());
              },
            },
          }
          let swiperTimelineFollower = new Swiper('.connections__select--follower .swiper-container', optionForTimelineFollower);
          let activeSlide = 0;
          swiperTimelineFollower.on('slideChange', function(event){
            if(activeSlide > swiperTimelineFollower.activeIndex) {
              activeSlide = swiperTimelineFollower.activeIndex;
              countSlide($(event.el).parent(), 'prev')
            } else if(activeSlide < swiperTimelineFollower.activeIndex) {
              countSlide($(event.el).parent(), 'next')
              activeSlide = swiperTimelineFollower.activeIndex;
            }
            
            // left
          });
        }
        // mobile colection
        function tpCollection () {
          if(window.innerWidth < 992) {
            $('.connections__mob').append($('.connections'))
          } else {
            if($('.connections__mob .connections').hasClass('connections')) {
              $('.connections__wrapper').append($('.connections'))
            }
          }
        }
        tpCollection()
        $(window).resize( function() {
          tpCollection();
        })
        
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

      //light gallery
      const postLightGallery = $('.grid-history').lightGallery({
        selector: '.history__selector-grid',
        exThumbImage: 'data-src',
        thumbWidth: 120,
        thumbContHeight: 177,
        thumbMargin: 16,
        hideBarsDelay: 0,
        thumbnail: true,
        showThumbByDefault: true,
        zoom: false,
        share: false,
        rotate: false,
        hash: false,
      });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
