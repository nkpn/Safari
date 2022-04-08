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

const MidRangeTwo = $('.mid-range-two');
const MidRangeTwoBottom = $('.mid-range-two-arr-bottom');
const MidRangeTwoUp = $('.mid-range-two-arr-up');
const MidRangeTwoList = $('.mid-range-two-list');

const MidRangeThree = $('.mid-range-three');
const MidRangeThreeBottom = $('.mid-range-three-bottom');
const MidRangeThreeUp = $('.mid-range-three-up');
const MidRangeThreeList = $('.mid-range-three-list');

const MidRangeFour = $('.mid-range-four');
const MidRangeFourBottom = $('.mid-range-four-arr-bottom');
const MidRangeFourUp = $('.mid-range-four-arr-up');
const MidRangeFourList = $('.mid-range-four-list');

const MidRangeFive = $('.mid-range-five');
const MidRangeFiveBottom = $('.mid-range-five-arr-bottom');
const MidRangeFiveUp = $('.mid-range-five-arr-up');
const MidRangeFiveList = $('.mid-range-five-list');

const WildTwo = $('.wilderness-two');
const WildTwoBottom = $('.wilderness-two-arr-bottom');
const WildTwoUp = $('.wilderness-two-arr-up');
const WildTwoList = $('.wilderness-two-list');

const LuxLodgeTwo = $('.lux-lodge-two');
const LuxLodgeTwoBottom = $('.lux-lodge-two-arr-bottom');
const LuxLodgeTwoUp = $('.lux-lodge-two-arr-up');
const LuxLodgeTwoList = $('.lux-lodge-two-list');

const LuxLodgeThree = $('.lux-lodge-three');
const LuxLodgeThreeBottom = $('.lux-lodge-three-bottom');
const LuxLodgeThreeUp = $('.lux-lodge-three-up');
const LuxLodgeThreeList = $('.lux-lodge-three-list');

const LuxLodgeFour = $('.lux-lodge-four');
const LuxLodgeFourBottom = $('.lux-lodge-four-arr-bottom');
const LuxLodgeFourUp = $('.lux-lodge-four-arr-up');
const LuxLodgeFourList = $('.lux-lodge-four-list');

const LuxLodgeFive = $('.lux-lodge-five');
const LuxLodgeFiveBottom = $('.lux-lodge-five-arr-bottom');
const LuxLodgeFiveUp = $('.lux-lodge-five-arr-up');
const LuxLodgeFiveList = $('.lux-lodge-five-list');

const ClassLodgeThree = $('.class-lodge-three');
const ClassLodgeThreeBottom = $('.class-lodge-three-arr-bottom');
const ClassLodgeThreeUp = $('.class-lodge-three-arr-up');
const ClassLodgeThreeList = $('.class-lodge-three-list');

const ClassLodgeFour = $('.class-lodge-four');
const ClassLodgeFourBottom = $('.class-lodge-four-arr-bottom');
const ClassLodgeFourUp = $('.class-lodge-four-arr-up');
const ClassLodgeFourList = $('.class-lodge-four-list');


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

MidRangeTwo.click(()=>{
    MidRangeTwoBottom.toggle();
    MidRangeTwoUp.toggle();
    MidRangeTwoList.toggle();
})

MidRangeThree.click(()=>{
    MidRangeThreeBottom.toggle();
    MidRangeThreeUp.toggle();
    MidRangeThreeList.toggle();
})

MidRangeFour.click(()=>{
    MidRangeFourBottom.toggle();
    MidRangeFourUp.toggle();
    MidRangeFourList.toggle();
})

MidRangeFive.click(()=>{
    MidRangeFiveBottom.toggle();
    MidRangeFiveUp.toggle();
    MidRangeFiveList.toggle();
})

WildTwo.click(()=>{
    WildTwoBottom.toggle();
    WildTwoUp.toggle();
    WildTwoList.toggle();
})

LuxLodgeTwo.click(()=>{
    LuxLodgeTwoBottom.toggle();
    LuxLodgeTwoUp.toggle();
    LuxLodgeTwoList.toggle();
})

LuxLodgeThree.click(()=>{
    LuxLodgeThreeBottom.toggle();
    LuxLodgeThreeUp.toggle();
    LuxLodgeThreeList.toggle();
})

LuxLodgeFour.click(()=>{
    LuxLodgeFourBottom.toggle();
    LuxLodgeFourUp.toggle();
    LuxLodgeFourList.toggle();
})

LuxLodgeFive.click(()=>{
    LuxLodgeFiveBottom.toggle();
    LuxLodgeFiveUp.toggle();
    LuxLodgeFiveList.toggle();
})

ClassLodgeThree.click(()=>{
    ClassLodgeThreeBottom.toggle();
    ClassLodgeThreeUp.toggle();
    ClassLodgeThreeList.toggle();
})

ClassLodgeFour.click(()=>{
    ClassLodgeFourBottom.toggle();
    ClassLodgeFourUp.toggle();
    ClassLodgeFourList.toggle();
})