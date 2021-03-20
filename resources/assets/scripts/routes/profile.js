/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import SimpleScrollbar from 'simple-scrollbar';
import Dropzone from 'dropzone';
import Cropper from 'cropperjs';
import 'jquery-mask-plugin';

export default {
  init() {


    $('.new-banner').click(function() {
      let imgProfile = $(this).children('img').attr('src')
      for(let i = 0; i<imgProfile.length; i++) {
       $(this).addClass('new-banner__img');
      }
    });
   
     

    Dropzone.autoDiscover = false;

    $('.orders__toggle').on('click', function() {
      $(this).next().slideToggle(400);
      $(this).toggleClass('active-arrow');
    });

    $('.groups__toggle').on('click', function() {
      $(this).next().slideToggle(400);
      $(this).toggleClass('active-arrow');
    });

    $('.profile-link').on('click', function() {
      $(this).toggleClass('send');
    });
    //* option for swiper

    var swiper = new Swiper('.groups__slider .swiper-container', {
      slidesPerView: 3,
      spaceBetween: 12,
      setWrapperSize: false,
      simulateTouch: false,
      preventInteractionOnTransition: true,
      mousewheel: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1260: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
          // freeMode: true,
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
    });

    
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
        if($('.connections__select--friends-full')) {
          const optionForTimelinefriendFull = {
            slidesPerView: 4,
            setWrapperSize: false,
            simulateTouch: false,
            preventInteractionOnTransition: true,
            mousewheel: true,
            navigation: {
              nextEl: '.connections__select--friends-full .swiper-button-next',
              prevEl: '.connections__select--friends-full .swiper-button-prev',
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
          let swiperTimelinefriendFull = new Swiper('.connections__select--friends-full .swiper-container', optionForTimelinefriendFull);
          let activeSlide = 0;
          swiperTimelinefriendFull.on('slideChange', function(event){
            if(activeSlide > swiperTimelinefriendFull.activeIndex) {
              activeSlide = swiperTimelinefriendFull.activeIndex;
              countSlide($(event.el).parent(), 'prev')
            } else if(activeSlide < swiperTimelinefriendFull.activeIndex) {
              countSlide($(event.el).parent(), 'next')
              activeSlide = swiperTimelinefriendFull.activeIndex;
            }
            
            // left
          });
        }
        if($('.connections__select--store-slide')) {
          const optionForTimelineStore = {
            slidesPerView: 3,
            setWrapperSize: false,
            simulateTouch: false,
            preventInteractionOnTransition: true,
            mousewheel: true,
            navigation: {
              nextEl: '.connections__select--store-slide .swiper-button-next',
              prevEl: '.connections__select--store-slide .swiper-button-prev',
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
          let swiperTimelineStore = new Swiper('.connections__select--store-slide .swiper-container', optionForTimelineStore);
          let activeSlide = 0;
          swiperTimelineStore.on('slideChange', function(event){
            if(activeSlide > swiperTimelineStore.activeIndex) {
              activeSlide = swiperTimelineStore.activeIndex;
              countSlide($(event.el).parent(), 'prev')
            } else if(activeSlide < swiperTimelineStore.activeIndex) {
              countSlide($(event.el).parent(), 'next')
              activeSlide = swiperTimelineStore.activeIndex;
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
        
     
    //set statistic
    $('.overview__select .overview__item').click( function() {
      $('.overview__select .overview__item').removeClass('active');
      $('.overview__full .overview__full--item').removeClass('show');
      $(this).addClass('active');
      let count = $(this).attr('data-target');
      $('#'+ count).addClass('show');
    })
    //edit show
    $('#editInfo').click( function (e) {
      e.preventDefault();
      $('.about-me__box--tell >div').toggleClass('hide');
      $('.about-me__form').toggleClass('hide');
    })
    //close edit show
    $('.about-me__form button[type="submit"]').click( function () {
      $('.about-me__box--tell >div').toggleClass('hide');
      $('.about-me__form').toggleClass('hide');
    })


    //mask input
    $('.phone').mask('+380 000 000 000');
    

     //grid post images

    function gridGallery(element) {
      let count = $(element).find($('.post__galery--single')).length;
      if(count == 1) {
        $(element).attr('data-count', 'single')
      } else if( count > 1 && count < 3) {
        $(element).attr('data-count', 'two')
      } else if( count > 3) {
        $(element).attr('data-count', 'three')
      }
    }

    function countOverlay() {
      if(window.innerWidth < 992) {
        let countWidth = ($('.gallery-thumbnails .swiper-container .swiper-slide').innerWidth() * 85) / 100;
        $('.gallery-thumbnails .count-slider').css('width', countWidth + 'px')
      }
    }

    if($('.galery-modal').hasClass('galery-modal')) {
      if($('.post__galery')) {
        let galeryArray = $('.post__galery');
        for(let i = 0; i<galeryArray.length; i++) {
          gridGallery(galeryArray[i])
        }
      }

      
      //modal-galery slider
      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 5,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          1260: {
            slidesPerView: 5,
          },
          575: {
            slidesPerView: 4.85,
            // freeMode: true,
          },
          360: {
            slidesPerView: 3.85,
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
      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 5,
        thumbs: {
          swiper: galleryThumbs,
        },
      });

      $('#galery-modal').on('show.bs.modal', function (event) {
        setTimeout( function() {
          galleryTop.update();
          galleryThumbs.update();
        }, 200)
      })

      $(window).resize( function() {
        countOverlay();
      })

      galleryTop.on('slideChange', function () {
        galleryTop.isBeginning ? $('.gallery-full .swiper-button-prev').addClass('swiper-button-disabled') : $('.gallery-full .swiper-button-prev').removeClass('swiper-button-disabled');
        galleryTop.isEnd ? $('.gallery-full .swiper-button-next').addClass('swiper-button-disabled') : $('.gallery-full .swiper-button-next').removeClass('swiper-button-disabled');
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

      //navifation slider
      $('.gallery-full .swiper-button-prev').click( function() {
        galleryTop.slidePrev()
      })
      $('.gallery-full .swiper-button-next').click( function() {
        galleryTop.slideNext()
      })

      //open gallery view
     $('.galery-box .grid-gallery__selector, .galery-box .history__selector-grid').click( function(e) {
      e.preventDefault();
     $('#galery-modal').modal();
     setTimeout( function() {
      galleryThumbs.update();
      galleryTop.update();
     }, 300)
     setTimeout( function() {
      countOverlay();
     }, 650)
    })

    //navifation slider thumbs
    $('.gallery-thumbnails .swiper-button-prev').click( function(e) {
      e.preventDefault();
      galleryThumbs.slidePrev()
    })
    $('.gallery-thumbnails .swiper-button-next').click( function(e) {
      e.preventDefault();
      galleryThumbs.slideNext()
    });

    //gallery close modal
    $('.gallery-thumbnails .swiper-button-prev').click( function(e) {
      e.preventDefault();
      galleryThumbs.slidePrev()
    })
    }
  

    //* Dropzone and Cropper
    {
      
      if($('.profile-face__background').hasClass('profile-face__background')) {
        const dropZoneEl = document.querySelectorAll('.add-photo--background .drop-photo--bg');
        console.log(dropZoneEl)
        const btnCrop = document.querySelector('.btn-drop-photo-crop--bg');
      const containerCrop = document.querySelector('.drop-photo__start--bg');

      const myDropzone = new Dropzone(dropZoneEl[0], {
        url: '/file/post',
        thumbnailWidth: null,
        thumbnailHeight: null,
        maxFiles: 1,

        transformFile: function(file, done) {
          let myDropZone = this;

          // Create the image editor overlay
          let editor = document.createElement('div');
          editor.style.backgroundColor = '#e8ebf2';
          editor.style.position = 'absolute';
          editor.style.top = 0;
          editor.style.bottom = 0;
          editor.style.left = 0;
          editor.style.right = 0;
          editor.style.zIndex = 2;
          this.previewsContainer.appendChild(editor)
          // document.body.appendChild(editor);

          // Create confirm button at the top left of the viewport
          // let buttonConfirm = document.createElement('button');
          // buttonConfirm.style.position = 'absolute';
          // buttonConfirm.style.left = '10px';
          // buttonConfirm.style.top = '10px';
          // buttonConfirm.style.zIndex = 9999;
          // buttonConfirm.textContent = 'Confirm';
          // editor.appendChild(buttonConfirm);

          // Create an image node for Cropper.js
          let image = new Image();
          image.src = URL.createObjectURL(file);
          editor.appendChild(image);

          // Create Cropper.js
          let cropper = new Cropper(image, {
            aspectRatio: NaN,
            viewMode: 3,
          });
        },
      });
      }
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
