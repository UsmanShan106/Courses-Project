// Hide loader once everything is loaded
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("hidden");
  }
});

// Run scripts when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  
  // Sticky header effect after scrolling past hero section
  const header = document.querySelector("header");
  const hero = document.querySelector(".hero-section");
  if (header && hero) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= hero.offsetHeight - header.offsetHeight) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }

  // Swiper for courses carousel
  if (document.querySelector(".courses-swiper")) {
    new Swiper(".courses-swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 2000, disableOnInteraction: false },
      navigation: { nextEl: ".courses-next", prevEl: ".courses-prev" },
      pagination: { el: ".courses-pagination", clickable: true },
      breakpoints: {
        992: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        576: { slidesPerView: 1 },
      },
    });
  }

  // Swiper for experts carousel
  if (document.querySelector(".experts-swiper")) {
    new Swiper(".experts-swiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 2000, disableOnInteraction: false },
      breakpoints: {
        992: { slidesPerView: 4 },
        768: { slidesPerView: 3 },
        576: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
      },
    });
  }

  // Lightbox for video popup
  if (typeof GLightbox !== "undefined") {
    GLightbox({ selector: ".glightbox" });
  }

});
