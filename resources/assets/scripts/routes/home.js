/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import SimpleScrollbar from 'simple-scrollbar';

export default {
  init() {

    const body = document.querySelector('body');
    const header = document.querySelector('.header');

    const option = {
      slidesPerView: 'auto',
      spaceBetween: 12,
      setWrapperSize: true,
      breakpoints: {
        767: {
          slidesPerView: 4,
          mousewheel: true,
          setWrapperSize: false,
          simulateTouch: false,
          // freeMode: true,
        },
      },
    }
    let mySwiper = new Swiper('.card-goss__slider.swiper-container', option);

    const leftAside = document.querySelector('.aside-left');
    const rightAside = document.querySelector('.aside-right');
    const scrollDiv = document.querySelector('.scroll-div');
    leftAside.addEventListener('scroll', function() {
      leftAside.style.top = '-35px';
    })
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
      newHeightDiv = (screen.height - header.clientHeight - 290);
      console.log(newHeightDiv)
      scrollDiv.style.height = newHeightDiv + 'px';
    }

    if (scrollDiv) {
      SimpleScrollbar.initEl(scrollDiv);

      heightWhat();
    }

    positionSt();
    window.addEventListener('resize', function() {
      positionSt();
      heightWhat()
    }, false);
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
