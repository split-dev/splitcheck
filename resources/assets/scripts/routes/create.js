import Sortable from 'sortablejs/modular/sortable.core.esm';

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
      $('.product-type-box select').on('select2:select', function (e) {
        var data = e.params.data;
        $('.product-type-box__body div').hide();
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
    
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};





