
/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import 'bootstrap/js/dist/modal';
import PerfectScrollbar from 'perfect-scrollbar';

export default {
  init() {


 //* sort-box selected element
 {
  $('.sort-box').on('click', 'a', function(e) {
    e.preventDefault();
    $('.sort-box li').removeClass('active');
    $(this).parent().addClass('active');
  })
}


//scroll horizontal
function resize() {
  ps.update();
}

if($('.tabs-blog').hasClass('tabs-blog')) {
  var ps = new PerfectScrollbar('.tabs-blog');
  window.onresize = resize;
}

  //store-link mobile scroll
  if($('.store-link').hasClass('store-link')) {
    if(window.innerWidth < 575) {
      let width = window.innerWidth;
      $('.store-link ul').css('width', width + 'px')
    }
  }

$('.toggle-btn').click(function() {
  $(this).prev().slideToggle(400);
  $(this).toggleClass('toggle-btn-reverte');
})

    if($('.blog-main__slider').hasClass('blog-main__slider')) {
      let blogSlider = new Swiper('.blog-main__slider.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
            nextEl: '.internal-card__slider .swiper-button-next',
            prevEl: '.internal-card__slider .swiper-button-prev',
          },
          breakpoints: {
            
              992: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
             
              320: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
            },
      });

      $('.blog-main__container .swiper-button-prev').click( function(e) {
        e.preventDefault();
        blogSlider.slidePrev()
      })
      $('.blog-main__container .swiper-button-next').click( function(e) {
        e.preventDefault();
        blogSlider.slideNext()
      });
  }
  

  if($('.slider-coupon__container').hasClass('slider-coupon__container')) {
    let couponSlider = new Swiper('.coupon__slider.swiper-container', {
        slidesPerView: '1',
        spaceBetween: 12,
       
        breakpoints: {
          
            991: {
              slidesPerView: 'auto',
              spaceBetween: 12,
            },
            767: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            320: {
              slidesPerView: 'auto',
              spaceBetween: 8,
            },
          },
    });

    $('.slider-coupon__container .swiper-button-prev').click( function(e) {
      e.preventDefault();
      couponSlider.slidePrev()
    })
    $('.slider-coupon__container .swiper-button-next').click( function(e) {
      e.preventDefault();
      couponSlider.slideNext()
    });
    
}



if($('.blog-main__mobile-section').hasClass('blog-main__mobile-section')) {
  let blogMobile = new Swiper('.blog-main__mobile-slider.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 16,
      navigation: {
        nextEl: '.internal-card__slider .swiper-button-next',
        prevEl: '.internal-card__slider .swiper-button-prev',
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
          575: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          320: {
            slidesPerView: 'auto',
            spaceBetween: 8,
          },
        },
  });

  $('.blog-main__mobile-section .swiper-button-prev').click( function(e) {
    e.preventDefault();
    blogMobile.slidePrev()
  });
  $('.blog-main__mobile-section .swiper-button-next').click( function(e) {
    e.preventDefault();
    blogMobile.slideNext()
  });
}



if($('.blog-post__recomended-slider').hasClass('blog-post__recomended-slider')) {
  let blogPost = new Swiper('.blog-post__recomended-slider.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 16,
      navigation: {
        nextEl: '.internal-card__slider .swiper-button-next',
        prevEl: '.internal-card__slider .swiper-button-prev',
      },
      breakpoints: {
        
          575: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          320: {
            slidesPerView: 'auto',
            spaceBetween: 8,
          },
        },
  });

  $('.blog-post__recomended-mobile .swiper-button-prev').click( function(e) {
    e.preventDefault();
    blogPost.slidePrev()
  })
  $('.blog-post__recomended-mobile .swiper-button-next').click( function(e) {
    e.preventDefault();
    blogPost.slideNext()
  });
}




    
    

  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};





