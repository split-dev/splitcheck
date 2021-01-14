import Sortable from 'sortablejs/modular/sortable.core.esm';
import PerfectScrollbar from 'perfect-scrollbar';

export default {
  init() {
      $('.images-box-loader ul li:not(.img)').on('click', function () {
        $('#add-files').modal('show')
        $('.nav-product').toggleClass('hide')
      })
      $('#add-files').on('hidden.bs.modal', function () {
        $('.nav-product').toggleClass('hide')
      })
      
      //select type product
      $('.product-type-box .select-before select').on('select2:select', function (e) {
        var data = e.params.data;
        $('.product-type-box__body >div').hide();
        $(data.id).show();
    });

    //drag and drop image

    if(document.getElementById('columns-sort-drag')) {
      var elTwo = document.getElementById('columns-sort-drag');
      /*eslint-disable no-unused-vars*/
      var sortableTwo = Sortable.create(elTwo, {
        filter: '.ignore-elements',
        swap: true,
        swapClass: 'highlighted',
        animation: 100,
        // Event when you move an item in the list or between lists
      onMove: function (evt) {
        if($(evt.related).hasClass('ignore-elements')) {
          return false;
        }
      },
      });
    }

    //add features
    $('.list-features__add').on('click', function (e) {
      e.preventDefault();
      $(this).prev().find($('.list-features__single')[0]).clone().appendTo($(this).prev())
  });

  //remove feature
    $('.list-features').on('click', '.list-features__remove', function (e) {
      e.preventDefault();
      let arrayEl = $(this).parent().parent().find('.list-features__single');
      if(arrayEl.length > 1) {
        $(this).parent().remove();
      }
  });

  //select-page
  {

     // * function for "Select" template user add image
     let arrayInfo = [
       {
         id: 1,
         idProduct: 252860580,
         date: '02.10.2020',
         text: 'Title here could be so much longer…',
         img: 'images/product/selet-page.png',
         selected: true,
       },
       {
         id: 2,
         idProduct: 252860580,
         date: '02.10.2020',
         text: 'Title here could be so much longer…',
         img: 'images/product/selet-page.png',
         selected: false,
       },
       {
         id: 3,
         idProduct: 252860580,
         date: '02.10.2020',
         text: 'Title here could be so much longer…',
         img: 'images/product/selet-page.png',
         selected: false,
       },
       {
         id: 4,
         idProduct: 252860580,
         date: '02.10.2020',
         text: 'Title here could be so much longer…',
         img: 'images/product/selet-page.png',
         selected: false,
       },
       {
         id: 5,
         idProduct: 252860580,
         date: '02.10.2020',
         text: 'Title here could be so much longer…',
         img: 'images/product/selet-page.png',
         selected: false,
       },
       {
         id: 6,
         idProduct: 252860580,
         date: '02.10.2020',
         text: 'Title here could be so much longer…',
         img: 'images/product/selet-page.png',
         selected: false,
       },
    ]

     if($('.form__single--select-page select[data-toggle="select-page"]')) {
      $('.form__single--select-page select[data-toggle="select-page"]').select2({
        minimumResultsForSearch: Infinity,
        maximumSelectionLength: 4,
        closeOnSelect: false,
        width: '100%',
        theme: 'select2-container select2-container--default static-select',
        data: arrayInfo,
        templateResult: function (state) {
          if (!state.id) {
            return state.text;
          }
          var $state = $(`
            <div class="profile-list">
              <div class="selected-item__photo"
                style="background-image: url('${state.img}');">
              </div>
              <div class="select-info">
                <strong>${state.text}</strong>
                <ul>
                <li>ID: <span>${state.idProduct}</span></li>
                <li><span>${state.date}</span></li>
                </ul>
              </div>
            </div>
          `);

          return $state;
        },
        dropdownParent: $('.page-box__select'),
      });
     }

     //select2 select
     $('[data-toggle="select-page"]').on('select2:select', function (e) {
      var data = e.params.data;
      let stateEl = `
            <div class="selected-item">
            <div class="selected-item__left">
                <div class="selected-item__photo"
                    style="background-image: url('${data.img}');">
                </div>
                <div class="selected-item__info">
                    <strong>${data.text}</strong>
                    <ul>
                        <li>ID: <span>${data.idProduct}</span></li>
                        <li><span>${data.date}</span></li>
                    </ul>
                </div>
            </div>
            <div class="selected-item__right">
                <a href="#" id="${data.id}">Delete</a>
            </div>
        </div>
        `;
      document.querySelector('.page-box__result').insertAdjacentHTML('beforeend', stateEl);
  });

  //select2 custom scroll product
  //scroll
  $('[data-toggle="select-page"]').on('select2:open', function (e) {
    function resizeLine() {
      psLine.update();
    }
    var psLine = new PerfectScrollbar('ul.select2-results__options');
    window.onresize = resizeLine;
    setTimeout( function() {
      resizeLine();
    }, 1)
  });
  //select2 remove checked element
  $('[data-toggle="select-page"]').on('select2:unselect', function (e) {
    var id = e.params.data.id;
    $('#' + id).parent().parent().remove();
  });
  //click create object
  $('.page-box__result').on('click', 'a', function(e) {
    e.preventDefault();
    let id = $(this).attr('id');
    let selectEl = $(this).parent().parent().parent().parent().find($('select'))
    let arraySelected = $(selectEl).val();
    delete arraySelected[arraySelected.indexOf(id)]
    $(selectEl).val(arraySelected).trigger('change');
    //remove item
    $(this).parent().parent().remove();
   })
  }
    
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};





