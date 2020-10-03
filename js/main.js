$(document).ready(function() {
  $(".text-holder").css("opacity", 1);
});

$(window).bind('scroll', function() {
  let navHeight = $(this).height() - 500;
  if($(this).scrollTop() > navHeight) {
    $(".navigation-holder").addClass("fixed");
  } else {
    $(".navigation-holder").removeClass("fixed");
  }
});

$(".image").click(function($this) {
  if ( window.innerWidth >= 800 ) {
    let imgsrc = $(this).attr("src");
    if( $(".big-image-container").is(":visible") ) {
      $("#big-image").attr("src", imgsrc);
    } else {
      $("#big-image").attr("src", imgsrc);
      $(".big-image-container").slideToggle(500);
    }
  } 
});

$(".nav-toggle").click(function() {
  $(".right-side").toggleClass('active');
});

$("#closeButton").click(function() {
  $(".big-image-container").slideToggle(500);
});


$(".expand-button").click(function($this) {
  $button = $(this);
  if( $(this).attr("id") == "expandButton1") {
    $("#expandable1").slideToggle(500, function() {
      if($(this).is(":visible")) {
        $("body, html").animate({scrollTop: $(this).offset().top}, 1500);
      }
    });
  }
  if ( $(this).attr("id") == "expandButton2") {
    $("#expandable2").slideToggle(500, function() {
      if($(this).is(":visible")) {
        $("body, html").animate({scrollTop: $(this).offset().top}, 1500);
      }
    });
  }
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 500);
});
