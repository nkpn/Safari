const $body = $('.body');
const $headerBg = $('.header-background');

$(document).on('scroll', function(){
    var position = $body.scrollTop();
    var block_position = $('.header-background').offset().top;
    if (block_position > 275){
        $headerBg.addClass('black-background');
    } else{
        $headerBg.removeClass('black-background');
    }
})

$(document).ready(function () {
    if(!sessionStorage.getItem('firstVisit')) { 
        // show modal if it first time  
      $('.promo-header').show();  
      $headerBg.css('height', '148px')
    }    
    $('.promo-close').click(function() {
      sessionStorage.setItem('firstVisit',true); // used to store the state across refreshes.
      $('.promo-header').hide();
      $headerBg.css('height', '80px')
    });
  });