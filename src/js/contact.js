// updating the year of the rights
let year = document.querySelector(".footer-container-2 p");
year.textContent = `جميع الحقوق محفوظة @ لشركه بايونير  ${new Date().getFullYear()}`;
// the responsive part of the website
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active-nav");
});
