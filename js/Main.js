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

// Transition for the name span

const textEl = document.getElementById("name");
let text = "Cristian Lopez";
let idx = 1; // Valor en el que se va a incrementar las letras
let transitionComplete = false; // Bandera para controlar si la transición ya ha ocurrido

writeText();

function writeText() {
  if (!transitionComplete) {
    textEl.innerText = text.slice(0, idx) + "|";
    idx++;

    if (idx > text.length) {
      transitionComplete = true; // Marcar la transición como completa
      textEl.innerText = text.substring(0, text.length);
    }

    setTimeout(writeText, 200);
  }
}

// AOS INITIATION
AOS.init();

// NAVBAR RESPONSIVE
const navbar = document.getElementById("offcanvasNavbar");
const body = document.getElementById("my-landing");
let links = document.querySelectorAll(".nav-link");
console.log(links);
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const backdrop = document.querySelector(".offcanvas-backdrop");
    console.log(backdrop);
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
      backdrop.classList.remove("show");
      body.style.overflow = "scroll";
    }
  });
});
