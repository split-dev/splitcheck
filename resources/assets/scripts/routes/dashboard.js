import SimpleScrollbar from 'simple-scrollbar';

export default {
  init() {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const adminMenu = document.querySelector('.admin-menu');
    const adminMenuNav = document.querySelector('.admin-menu__nav');
    const adminMenuList = document.querySelector('.admin-menu__list');
    const scrollDiv = document.querySelectorAll('.scroll-div');

    //* function for "adminMenu" position when scrolling, and calculate height
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
        const maxPadding = 94;
        const minPadding = 10;

        body.addEventListener('wheel', function(e) {
          let meNow = false;

          if (!window.matchMedia('(max-width: 991px)').matches) {
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
              let newHeightadminMenuList = adminMenuList.offsetHeight;

              if (e.deltaY < 0) {
                if (adminMenuNav) {
                  checkAside(adminMenu, maxPadding);
                  adminMenuNav.classList.remove('js-no-header')
                }
              } else {
                if (adminMenuNav) {
                  checkAside(adminMenu, minPadding);
                  adminMenuNav.classList.add('js-no-header') // add class for height calculation
                }
              }

              //* height calculation due to header being hidden
              if (scrollDiv.length) {
                for (let i = 0; i < scrollDiv.length; i++) {
                  const el = scrollDiv[i];
                  if (el.offsetParent) { //* height calculation
                    newHeightDiv = (window.innerHeight - header.clientHeight - 20); // 20 - correction because of the shadows
                    newHeightadminMenuList = adminMenuList.offsetHeight;
                    if (el.offsetParent.classList.contains('admin-menu__nav')) {
                      if ( (newHeightDiv - 80) > newHeightadminMenuList) {
                        el.style.height = '';
                      } else {
                      if (el.offsetParent.classList.contains('js-no-header')) {
                          el.style.height = (newHeightDiv - 15 ) + 'px'; // writing the height
                        } else {
                          el.style.height = (newHeightDiv - 100) + 'px'; // writing the height // 120 - correction
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        })

        body.addEventListener('mousemove', function(e) {
          let meNow = false;
          if (e.path) {

            for (let i = 0; i < e.path.length - 3; i++) {
              const element = e.path[i];
              if (element) {
                if (element.classList.contains('admin-menu')) {
                  meNow = true

                  heightWhat();
                }
              }
            }
          }
          if (!meNow) return false
        })
      }

      const heightWhat = () => {
        // const modalHeaderHeight = 110; // default height Header in modal
        let newHeightDiv = 0;
        let newHeightadminMenuList = adminMenuList.offsetHeight;

        if (scrollDiv.length) {
          for (let i = 0; i < scrollDiv.length; i++) {
            const el = scrollDiv[i];
            SimpleScrollbar.initEl(el);
            if (el.offsetParent) { //* height calculation "aside-right" and "aside-left"
              newHeightDiv = (window.innerHeight - header.clientHeight - 20); // 20 - correction because of the shadows
              newHeightadminMenuList = adminMenuList.offsetHeight;

              if (el.offsetParent.classList.contains('admin-menu__nav')) {
                if (window.matchMedia('(max-width: 991px)').matches) {
                  el.style.height = (newHeightDiv) + 'px'; // writing the height // 120 - correction
                  // if (window.matchMedia('(max-width: 767px)').matches) {
                  //   el.style.height = (newHeightDiv - 30) + 'px'; // writing the height // 120 - correction
                  // }
                } else {
                  if ( (newHeightDiv - 80) > newHeightadminMenuList) {
                    el.style.height = '';
                  } else {
                    if (el.offsetParent.classList.contains('js-no-header')) {
                      el.style.height = (newHeightDiv - 15 ) + 'px'; // writing the height
                    } else {
                      el.style.height = (newHeightDiv - 100) + 'px'; // writing the height // 120 - correction
                    }
                  }
                }
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
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {},
};
