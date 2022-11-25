  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    const $headerBg = $('.header-background');
    const $navSubmenu = $('.nav-submenu-safari, .nav-submenu-kilimonjaro, .nav-submenu-moshi, .nav-submenu-zanzibar, .nav-submenu-group');

    if(!sessionStorage.getItem('firstVisit')) {   
        $('.promo-header').show();  
        if ($(window).width() < 720) {
            $headerBg.css('height', '108px')
            $navSubmenu.css('bottom','-142px')
        } else {
            $headerBg.css('height', '148px')
            $navSubmenu.css('bottom','-142px')
        }
       
      }    // show modal if it first time
      $('.promo-close').click(function() {
        sessionStorage.setItem('firstVisit',true); // used to store the state across refreshes.
        $('.promo-header').hide();
        if ($(window).width() < 720) {
          $headerBg.css('height', '60px')
          $navSubmenu.css('bottom','-142px')
        } else{
          $headerBg.css('height', '80px')
          $navSubmenu.css('bottom','-74px')
        }
       
      });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav-submenu a').each(function () {
        var currLink = $(this);
        
        var refElement = $(currLink.attr("href"));
        
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-submenu li a').removeClass("active-section");
            currLink.addClass("active-section");
        }
        else{
            currLink.removeClass("active-section");
        }
    });
}