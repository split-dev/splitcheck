/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';
import 'ion-rangeslider/js/ion.rangeSlider';
import PerfectScrollbar from 'perfect-scrollbar';

export default {
  init() {
    let swiperCard;

    //* option for swiper
    const optionForSwiperProduct = {
      slidesPerView: 'auto',
      spaceBetween: 16,
      setWrapperSize: true,
      navigation: {
        nextEl: '.internal-card__slider .swiper-button-next',
        prevEl: '.internal-card__slider .swiper-button-prev',
      },
      breakpoints: {
        767: {
          spaceBetween: 8,
        },
      },
    }

    //* swiper init
    if($('.internal-card__slider')) {
      swiperCard = new Swiper('.internal-card__slider.swiper-container', optionForSwiperProduct);
    }

    //scroll horizontal
    function resize() {
      ps.update();
    }

    if($('.store-link')) {
      var ps = new PerfectScrollbar('.store-link ul');
      window.onresize = resize;
    }

    function setColor() {
      let color = $('.select-color--store').attr('data-color')
      $('.profile-face__background').css('background-color', color)
      $('.profile-face__photo').css('background-color', color)
      $('.shop-category__single').css('background-color', color)
      $('.internal-card__name--store').css('color', color)
    }
    //color picker
    if($('.select-color--store')) {
      setColor();
    }

    //store post
    $('.gift-shopping__header').click( function() {
      $(this).toggleClass('open');
      $(this).next().slideToggle();
    })
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
