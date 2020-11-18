/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import SimpleScrollbar from 'simple-scrollbar';
import Dropzone from 'dropzone';
import Cropper from 'cropperjs';
import 'lightgallery/dist/js/lightgallery-all.min'

export default {
  init() {
    Dropzone.autoDiscover = false;

    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const leftAside = document.querySelector('.aside-left');
    const rightAside = document.querySelector('.aside-right');
    const scrollDiv = document.querySelectorAll('.scroll-div');

    //* Swiper
    {
      //* option for swiper
      const optionForSwiperGoss = {
        slidesPerView: 'auto',
        spaceBetween: 12,
        setWrapperSize: true,
        navigation: {
          nextEl: '.card-goss .swiper-button-next',
          prevEl: '.card-goss .swiper-button-prev',
        },
        breakpoints: {
          767: {
            slidesPerView: 4,
            setWrapperSize: false,
            simulateTouch: false,
            preventInteractionOnTransition: true,
            mousewheel: true,
            // freeMode: true,
          },
        },
      }

      // const optionForTimeline = {
      //   slidesPerView: 4,
      //   setWrapperSize: false,
      //   simulateTouch: false,
      //   preventInteractionOnTransition: true,
      //   mousewheel: true,
      //   navigation: {
      //     nextEl: '.card-timeline__slider .swiper-button-next',
      //     prevEl: '.card-timeline__slider .swiper-button-prev',
      //   },
      //   breakpoints: {
      //     1260: {
      //       slidesPerView: 4,
      //     },
      //     992: {
      //       slidesPerView: 3,
      //       // freeMode: true,
      //     },
      //     360: {
      //       slidesPerView: 4,
      //     },
      //     250: {
      //       slidesPerView: 3,
      //       setWrapperSize: false,
      //       simulateTouch: false,
      //       preventInteractionOnTransition: true,
      //       mousewheel: true,
      //       // freeMode: true,
      //     },
      //   },
      // }

      //* swiper init
      let swiperGoss = new Swiper('.card-goss__slider.swiper-container', optionForSwiperGoss);

      // let swiperTimeline = new Swiper('.card-timeline__slider .swiper-container', optionForTimeline);
    }

    //* function for "aside-left" and "aside-right" position when scrolling, and calculate height
    {
      const checkAside = (param, any) => {
        if (param) {
          if (window.matchMedia('(max-width: 991px)').matches) {
            param.style.top = '';
          } else {
            param.style.top = any + 'px';
          }
        }
      }

      const positionSt = () => {
        const maxPadding = 90;
        const minPadding = 10;

        body.addEventListener('wheel', function(e) {
          let meNow = false;

          if (e.path) {
            for (let i = 0; i < e.path.length - 3; i++) {
              const element = e.path[i];
              if (element) {
                if (element.classList.contains('scroll-div')) {
                  meNow = true
                }
              }
            }
          }

          if (!meNow) {
            let newHeightDiv = 0;

            if (e.deltaY < 0) {
              if (leftAside) {
                checkAside(leftAside, maxPadding);
                leftAside.classList.remove('js-no-header')
              }
              if (rightAside) {
                checkAside(rightAside, maxPadding);
                rightAside.classList.remove('js-no-header')
              }
            } else {
              if (rightAside) {
                checkAside(leftAside, minPadding);
                leftAside.classList.add('js-no-header') // add class for height calculation
              }
              if (rightAside) {
                checkAside(rightAside, minPadding);
                rightAside.classList.add('js-no-header') // add class for height calculation
              }
            }

            //* height calculation due to header being hidden
            if (scrollDiv.length) {
              for (let i = 0; i < scrollDiv.length; i++) {
                const el = scrollDiv[i];
                if (el.offsetParent) { //* height calculation "aside-right" and "aside-left"
                  newHeightDiv = (window.innerHeight - header.clientHeight - 20); // 20 - correction because of the shadows
                  if (el.offsetParent.classList.contains('aside-right')) {
                    if (window.matchMedia('(max-width: 991px)').matches) {
                      el.style.height = '';
                    } else {
                      if (el.offsetParent.classList.contains('js-no-header')) {
                        el.style.height = (newHeightDiv - 65 + maxPadding) + 'px'; // writing the height // 65 - correction
                      } else {
                        el.style.height = (newHeightDiv - 65) + 'px'; // writing the height // 65 - correction
                      }
                    }
                  } else if (el.offsetParent.classList.contains('aside-left')) {
                    if (el.offsetParent.classList.contains('js-no-header')) {
                      el.style.height = newHeightDiv + maxPadding + 'px'; // writing the height
                    } else {
                      el.style.height = newHeightDiv + 'px'; // writing the height
                    }
                  }
                }
              }
            }
          }
        })
      }

      const heightWhat = () => {

        const modalHeaderHeight = 110; // default height Header in modal
        let newHeightDiv = 0;

        if (scrollDiv.length) {
          for (let i = 0; i < scrollDiv.length; i++) {
            const el = scrollDiv[i];
            SimpleScrollbar.initEl(el);
            if (el.offsetParent) { //* height calculation "aside-right" and "aside-left"
              newHeightDiv = (window.innerHeight - header.clientHeight - 20); // 20 - correction because of the shadows

              if (el.offsetParent.classList.contains('aside-right')) {
                if (window.matchMedia('(max-width: 991px)').matches) {
                  el.style.height = '';
                } else {
                  el.style.height = (newHeightDiv - 65) + 'px'; // writing the height // 65 - correction
                }
              } else if (el.offsetParent.classList.contains('aside-left')) {
                el.style.height = newHeightDiv + 'px'; // writing the height
              }
            }
            if (el.parentElement.classList.contains('form__inputs')) { //* height calculation in modal "form__inputs"

              if (el.parentNode.nextElementSibling) {
                if (el.parentNode.nextElementSibling.classList.contains('modal-footer')) { //* if there is div "modal-footer" in modal
                  let thisFooter = el.parentElement.nextElementSibling;
                  // find out the height through styles
                  let height = window.getComputedStyle(thisFooter, null).getPropertyValue('min-height');
                  height = +height.slice(0, -2); // convert int

                  newHeightDiv = window.innerHeight - height - modalHeaderHeight;
                  el.style.height = newHeightDiv + 'px'; // writing the height
                }
              } else {
                newHeightDiv = window.innerHeight - modalHeaderHeight;
                el.style.height = newHeightDiv + 'px'; // writing the height
              }

            }
            if (el.parentElement.classList.contains('modal-body')) { //* height calculation in modal "modal-body" when not form

              if (el.parentElement.nextElementSibling) {
                if (el.parentElement.nextElementSibling.classList.contains('modal-footer')) { //* if there is div "modal-footer" in modal
                  let thisFooter = el.parentElement.nextElementSibling;
                  // find out the height through styles
                  let height = window.getComputedStyle(thisFooter, null).getPropertyValue('min-height');
                  height = +height.slice(0, -2); // convert int

                  newHeightDiv = window.innerHeight - height - modalHeaderHeight;
                  el.style.height = newHeightDiv + 'px'; // writing the height
                }
              } else {
                newHeightDiv = window.innerHeight - modalHeaderHeight;
                el.style.height = newHeightDiv + 'px';  // writing the height
              }
            }
          }
        }
      }

      //* function init
      heightWhat();
      positionSt();

      //* function resize
      window.addEventListener('resize', function() {
        heightWhat();
        positionSt();
      }, false);
    }

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

    // * function for "Select" template in modal
    {
      $('.form__single--select-default select[data-toggle="select"]').select2({
        minimumResultsForSearch: Infinity,
        width: '100%',
      });
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

    //* function hover "reaction-btn-like"
    {
      const reaction = {
        reactionWrap: document.querySelectorAll('.reaction__wrap-link--reaction'),
        ractionDivVisible: document.querySelector('.reaction-btn-like'),
      }

      const hoverReaction = () => {
        let timer = [];
        let classShow = 'js-reaction-show';
        let classHover = 'js-reaction-hover';
        if (reaction.reactionWrap.length) {
          reaction.reactionWrap.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
              timer[1] = setTimeout(function() {
                element.classList.add(classShow);
                element.querySelector('.reaction-btn-like').classList.add(classShow);
              }, 500);
              clearInterval(timer[2]);
              element.classList.add(classHover)
            })
            element.addEventListener('mouseleave', (e) => {
              clearInterval(timer[1]);
              timer[2] = setTimeout(function() {
                element.classList.remove(classShow);
                element.querySelector('.reaction-btn-like').classList.remove(classShow);
              }, 500);
              element.classList.remove(classHover)
            })
          });
        }
      }
      hoverReaction();
    }

    //* init lightGallery
    {
      const postLightGallery = $('.grid-gallery').lightGallery({
        selector: '.grid-gallery__selector',
        exThumbImage: 'data-src',
        // width: '620px',
        // height: '100%',
        thumbWidth: 120,
        thumbContHeight: 177,
        thumbMargin: 16,
        hideBarsDelay: 0,
        thumbnail: true,
        // animateThumb: false,
        showThumbByDefault: true,
        zoom: false,
        share: false,
        rotate: false,
        hash: false,
      });

      // Perform any action the gallery
      postLightGallery.on('onBeforeOpen.lg',function(){
        $('.section-blur').addClass('filter');
        $('.menu-bottom').addClass('filter');
      });
      postLightGallery.on('onCloseAfter.lg',function(){
        $('.section-blur').removeClass('filter');
        $('.menu-bottom').removeClass('filter');
      });
    }

    //* Dropzone and Cropper
    {
      const btnCrop = document.querySelector('.btn-drop-photo-crop');
      const containerCrop = document.querySelector('.drop-photo__start');

      const myDropzone = new Dropzone('.drop-photo', {
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

          btnCrop.addEventListener('click', function() {
            // Get the canvas with image data from Cropper.js
            let canvas = cropper.getCroppedCanvas({
              width: 256,
              height: 256,
            });

            // Turn the canvas into a Blob (file object without a name)
            canvas.toBlob(function(blob) {
              // Create a new Dropzone file thumbnail
              myDropZone.createThumbnail(
                blob,
                myDropZone.options.thumbnailWidth,
                myDropZone.options.thumbnailHeight,
                myDropZone.options.thumbnailMethod,
                false,
                function(dataURL) {

                  // Update the Dropzone file thumbnail
                  myDropZone.emit('thumbnail', file, dataURL);
                  // Return the file to Dropzone
                  done(blob);
              });
            });

            // Remove the editor from the view
            editor.parentNode.removeChild(editor);
          });

          // Create an image node for Cropper.js
          let image = new Image();
          image.src = URL.createObjectURL(file);
          editor.appendChild(image);

          // Create Cropper.js
          let cropper = new Cropper(image, {
            aspectRatio: 1,
            viewMode: 1,
          });
        },
      });
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
