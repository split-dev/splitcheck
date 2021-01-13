export default {
  init() {
      $('.images-box-loader ul li').click( function () {
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
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};





