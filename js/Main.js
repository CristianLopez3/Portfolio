/**
 * Slick library
 */

$(document).ready(function () {
  $(".autoplay-r").slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    arrows: false,
    focusOnSelect: true,
    easing: "ease",
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
  
    ],
  });
});
