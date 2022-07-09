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
        // show modal if it first time  
      $('.promo-header').show();  
      if ($(window).width() < 720) {
        $headerBg.css('height', '108px')
    } else {
        $headerBg.css('height', '148px')
    }
    }    
    $('.promo-close').click(function() {
      sessionStorage.setItem('firstVisit',true); // used to store the state across refreshes.
      $('.promo-header').hide();
      if ($(window).width() < 720) {
        $headerBg.css('height', '60px')
      } else{
        $headerBg.css('height', '80px')
      }
    });
  });