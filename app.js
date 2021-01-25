$(document).ready(function() {

  // Keep header hidden until init() runs
  $("#header").css({ opacity: 0 });

  // Run init()
  init();

  // Initialize animate on scroll library
  function init() {

    // Initialize animate on scroll library
    AOS.init();

    // Show body element
    $("body").removeClass("d-none").addClass("d-block");

    // Gradually fade in the header content
    $("#header").animate({
      opacity: 1,
      transition: ".75s"
    });

  }

  // Event Listener: Create smooth scroll 
  $('a[href^="#"').on("click", function(e) {
    e.preventDefault();

    // Capture the top point of the target section
    let target = $($(this).attr("href")).offset().top;

    // Glide from current position to top edge of target section
    $("body, html").animate({
      scrollTop: target
    }, 500);
  });

  // Event Listener: Navbar Hover
  $(".nav-link").on({
    mouseenter: function() {
      $(this).addClass("bg-green text-white");
    },
    mouseleave: function() {
      $(this).removeClass("bg-green text-white");
    }
  });

  // Event Listener: Button behavior
  $(".btn").on({
    mousedown: function() {
      $(this).css({
        transform: "translateY(0)",
        transform: "translateY(2px)"
      });
    },
    mouseup: function() {
      $(this).css({
        transform: "translateY(-2px)"
      });
    }
  });
});