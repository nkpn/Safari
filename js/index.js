console.log(
  "Hi! If you need a website - please contact me : illinmikita@gmail.com , or by telegram : https://t.me/nk_pn"
);

// const selectFirst = document.querySelector(".for-all-os");
// const selectSecond = document.querySelector(".for-windows");

// const allLang = ["en", "ua", "fr", "de"];

// //* push select value to the URL
// const changeURLLanguage = () => {
//   let lang = selectFirst.value;
//   location.href = window.location.pathname + "#" + lang;
//   location.reload();
// };

// const changeURLLanguageTwo = () => {
//   let lang = selectSecond.value;
//   location.href = window.location.pathname + "#" + lang;
//   location.reload();
// };

// selectFirst.addEventListener("change", changeURLLanguage);
// selectSecond.addEventListener("change", changeURLLanguageTwo);

// //* Change language
// const changeLanguage = () => {
//   let hash = window.location.hash;
//   hash = hash.substring(1);

//   if (!allLang.includes(hash)) {
//     location.href = window.location.pathname + "#en";
//     location.reload();
//   }
//   selectFirst.value = hash;
//   selectSecond.value = hash;

//   //* set site languate
//   document.documentElement.setAttribute("lang", hash);

//   //* change language
//   for (let key in langArrHome) {
//     let elem = document.querySelector(".lng-" + key);
//     if (elem) {
//       elem.innerHTML = langArrHome[key][hash];
//     }
//   }
// };

// changeLanguage();
//-------------------------------
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//---------------
//* Init slick slider
$(document).ready(function () {
  $(".burger,.close-btn").click(function (event) {
    $(".mobile-menu").toggleClass("active");
  });

  $(".carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 600,
    //
    appendArrows: $(".carousel-buttons"),
    prevArrow: $(".slider-left"),
    nextArrow: $(".slider-right"),
    responsive: [
      {
        breakpoint: 2048,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          //   variableWidth: true,
          //   autoplay: true,
          //     autoplaySpeed: 2000,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".carousel-two").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 600,
    appendArrows: $(".carousel-buttons-two"),
    prevArrow: $(".slider-left-two"),
    nextArrow: $(".slider-right-two"),
    responsive: [
      {
        breakpoint: 2048,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          //   variableWidth: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  $(".package-list-mobile-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    appendArrows: $(".package-list-buttons"),
    prevArrow: $(".slider-left"),
    nextArrow: $(".slider-right"),
  });
});

//-----------------
//* Hero images slick
$(".mobile-image-wrapper").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 600,
  appendArrows: $(".mobile-image-buttons"),
  prevArrow: $(".slider-left"),
  nextArrow: $(".slider-right"),
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
});

//--------------------------------------------------------
//* carousel card hover function
$(".carousel-card-zanzibar").hover(() => {
  $(".hide-zanzibar").toggle();
});
$(".carousel-card-zanzibar").focus(() => {
  $(".hide-zanzibar").toggle();
});

$(".carousel-card-wildlife").hover(() => {
  $(".hide-safari").toggle();
});
$(".carousel-card-wildlife").focus(() => {
  $(".hide-safari").toggle();
});

$(".carousel-card-moshi").hover(() => {
  $(".hide-moshi").toggle();
});
$(".carousel-card-moshi").focus(() => {
  $(".hide-moshi").toggle();
});

$(".carousel-card-kilimanjaro").hover(() => {
  $(".hide-kilimonjaro").toggle();
});
$(".carousel-card-kilimanjaro").focus(() => {
  $(".hide-kilimonjaro").toggle();
});

//--------------------------------------------------------
//* Header nav

$(".nav-link-safari").mouseenter(() => {
  $(".nav-submenu-safari").css("display", "flex");
});
$(".nav-link-safari").mouseleave(() => {
  $(".nav-submenu-safari").css("display", "none");
});
$(".nav-submenu-safari").mouseenter(() => {
  $(".nav-submenu-safari").css("display", "flex");
});
$(".nav-submenu-safari").mouseleave(() => {
  $(".nav-submenu-safari").css("display", "none");
});
//---------
$(".nav-link-kilimonjaro").mouseenter(() => {
  $(".nav-submenu-kilimonjaro").css("display", "flex");
});
$(".nav-link-kilimonjaro").mouseleave(() => {
  $(".nav-submenu-kilimonjaro").css("display", "none");
});
$(".nav-submenu-kilimonjaro").mouseenter(() => {
  $(".nav-submenu-kilimonjaro").css("display", "flex");
});
$(".nav-submenu-kilimonjaro").mouseleave(() => {
  $(".nav-submenu-kilimonjaro").css("display", "none");
});
//----------
$(".nav-link-moshi").mouseenter(() => {
  $(".nav-submenu-moshi").css("display", "flex");
});
$(".nav-link-moshi").mouseleave(() => {
  $(".nav-submenu-moshi").css("display", "none");
});
$(".nav-submenu-moshi").mouseenter(() => {
  $(".nav-submenu-moshi").css("display", "flex");
});
$(".nav-submenu-moshi").mouseleave(() => {
  $(".nav-submenu-moshi").css("display", "none");
});
//-----
$(".nav-link-zanzibar").mouseenter(() => {
  $(".nav-submenu-zanzibar").css("display", "flex");
});
$(".nav-link-zanzibar").mouseleave(() => {
  $(".nav-submenu-zanzibar").css("display", "none");
});
$(".nav-submenu-zanzibar").mouseenter(() => {
  $(".nav-submenu-zanzibar").css("display", "flex");
});
$(".nav-submenu-zanzibar").mouseleave(() => {
  $(".nav-submenu-zanzibar").css("display", "none");
});
//-----

//* version 1 - zalipaet
// $('.nav-link-safari').hover(()=>{
//     $('.nav-submenu-safari').toggleClass('flex');
//  })

//  $('.nav-link-kilimonjaro').hover(()=>{
//     $('.nav-submenu-kilimonjaro').toggleClass('flex');
//  })

//  $('.nav-link-moshi').hover(()=>{
//     $('.nav-submenu-moshi').toggleClass('flex');
//  })

//  $('.nav-link-zanzibar').hover(()=>{
//     $('.nav-submenu-zanzibar').toggleClass('flex');
//  })
//---------------------------------------------------
if (navigator.userAgent.indexOf("Win") != -1) {
  $(".for-windows").css("display", "block");
  $(".for-all-os").css("display", "none");
} else {
  $(".for-all-os").css("display", "block");
}

//---------------------------------------------------------
//* DOM elements for dropdown items

const wildlifeIcon = $(".wildlife");
const wildlifeList = $(".wildlife-list");
const moshiIcon = $(".moshi");
const moshiList = $(".moshi-list");
const kilimanjaroIcon = $(".kilimanjaro");
const kilimanjaroList = $(".kilimanjaro-list");
const zanzibarIcon = $(".zanzibar");
const zanzibarList = $(".zanzibar-list");
const daysIconOpen = $(".days-arrow");
const daysIconClose = $(".days-arrow-close");

const CampOne = $(".camping-one");
const CampOneBottom = $(".camp-one-arr-bottom");
const CampOneUp = $(".camp-one-arr-up");
const CampOneList = $(".camp-one-list");

const CampThree = $(".camping-three");
const CampThreeBottom = $(".camp-three-arr-bottom");
const CampThreeUp = $(".camp-three-arr-up");
const CampThreeList = $(".camp-three-list");

const CampFour = $(".camping-four");
const CampFourBottom = $(".camp-four-arr-bottom");
const CampFourUp = $(".camp-four-arr-up");
const CampFourList = $(".camp-four-list");

const MidRangeTwo = $(".mid-range-two");
const MidRangeTwoBottom = $(".mid-range-two-arr-bottom");
const MidRangeTwoUp = $(".mid-range-two-arr-up");
const MidRangeTwoList = $(".mid-range-two-list");

const MidRangeThree = $(".mid-range-three");
const MidRangeThreeBottom = $(".mid-range-three-bottom");
const MidRangeThreeUp = $(".mid-range-three-up");
const MidRangeThreeList = $(".mid-range-three-list");

const MidRangeFour = $(".mid-range-four");
const MidRangeFourBottom = $(".mid-range-four-arr-bottom");
const MidRangeFourUp = $(".mid-range-four-arr-up");
const MidRangeFourList = $(".mid-range-four-list");

const MidRangeFive = $(".mid-range-five");
const MidRangeFiveBottom = $(".mid-range-five-arr-bottom");
const MidRangeFiveUp = $(".mid-range-five-arr-up");
const MidRangeFiveList = $(".mid-range-five-list");

const WildTwo = $(".wilderness-two");
const WildTwoBottom = $(".wilderness-two-arr-bottom");
const WildTwoUp = $(".wilderness-two-arr-up");
const WildTwoList = $(".wilderness-two-list");

const LuxLodgeTwo = $(".lux-lodge-two");
const LuxLodgeTwoBottom = $(".lux-lodge-two-arr-bottom");
const LuxLodgeTwoUp = $(".lux-lodge-two-arr-up");
const LuxLodgeTwoList = $(".lux-lodge-two-list");

const LuxLodgeThree = $(".lux-lodge-three");
const LuxLodgeThreeBottom = $(".lux-lodge-three-bottom");
const LuxLodgeThreeUp = $(".lux-lodge-three-up");
const LuxLodgeThreeList = $(".lux-lodge-three-list");

const LuxLodgeFour = $(".lux-lodge-four");
const LuxLodgeFourBottom = $(".lux-lodge-four-arr-bottom");
const LuxLodgeFourUp = $(".lux-lodge-four-arr-up");
const LuxLodgeFourList = $(".lux-lodge-four-list");

const LuxLodgeFive = $(".lux-lodge-five");
const LuxLodgeFiveBottom = $(".lux-lodge-five-arr-bottom");
const LuxLodgeFiveUp = $(".lux-lodge-five-arr-up");
const LuxLodgeFiveList = $(".lux-lodge-five-list");

const ClassLodgeThree = $(".class-lodge-three");
const ClassLodgeThreeBottom = $(".class-lodge-three-arr-bottom");
const ClassLodgeThreeUp = $(".class-lodge-three-arr-up");
const ClassLodgeThreeList = $(".class-lodge-three-list");

const ClassLodgeFour = $(".class-lodge-four");
const ClassLodgeFourBottom = $(".class-lodge-four-arr-bottom");
const ClassLodgeFourUp = $(".class-lodge-four-arr-up");
const ClassLodgeFourList = $(".class-lodge-four-list");

//* Dropdown functions

wildlifeIcon.click(() => {
  wildlifeList.toggle();
});

moshiIcon.click(() => {
  moshiList.toggle();
});

kilimanjaroIcon.click(() => {
  kilimanjaroList.toggle();
});

zanzibarIcon.click(() => {
  zanzibarList.toggle();
});

daysIconOpen.click(() => {
  daysIconOpen.parent().siblings().css("display", "block");
  daysIconOpen.hide();
  daysIconClose.show();
});

daysIconClose.click(() => {
  daysIconOpen.parent().siblings().css("display", "none");
  daysIconClose.hide();
  daysIconOpen.show();
});

CampOne.click(() => {
  CampOneBottom.toggle();
  CampOneUp.toggle();
  CampOneList.toggle();
});

CampThree.click(() => {
  CampThreeBottom.toggle();
  CampThreeUp.toggle();
  CampThreeList.toggle();
});

CampFour.click(() => {
  CampFourBottom.toggle();
  CampFourUp.toggle();
  CampFourList.toggle();
});

MidRangeTwo.click(() => {
  MidRangeTwoBottom.toggle();
  MidRangeTwoUp.toggle();
  MidRangeTwoList.toggle();
});

MidRangeThree.click(() => {
  MidRangeThreeBottom.toggle();
  MidRangeThreeUp.toggle();
  MidRangeThreeList.toggle();
});

MidRangeFour.click(() => {
  MidRangeFourBottom.toggle();
  MidRangeFourUp.toggle();
  MidRangeFourList.toggle();
});

MidRangeFive.click(() => {
  MidRangeFiveBottom.toggle();
  MidRangeFiveUp.toggle();
  MidRangeFiveList.toggle();
});

WildTwo.click(() => {
  WildTwoBottom.toggle();
  WildTwoUp.toggle();
  WildTwoList.toggle();
});

LuxLodgeTwo.click(() => {
  LuxLodgeTwoBottom.toggle();
  LuxLodgeTwoUp.toggle();
  LuxLodgeTwoList.toggle();
});

LuxLodgeThree.click(() => {
  LuxLodgeThreeBottom.toggle();
  LuxLodgeThreeUp.toggle();
  LuxLodgeThreeList.toggle();
});

LuxLodgeFour.click(() => {
  LuxLodgeFourBottom.toggle();
  LuxLodgeFourUp.toggle();
  LuxLodgeFourList.toggle();
});

LuxLodgeFive.click(() => {
  LuxLodgeFiveBottom.toggle();
  LuxLodgeFiveUp.toggle();
  LuxLodgeFiveList.toggle();
});

ClassLodgeThree.click(() => {
  ClassLodgeThreeBottom.toggle();
  ClassLodgeThreeUp.toggle();
  ClassLodgeThreeList.toggle();
});

ClassLodgeFour.click(() => {
  ClassLodgeFourBottom.toggle();
  ClassLodgeFourUp.toggle();
  ClassLodgeFourList.toggle();
});

//* KIlimonjaro page

const MaranguWrapper = $(".marangu-wrapper");
const MaranguPriceBottom = $(".marangu-price-arr-bottom");
const MaranguPriceUp = $(".marangu-price-arr-up");
const MaranguTable = $(".marangu-table");

MaranguWrapper.click(() => {
  MaranguPriceBottom.toggle();
  MaranguPriceUp.toggle();
  MaranguTable.toggle();
});

const Marangu = $(".marangu");
const MaranguBottom = $(".marangu-arr-bottom");
const MaranguUp = $(".marangu-arr-up");
const MaranguList = $(".marangu-list");

Marangu.click(() => {
  MaranguBottom.toggle();
  MaranguUp.toggle();
  MaranguList.toggle();
});

//---------------------------------
//* Machame

const MachameWrapper = $(".machame-wrapper");
const MachamePriceBottom = $(".machame-price-arr-bottom");
const MachamePriceUp = $(".machame-price-arr-up");
const MachameTable = $(".machame-table");

MachameWrapper.click(() => {
  MachamePriceBottom.toggle();
  MachamePriceUp.toggle();
  MachameTable.toggle();
});

const Machame = $(".machame");
const MachameBottom = $(".machame-arr-bottom");
const MachameUp = $(".machame-arr-up");
const MachameList = $(".machame-list");

Machame.click(() => {
  MachameBottom.toggle();
  MachameUp.toggle();
  MachameList.toggle();
});

//-----------------------------------
//* Rongai
const RongaiWrapper = $(".rongai-wrapper");
const RongaiPriceBottom = $(".rongai-price-arr-bottom");
const RongaiPriceUp = $(".rongai-price-arr-up");
const RongaiTable = $(".rongai-table");

RongaiWrapper.click(() => {
  RongaiPriceBottom.toggle();
  RongaiPriceUp.toggle();
  RongaiTable.toggle();
});

const Rongai = $(".rongai");
const RongaiBottom = $(".rongai-arr-bottom");
const RongaiUp = $(".rongai-arr-up");
const RongaiList = $(".rongai-list");

Rongai.click(() => {
  RongaiBottom.toggle();
  RongaiUp.toggle();
  RongaiList.toggle();
});

//-----------------------------------
//* Lemosho
const LemoshoWrapper = $(".lemosho-wrapper");
const LemoshoPriceBottom = $(".lemosho-price-arr-bottom");
const LemoshoPriceUp = $(".lemosho-price-arr-up");
const LemoshoTable = $(".lemosho-table");

LemoshoWrapper.click(() => {
  LemoshoPriceBottom.toggle();
  LemoshoPriceUp.toggle();
  LemoshoTable.toggle();
});

const Lemosho = $(".lemosho");
const LemoshoBottom = $(".lemosho-arr-bottom");
const LemoshoUp = $(".lemosho-arr-up");
const LemoshoList = $(".lemosho-list");

Lemosho.click(() => {
  LemoshoBottom.toggle();
  LemoshoUp.toggle();
  LemoshoList.toggle();
});

//-----------------------------------
//* Umbwe
const UmbweWrapper = $(".umbwe-wrapper");
const UmbwePriceBottom = $(".umbwe-price-arr-bottom");
const UmbwePriceUp = $(".umbwe-price-arr-up");
const UmbweTable = $(".umbwe-table");

UmbweWrapper.click(() => {
  UmbwePriceBottom.toggle();
  UmbwePriceUp.toggle();
  UmbweTable.toggle();
});

const Umbwe = $(".umbwe");
const UmbweBottom = $(".umbwe-arr-bottom");
const UmbweUp = $(".umbwe-arr-up");
const UmbweList = $(".umbwe-list");

Umbwe.click(() => {
  UmbweBottom.toggle();
  UmbweUp.toggle();
  UmbweList.toggle();
});

//-----------------------------------
//* Norther Circuit
const NortherCircuitWrapper = $(".northern-circuit-wrapper");
const NortherCircuitPriceBottom = $(".northern-circuit-price-arr-bottom");
const NortherCircuitPriceUp = $(".northern-circuit-price-arr-up");
const NortherCircuitTable = $(".northern-circuit-table");

NortherCircuitWrapper.click(() => {
  NortherCircuitPriceBottom.toggle();
  NortherCircuitPriceUp.toggle();
  NortherCircuitTable.toggle();
});

const NortherCircuit = $(".northern-circuit");
const NortherCircuitBottom = $(".northern-circuit-arr-bottom");
const NortherCircuitUp = $(".northern-circuit-arr-up");
const NortherCircuitList = $(".northern-circuit-list");

NortherCircuit.click(() => {
  NortherCircuitBottom.toggle();
  NortherCircuitUp.toggle();
  NortherCircuitList.toggle();
});

//-----------------------------------
//* Norther Circuit
const MeruWrapper = $(".meru-wrapper");
const MeruPriceBottom = $(".meru-price-arr-bottom");
const MeruPriceUp = $(".meru-price-arr-up");
const MeruTable = $(".meru-table");

MeruWrapper.click(() => {
  MeruPriceBottom.toggle();
  MeruPriceUp.toggle();
  MeruTable.toggle();
});

const Meru = $(".meru");
const MeruBottom = $(".meru-arr-bottom");
const MeruUp = $(".meru-arr-up");
const MeruList = $(".meru-list");

Meru.click(() => {
  MeruBottom.toggle();
  MeruUp.toggle();
  MeruList.toggle();
});

//-------------------------------------
//* Helpful hints
const HintsOne = $(".hints-one");
const HintsOneBottom = $(".hints-one-bottom");
const HintsOneUp = $(".hints-one-up");
const HintsOneList = $(".hints-one-list");

HintsOne.click(() => {
  HintsOneBottom.toggle();
  HintsOneUp.toggle();
  HintsOneList.toggle();
});

const HintsTwo = $(".hints-two");
const HintsTwoBottom = $(".hints-two-bottom");
const HintsTwoUp = $(".hints-two-up");
const HintsTwoList = $(".hints-two-list");

HintsTwo.click(() => {
  HintsTwoBottom.toggle();
  HintsTwoUp.toggle();
  HintsTwoList.toggle();
});

const HintsThree = $(".hints-three");
const HintsThreeBottom = $(".hints-three-bottom");
const HintsThreeUp = $(".hints-three-up");
const HintsThreeList = $(".hints-three-list");

HintsThree.click(() => {
  HintsThreeBottom.toggle();
  HintsThreeUp.toggle();
  HintsThreeList.toggle();
});

const HintsFour = $(".hints-four");
const HintsFourBottom = $(".hints-four-bottom");
const HintsFourUp = $(".hints-four-up");
const HintsFourList = $(".hints-four-list");

HintsFour.click(() => {
  HintsFourBottom.toggle();
  HintsFourUp.toggle();
  HintsFourList.toggle();
});

const HintsFive = $(".hints-five");
const HintsFiveBottom = $(".hints-five-bottom");
const HintsFiveUp = $(".hints-five-up");
const HintsFiveList = $(".hints-five-list");

HintsFive.click(() => {
  HintsFiveBottom.toggle();
  HintsFiveUp.toggle();
  HintsFiveList.toggle();
});

const HintsSix = $(".hints-six");
const HintsSixBottom = $(".hints-six-bottom");
const HintsSixUp = $(".hints-six-up");
const HintsSixList = $(".hints-six-list");

HintsSix.click(() => {
  HintsSixBottom.toggle();
  HintsSixUp.toggle();
  HintsSixList.toggle();
});

const HintsSeven = $(".hints-seven");
const HintsSevenBottom = $(".hints-seven-bottom");
const HintsSevenUp = $(".hints-seven-up");
const HintsSevenList = $(".hints-seven-list");

HintsSeven.click(() => {
  HintsSevenBottom.toggle();
  HintsSevenUp.toggle();
  HintsSevenList.toggle();
});

const HintsEight = $(".hints-eight");
const HintsEightBottom = $(".hints-eight-bottom");
const HintsEightUp = $(".hints-eight-up");
const HintsEightList = $(".hints-eight-list");

HintsEight.click(() => {
  HintsEightBottom.toggle();
  HintsEightUp.toggle();
  HintsEightList.toggle();
});

//---------------------------------------
//* Scroll Reveal
// ScrollReveal().reveal('img');
//-----------------------------------------------
//* submit button disable
let inputName = $("#name");
let inputEmail = $("#email");
let inputMessage = $("#message");
let submitButton = document.querySelector(".submit-button");
submitButton.disabled = true;

inputName.on("change", stateHandle);
inputMessage.on("change", stateHandle);
inputEmail.on("change", stateHandle);

function stateHandle() {
  if (
    inputName.val() != "" &&
    inputEmail.val() != "" &&
    inputMessage.val() != ""
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
