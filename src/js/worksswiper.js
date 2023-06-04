var swiper = new Swiper(".mySwiper", {
  allowSlideNext: true,
  allowSlidePrev: true,
  spaceBetween: 80,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
// choose the all element
let links = document.querySelectorAll(".swiper-wrapper .swiper-slide");
let works = document.querySelectorAll(".wrap-works img");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("active-slider");
    });
    link.classList.add("active-slider");
    let linkValue = link.getAttribute("data-cat");
    works.forEach((work) => {
      work.style.display = "none";
      let workValue = work.getAttribute("data-category");
      if (linkValue === "all" || linkValue === workValue) {
        work.style.display = "flex";
      }
    });
  });
});

let spinner = document.querySelector(".spinner");
links.forEach((link) => {
  link.addEventListener("click", () => {
    spinner.classList.add("show-spinner");
  });
});
setInterval(() => {
  spinner.classList.remove("show-spinner");
}, 2000);
