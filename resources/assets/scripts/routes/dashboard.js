import SimpleScrollbar from 'simple-scrollbar';
import PerfectScrollbar from 'perfect-scrollbar';

export default {
  init() {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const adminMenu = document.querySelector('.admin-menu');
    const adminMenuNav = document.querySelector('.admin-menu__nav');
    const adminMenuList = document.querySelector('.admin-menu__list');
    const scrollDiv = document.querySelectorAll('.scroll-div');

    //* function for "adminMenu" position when scrolling, and calculate height
    if (adminMenu) {
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
    }

    //clone new box .add-field
    $('.checked-box #useMeta').on('click', function() {
      $(this).parent().find($('.checked-box__body')).slideToggle();
    })

    if(document.querySelector('.add-field')) {
      document.querySelector('.add-field').addEventListener('click', function(e) {
        e.preventDefault();
        let clone = document.querySelector('.checked-box__item').cloneNode(true);
        document.querySelector('.checked-box__list').appendChild(clone)
      })
    }

    //* scroll
    {
      if($('[data-scroll="perfect-scrollbar"]').length > 0) {
        const psItems = document.querySelectorAll('[data-scroll="perfect-scrollbar"]')

        const resize = (elem) => {
          elem.update();
        }

        for (let i = 0; i < psItems.length; i++) {
          const element = psItems[i];

          const ps = new PerfectScrollbar(element);

          window.onresize = resize(ps);
        }
      }
    }

    //* mobile append aside right
    {
      if($('.section-aside-right-mob').length > 0) {
        const tpCollection = () => {
          if(window.innerWidth < 992) {
            $('.section-aside-right-mob').append($('.aside-right .section-content'))
          } else {
            if($('.section-aside-right-mob .section-content').hasClass('section-content')) {
              $('.aside-right').append($('.section-aside-right-mob .section-content'))
            }
          }
        }

        tpCollection()
        $(window).resize( function() {
          tpCollection();
        })
      }
    }

    //* function hover "reaction-btn-like"
    {
      if ($('.reaction__wrap-link').length > 0) {
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
              element.addEventListener('mouseenter', () => {
                timer[1] = setTimeout(function() {
                  element.classList.add(classShow);
                  element.querySelector('.reaction-btn-like').classList.add(classShow);
                }, 500);
                clearInterval(timer[2]);
                element.classList.add(classHover)
              })
              element.addEventListener('mouseleave', () => {
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
    }

    //* modal event
    {
      $('.modal').on('shown.bs.modal', function () {
        setTimeout(function() {
          $('.admin-menu').addClass('filter');
          $('.header.header--dashboard').addClass('filter');
        }, 50);

      })
      $('.modal').on('hidden.bs.modal', function(){
        if($('.modal:visible').length > 0) {
          $('body').addClass('modal-open');
        } else {
          setTimeout(function() {
            $('.admin-menu').removeClass('filter');
            $('.header.header--dashboard').removeClass('filter');
          }, 50);
        }
      });
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {},
};
