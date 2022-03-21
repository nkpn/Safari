console.log('Hi! If you need a website - please contact me : illinmikita@gmail.com , or by telegram : https://t.me/nk_pn')
$(document).ready(function(){
    $('.burger,.close-btn').click(function(event){
        $('.mobile-menu').toggleClass('active')
        
    })
    $('.carousel').slick();
})

const wildlifeIcon = $('.wildlife');
const wildlifeList = $('.wildlife-list');
const moshiIcon =$('.moshi');
const moshiList =$('.moshi-list');
const kilimanjaroIcon = $('.kilimanjaro');
const kilimanjaroList =$('.kilimanjaro-list');
const zanzibarIcon = $('.zanzibar');
const zanzibarList =$('.zanzibar-list');

wildlifeIcon.click(()=>{
    wildlifeList.toggle();
})

moshiIcon.click(()=>{
    moshiList.toggle();
})

kilimanjaroIcon.click(()=>{
   kilimanjaroList.toggle();
})

zanzibarIcon.click(()=>{
    zanzibarList.toggle();
})
