$(document).ready(function () {
   
    $('.slider').slick({
      // centerMode: true,
      // centerPadding: '60px',
      slidesToShow: 1,
      slideToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  });