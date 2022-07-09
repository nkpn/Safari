const $body = $('.body');
const $headerBg = $('.header-background');

$(document).on('scroll', function(){
    var position = $body.scrollTop();
    var block_position = $('.header-background').offset().top;
    if (block_position > 790){
        $headerBg.addClass('black-background');
    } else{
        $headerBg.removeClass('black-background');
    }
})

//------------ Session storage function
$(document).ready(function () {
    if(!sessionStorage.getItem('firstVisit')) {   
      $('.promo-header').show();  
    }    // show modal if it first time
    $('.promo-close').click(function() {
      sessionStorage.setItem('firstVisit',true); // used to store the state across refreshes.
      $('.promo-header').hide()
    });
  });