$(document).ready(function() {

  // Project data object
  const projects = [
    {
      title: "Foo Bar Finder",
      img: {
        url: "./assets/img/foo-bar-finder.png",
        alt: "Foo Bar Finder application screen shot"
      },
      technologies: "UI / UX / Bootstrap / JavaScript / jQuery",
      description: "The Foo Bar Finder is a double-sided application that allows a user to search for and save new recipes and cocktails by keyword or category. The application uses alternate color schemes for the recipe and drink sides."
    },
    {
      title: "Workday Scheduler",
      img: {
        url: "./assets/img/workday-scheduler.png",
        alt: "Workday Scheduler application screen shot"
      },
      technologies: "JavaScript / jQuery / Moment.js",
      description: "The Workday Scheduler is a dynamic planner application allowing users to input and save events spanning from 9 AM to 5 PM. Timeblocks auto-update their background colors in relation to the current time."
    },
    {
      title: "Weather Dashboard",
      img: {
        url: "./assets/img/weather-dashboard.png",
        alt: "Weather Dashboard application screen shot"
      },
      technologies: "UI / UX / Bootstrap / JavaScript / jQuery / Day.js",
      description: "The Weather Dashboard allows users to input a city and retrieve both the city's current weather and five-day forecast. The application also saves previously search cities for quick and easy future reference."
    }
  ];

  // Global variables
  let currentIndex = 0;
  let lastIndex = projects.length;

  init();

  // Initialize animate on scroll library
  function init() {

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

    showProject();
  }

  // Display project data
  function showProject() {
    $("#project-title").text(projects[currentIndex].title);
    $("#project-img").attr("src", projects[currentIndex].img.url);
    $("#project-img").attr("alt", projects[currentIndex].img.alt);
    $("#project-tech").text(projects[currentIndex].technologies);
    $("#project-description").text(projects[currentIndex].description);
  }

  // Event Listener: Create smooth scroll 
  $('a[href^="#"').on("click", function(e) {
    e.preventDefault();

    let target = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: target
    }, 500);
  });

  // Event Listener: Press button down
  $(".btn").on("mousedown", function() {
    $(this).css({
      transform: "translateY(3px)"
    })
  });

  // Event Listener: Let go of button
  $(".btn").on("mouseup", function() {
    $(this).css({
      transform: "translateY(-3px)"
    });
  });
});