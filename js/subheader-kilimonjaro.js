$(document).ready(function () {
  $(document).on("scroll", onScroll);

  const $headerBg = $('.header-background');
  const $navSubmenu = $('.nav-submenu-safari, .nav-submenu-kilimonjaro, .nav-submenu-moshi, .nav-submenu-zanzibar, .nav-submenu-group');

  if(!sessionStorage.getItem('firstVisit')) {   
    $('.promo-header').show();  
    if ($(window).width() < 720) {
        $headerBg.css('height', '58px')
    } else {
        $headerBg.css('height', '88px')
        $navSubmenu.css('bottom','-75px')
    }
  }  
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $(".nav-submenu a").each(function () {
    var currLink = $(this);

    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".nav-submenu li a").removeClass("active-section");
      currLink.addClass("active-section");
    } else {
      currLink.removeClass("active-section");
    }
  });
}
