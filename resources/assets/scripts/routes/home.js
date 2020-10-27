/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import SimpleScrollbar from 'simple-scrollbar';

export default {
  init() {

    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const leftAside = document.querySelector('.aside-left');
    const rightAside = document.querySelector('.aside-right');
    const scrollDiv = document.querySelectorAll('.scroll-div');

    const option = {
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

    let mySwiper = new Swiper('.card-goss__slider.swiper-container', option);

    function positionSt() {
      body.addEventListener('wheel', function(e) {

        let meNow = false;

        for (let i = 0; i < e.path.length - 3; i++) {
          const element = e.path[i];
          if (element) {
            if (element.classList.contains('scroll-div')) {
              meNow = true
            }
          }
        }

        if (!meNow) {
          if (e.deltaY < 0) {
            if (window.matchMedia('(max-width: 991px)').matches) {
              leftAside.style.top = '';
              rightAside.style.top = '';
            } else {
              leftAside.style.top = '90px';
              rightAside.style.top = '90px';
            }
          } else {
            if (window.matchMedia('(max-width: 991px)').matches) {
              leftAside.style.top = '';
              rightAside.style.top = '';
            } else {
              leftAside.style.top = '10px';
              rightAside.style.top = '10px';
            }
          }
        }
      })
    }

    function heightWhat() {
      let newHeightDiv = 0
      newHeightDiv = (window.innerHeight - header.clientHeight - 20);
      if (scrollDiv.length) {
        for (let i = 0; i < scrollDiv.length; i++) {
          const el = scrollDiv[i];
          SimpleScrollbar.initEl(el);
          if (el.offsetParent) {
            if (el.offsetParent.classList.contains('aside-right')) {
              if (window.matchMedia('(max-width: 991px)').matches) {
                el.style.height = '';
              } else {
                el.style.height = (newHeightDiv - 65) + 'px';
              }
            } else {
              el.style.height = newHeightDiv + 'px';
            }
          }
        }
      }
    }

    heightWhat();
    positionSt();
    window.addEventListener('resize', function() {
      positionSt();
      heightWhat()
    }, false);

    let btnOptionsWrap = document.querySelectorAll('.options');
    let btnOptions = document.querySelectorAll('.options__btn');

    body.addEventListener('click', e => {
      e.preventDefault();

      if (e.target.offsetParent) {
        const targetoffset = e.target.offsetParent;
        const {type} = e.target.offsetParent.firstElementChild.dataset;

        if (type === 'options') {
          if (!targetoffset.classList.contains('options--open')) {
              const blockBackDrop = document.createElement('div');
              blockBackDrop.classList.add('option-backDrop');

              targetoffset.classList.add('options--open');
              targetoffset.appendChild(blockBackDrop);
            } else {
              targetoffset.classList.remove('options--open')
              targetoffset.querySelector('.option-backDrop').remove();
            }
        }
      } else {

        btnOptionsWrap.forEach(element => {
          element.classList.remove('options--open');
          const thisBackDrop = element.querySelector('.option-backDrop');
          if (thisBackDrop) {
            element.parentNode.lastElementChild.removeChild(thisBackDrop)
          }
        });
      }
    })

  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
