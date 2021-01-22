$(document).ready(function() {

  // Initialize animate on scroll library
  AOS.init({
    disable: false,
    startEvent: 'load',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease-in-out-quad',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
  });

  // Event Listener: Create smooth scroll 
  $('a[href^="#"').on("click", function(e) {
    e.preventDefault();

    let target = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: target
    }, 500);
  });
});