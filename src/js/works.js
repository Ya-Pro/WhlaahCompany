// updating the year of the rights
let year = document.querySelector(".footer-container-2 p");
year.textContent = `جميع الحقوق محفوظة @ لشركه بايونير  ${new Date().getFullYear()}`;
// the responsive part of the website
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active-nav");
});
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
