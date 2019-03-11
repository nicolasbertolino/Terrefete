// Scroll to anchor

$(window).on("load", function() {
  $(".smoothscroll").on("click", function(e) {
    var target = this.hash;
    var $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        1200,
        "easeInOutCubic"
      );
    e.preventDefault();
  });
});

// Scroll Top

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $(".scroll-top").addClass("scroll-top-visible");
  } else {
    $(".scroll-top").removeClass("scroll-top-visible");
  }
});

$('a[href="#top"]').on("click", function() {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    "slow"
  );
  return false;
});

// Tabs

$(function() {
  $("#tabs").tabs();
});

// Modal

$(window).on('load', function() {
  $(".iziModal").iziModal({
      width: 800,
      radius: 0,
      padding: 50,
      top: 20,
      bottom: 20,
      overlayColor: 'rgba(0, 0, 0, 0.5)',
      borderBottom: false,
      transitionIn: 'fadeInDown',
      transitionOut: 'fadeOutUp'
  });
});

// Parallax

$(".jarallax").each(function() {
  if ($(this).attr("data-gradient") == 1) {
    $(this).append('<div class="overlay-background overlay-gradient"></div>');
    $(this)
      .find(".overlay-background")
      .css("opacity", $(this).attr("data-overlay"));
  } else {
    $(this).append('<div class="overlay-background"></div>');
    $(this)
      .find(".overlay-background")
      .css("opacity", $(this).attr("data-overlay"));
  }
});

$("[data-background]").each(function() {
  $(this).css(
    "background-image",
    "url(" + $(this).attr("data-background") + ")"
  );
});

$("[data-mY]").each(function() {
  $(this).css("margin-top", $(this).attr("data-mY"));
});

$("[data-color]").each(function() {
  $(this).css("color", $(this).attr("data-color"));
});
