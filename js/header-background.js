const $body = $('.body');
const $headerBg = $('.header-background');

$(document).on('scroll', function(){
    var position = $body.scrollTop();
    var block_position = $('.header-background').offset().top;

    console.log(block_position)
    // if (position > block_position){
        if (block_position > 790){
        $headerBg.addClass('black-background');
    } else{
        $headerBg.removeClass('black-background');
    }
})