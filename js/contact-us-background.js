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
