// the spinner
let spinner = document.querySelector(".spinner");
let username = document.getElementById("signup-name");
let phoneNumber = document.getElementById("signup-phone");
let email = document.getElementById("signup-email");
let password = document.getElementById("signup-password");
let checkBox = document.querySelector(".checkbox");
let signin = document.querySelector(".signup-confirm");
signin.addEventListener("click", () => {
  if (
    username.value === "" ||
    phoneNumber.value === "" ||
    email.value === "" ||
    password.value === ""
  ) {
    window.alert(" من فضلك أدخل جميع الببيانات كاملة ");
  } else {
    localStorage.setItem("form-email", email.value);
    localStorage.setItem("form-password", password.value);
    showSpinner();
    setTimeout(() => {
      window.location.href = "signin.html";
    }, 3000);
  }
});

function showSpinner() {
  spinner.classList.add("show-spinner");
}
// setInterval(() => {
//   spinner.classList.remove("show-spinner");
// }, 4000);
