var swiper = new Swiper(".mySwiper", {
  loop: true,
  lazy: true,
  effect: "fade",
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
});
// the activities-swiper
var swiper = new Swiper(" .mySwiper-activities", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
// the filter of the activities
let links = document.querySelectorAll(".categories li");
let activeCards = document.querySelectorAll(
  ".activities-content .swiper-slide"
);
let select = document.querySelector("select");

// get all the links

// add a change event listener to the select element
select.addEventListener("change", () => {
  const value = select.value;
  // remove the active class from all the links
  links.forEach((link) => {
    link.classList.remove("active-category");
  });
  activeCards.forEach((activeCard) => {
    activeCard.style.display = "none";
    let cardCategory = activeCard.getAttribute("data-category");
    if (value === "all" || value === cardCategory) {
      activeCard.style.display = "block";
    }
  });
  // add the active class to the link with the matching data-value
  const link = document.querySelector(`.categories li[data-cat="${value}"]`);
  link.classList.add("active-category");
});

// the part of the category of the activities
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((li) => {
      li.classList = "";
    });
    link.classList = "active-category";
    document.querySelector("select").value = link.getAttribute("data-cat");
    const liValue = link.getAttribute("data-cat"); // filter the categories
    activeCards.forEach((card) => {
      card.style.display = "none";
      if (liValue === card.getAttribute("data-category") || liValue === "all") {
        card.style.display = "flex";
      }
    });
  });
});
// making loop to the all images activities
let activeImages = document.querySelectorAll(".active-image img");
let imagesArray = Array.from(activeImages);
for (let i = 1; i < activeImages.length; i++) {
  activeImages[i - 1].src = `assets/images/active-${i}.jpg`;
}
// the services swiper
var swiper = new Swiper(".mySwiper-services", {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
// ==============================the works slider================================
let rightArrow = document.querySelector(".wrapper .right-arrow");
let leftArrow = document.querySelector(".wrapper .left-arrow");
let carousel = document.querySelector(".carousel");
let worksImages = document.querySelectorAll(".carousel img");

if (window.innerWidth > 1024) {
  rightAndLeftArrow(5);
} else if (window.innerWidth <= 1024) {
  rightAndLeftArrow(3);
} else if (window.innerWidth <= 600) {
  rightAndLeftArrow(2);
}
function rightAndLeftArrow(num) {
  let index = 0;
  let imgWidth = worksImages[index].clientWidth;
  rightArrow.addEventListener("click", () => {
    ++index;
    carousel.style.transform = `translate(${index * (imgWidth + 20)}px)`;
    if (index === worksImages.length - num) {
      rightArrow.classList.add("disabled");
    } else {
      leftArrow.classList.remove("disabled");
    }
  });
  leftArrow.addEventListener("click", () => {
    --index;
    carousel.style.transform = `translate(${index * (imgWidth + 20)}px)`;
    if (index === 0) {
      leftArrow.classList.add("disabled");
    } else {
      rightArrow.classList.remove("disabled");
    }
  });
  let counter = 0;
  setInterval(() => {
    ++counter;
    carousel.style.transform = `translate(${counter * (imgWidth + 20)}px)`;
    if (counter === worksImages.length - num + 1) {
      carousel.style.transform = `translate(${0 * (imgWidth + 20)}px)`;
      counter = 0;
    }
  }, 5000);
}
// part of the lightbox effect
let xMark = document.querySelector(".preview-box .preview-details .x-mark"),
  prevBox = document.querySelector(".preview-box"),
  carouselImages = document.querySelectorAll(".carousel img"),
  lightboxImage = document.querySelector(".preview-box .img-box img"),
  prevSlide = document.querySelector(".img-box .prev"),
  nextSlide = document.querySelector(".img-box .next"),
  currentImage = document.querySelector(".title .current-img");
let backdropFilter = document.querySelector(".preview-box .backdrop-filter");

document.querySelector(".title .total-imgs").innerHTML = carouselImages.length;

for (let i = 0; i < carouselImages.length; i++) {
  carouselImages[i].onclick = () => {
    backdropFilter.classList.add("show_filter");
    prevBox.classList.add("show");
    function previewImage() {
      currentImage.innerHTML = i + 1;
      let clickedImage = carouselImages[i].src;
      lightboxImage.src = clickedImage;
    }
    // pervious and next slide
    prevSlide.addEventListener("click", () => {
      nextSlide.style = "pointer-events:auto;opacity:1";
      i++;
      if (i >= carouselImages.length - 1) {
        previewImage();
        prevSlide.style = "pointer-events:none;opacity:.5";
      } else {
        previewImage();
      }
    });
    nextSlide.addEventListener("click", () => {
      prevSlide.style = "pointer-events:auto;opacity:1";
      i--;
      if (i == 0) {
        previewImage();
        nextSlide.style = "pointer-events:none;opacity:.5";
      } else {
        previewImage();
      }
    });
    previewImage();
  };
}
// removing prevBox
xMark.addEventListener("click", () => {
  prevBox.classList.remove("show");
  nextSlide.style = "pointer-events:auto;opacity:1";
  prevSlide.style = "pointer-events:auto;opacity:1";
});
backdropFilter.addEventListener("click", () => {
  prevBox.classList.remove("show");
  backdropFilter.classList.remove("show_filter");
  nextSlide.style = "pointer-events:auto;opacity:1";
  prevSlide.style = "pointer-events:auto;opacity:1";
});
// the swiper part of testimonials
var swiper = new Swiper(".testimonial-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
// the clients swiper
var swiper = new Swiper(".mySwiper-clients", {
  slidesPerView: 6,
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 6,
    },
  },
});

// increasing numbers during scroll
let numbers = document.querySelectorAll(".counter-element .num");
let experience = document.querySelector(".experiences");
let started = false;
function increaseNumbers(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10000 / goal);
}
window.onscroll = function () {
  if (window.scrollY >= experience.offsetTop - 300) {
    if (!started) {
      numbers.forEach((number) => increaseNumbers(number));
    }
    started = true;
  }
};
// updating the year of the rights
let year = document.querySelector(".footer-container-2 p");
year.textContent = `جميع الحقوق محفوظة @ لشركه بايونير  ${new Date().getFullYear()}`;
// the responsive part of the website
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active-nav");
});

let welcomeM = document.querySelector(".welcome-message"),
  welcomeAnchor = welcomeM.querySelector("a"),
  welcomeDelete = welcomeM.querySelector(".delete-welcome");

window.addEventListener("load", () => {
  showBodyLoader();
  setTimeout(() => {
    loaderBody.classList.remove("show-loader-body");
  }, 2000);
  if (localStorage.getItem("username") === "sharif") {
    welcomeM.classList.remove("show-message");
  } else {
    setTimeout(() => {
      welcomeM.classList.add("show-message");
    }, 10000);
    welcomeAnchor.addEventListener("click", () => {
      runMessage();
      showSpinner();
    });
    welcomeDelete.addEventListener("click", () => {
      runMessage();
    });
  }
});
function runMessage() {
  welcomeM.classList.remove("show-message");
  localStorage.setItem("username", "sharif");
}
/*=============making the effect of the spinner================================*/
//================ the loader of the body==================
let loaderBody = document.querySelector(".spinner-body");
function showBodyLoader() {
  loaderBody.classList.add("show-loader-body");
}

//
// the part of the spinner
let navLinks = document.querySelectorAll("nav a");
let spinner = document.querySelector(".spinner");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    showSpinner();
  });
});
function showSpinner() {
  spinner.classList.add("show-spinner");
}
setInterval(() => {
  spinner.classList.remove("show-spinner");
}, 1500);
// AOS.init();
// the arrow up
let arrow = document.querySelector(".arrow-up");
window.addEventListener("scroll", () => {
  arrow.classList.toggle("show_arrow", window.scrollY >= 600);
  arrow.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
// the cookie system
let cookie = document.querySelector(".cookie");
let btns = document.querySelectorAll(".btns button");
const cookiedrop = () => {
  // ? if document contains sharif-tarek then return and don't complete the code under this condition
  if (document.cookie.includes("sharif-tarek")) return;
  cookie.classList.add("sCookie");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      cookie.classList.remove("sCookie");
      if (btn.id == "accept") {
        document.cookie =
          "cookiecontent=sharif-tarek; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};
window.addEventListener("load", cookiedrop);
// the part of the hamburger menu links
let linksList = document.querySelectorAll(".hide_list li a");
linksList.forEach((link) => {
  link.addEventListener("click", () => {
    list.classList.remove("list_show");
    hamburger.classList.remove("animate_hamburger");
  });
});

// the part of the chatbot
document.querySelector(".message-chatbot").addEventListener("click", () => {
  document.querySelector(".chatbot").classList.toggle("show-chatbot");
});
