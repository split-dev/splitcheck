// import SimpleScrollbar from 'simple-scrollbar';
import PerfectScrollbar from 'perfect-scrollbar';

export default {
  init() {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const adminMenu = document.querySelector('.admin-menu');

    //* function for "adminMenu" position when scrolling, and calculate height
    if (adminMenu) {
      const adminMenuNav = adminMenu.querySelector('.admin-menu__nav');
      const adminMenuList = adminMenu.querySelector('.admin-menu__list');
      const scrollDiv = adminMenu.querySelector('.admin-menu__wrap');

      const checkAside = (param, any) => {
        if (param) {
          if (window.matchMedia('(max-width: 991px)').matches) {
            param.style.top = '';
          } else {
            param.style.top = any + 'px';
          }
        }
      }

      const resize = (elem) => {
        elem.update();
      }

      const elScroll = new PerfectScrollbar(scrollDiv);

      window.onresize = resize(elScroll);

      const positionSt = () => {
        const maxPadding = 94;
        const minPadding = 10;

        body.addEventListener('wheel', function(e) {
          let meNow = false;

          if (!window.matchMedia('(max-width: 991px)').matches) {
            // console.dir(e)
            if (e.path) {
              // console.log(e.target)
              for (let i = 0; i < e.path.length - 3; i++) {
                const element = e.path[i];
                if (element) {
                  if (element.classList.contains('admin-menu')) {
                    // console.log(this)
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
                if (scrollDiv.offsetParent) { //* height calculation
                  newHeightDiv = (window.innerHeight - header.clientHeight - 20); // 20 - correction because of the shadows
                  newHeightadminMenuList = adminMenuList.offsetHeight;
                  if (scrollDiv.offsetParent.classList.contains('admin-menu__nav')) {
                    if ( (newHeightDiv - 80) > newHeightadminMenuList) {
                      scrollDiv.style.height = '';
                    } else {
                    if (scrollDiv.offsetParent.classList.contains('js-no-header')) {
                        scrollDiv.style.height = (newHeightDiv - 15 ) + 'px'; // writing the height
                      } else {
                        scrollDiv.style.height = (newHeightDiv - 100) + 'px'; // writing the height // 120 - correction
                      }
                    }
                  }
                }
              }
            }
          }
        })

        adminMenu.addEventListener('mouseenter', function() {
          let meNow = false;

          if (adminMenu.offsetHeight > (window.innerHeight - header.clientHeight - 30)) {
            setTimeout(() => {
              heightWhat();
            }, 100);
          }
          if (!meNow) return false
        })
      }

      const heightWhat = () => {
        // const modalHeaderHeight = 110; // default height Header in modal
        let newHeightDiv = 0;
        let newHeightadminMenuList = adminMenuList.offsetHeight;

        resize(elScroll);
        // SimpleScrollbar.initEl(scrollDiv);
        if (scrollDiv.offsetParent) { //* height calculation "aside-right" and "aside-left"
          newHeightDiv = (window.innerHeight - header.clientHeight - 20); // 20 - correction because of the shadows
          newHeightadminMenuList = adminMenuList.offsetHeight;

          if (scrollDiv.offsetParent.classList.contains('admin-menu__nav')) {
            if (window.matchMedia('(max-width: 991px)').matches) {
              scrollDiv.style.height = (newHeightDiv) + 'px'; // writing the height // 120 - correction
              // if (window.matchMedia('(max-width: 767px)').matches) {
              //   scrollDiv.style.height = (newHeightDiv - 30) + 'px'; // writing the height // 120 - correction
              // }
            } else {
              if ( (newHeightDiv - 80) > newHeightadminMenuList) {
                scrollDiv.style.height = '';
              } else {
                if (scrollDiv.offsetParent.classList.contains('js-no-header')) {
                  scrollDiv.style.height = (newHeightDiv - 15 ) + 'px'; // writing the height
                } else {
                  scrollDiv.style.height = (newHeightDiv - 100) + 'px'; // writing the height // 120 - correction
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

    //clone new box .add-field
    $('.checked-box >label').on('click', function() {
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

    //scroll nav
    if($('.nav-product').hasClass('nav-product')) {
      var positions = [],
	currentActive = null,
	links = $('.scroll-to');

  $('.anchor').each(function(){
    positions.push({
      top: $(this).position().top - 100,
      a: links.filter('[href="#'+$(this).attr('id')+'"]'),
    });
  });

  positions = positions.reverse();

  $(window).on('scroll',function() {
    var winTop = $(window).scrollTop();
    for(var i = 0; i < positions.length; i++){
      if(positions[i].top < winTop){
        if(currentActive !== i){
          currentActive = i;
          links.removeClass('active');
          positions[i].a.addClass('active');
        }
        break;
      }
    }
  });
    }

  //click scroll
  $('.nav-product').on( 'click', 'a', function(){
    var el = $(this);
    var dest = el.attr('href');
    if(dest !== undefined && dest !== '') {
        $('html, body').animate({scrollTop: $(dest).offset().top}, 400);
    }
    return false;
});

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

    //sort-box selected element
    $('.sort-box').on('click', 'a', function(e) {
      e.preventDefault();
      $('.sort-box li').removeClass('active');
      $(this).parent().addClass('active');
    })

    //scroll select 
    if($('ul.select-list').hasClass('select-list')) {
      var psLine = new PerfectScrollbar('ul.select-list');
      psLine.update();
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {},
};
