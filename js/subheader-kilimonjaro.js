$(document).ready(function () {
  $(document).on("scroll", onScroll);
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
