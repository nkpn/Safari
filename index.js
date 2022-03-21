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
const daysIconOpen = $('.days-arrow');
const daysIconClose = $('.days-arrow-close');

const CampOne = $('.camping-one');
const CampOneBottom = $('.camp-one-arr-bottom');
const CampOneUp = $('.camp-one-arr-up');
const CampOneList= $('.camp-one-list');

const CampThree = $('.camping-three');
const CampThreeBottom = $('.camp-three-arr-bottom');
const CampThreeUp = $('.camp-three-arr-up');
const CampThreeList= $('.camp-three-list');

const CampFour = $('.camping-four');
const CampFourBottom = $('.camp-four-arr-bottom');
const CampFourUp = $('.camp-four-arr-up');
const CampFourList= $('.camp-four-list');

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

daysIconOpen.click(()=>{
    daysIconOpen.parent().siblings().css("display", "block");
    daysIconOpen.hide();
    daysIconClose.show();
})

daysIconClose.click(()=>{
    daysIconOpen.parent().siblings().css("display", "none");
    daysIconClose.hide();
    daysIconOpen.show();
})

CampOne.click(()=>{
    CampOneBottom.toggle();
    CampOneUp.toggle();
    CampOneList.toggle();
})

CampThree.click(()=>{
    CampThreeBottom.toggle();
    CampThreeUp.toggle();
    CampThreeList.toggle();
})

CampFour.click(()=>{
    CampFourBottom.toggle();
    CampFourUp.toggle();
    CampFourList.toggle();
})