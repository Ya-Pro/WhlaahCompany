let signinEmail = document.getElementById("signin-email");
let signinPassword = document.getElementById("signin-password");
let signinConfirm = document.querySelector(".signin-confirm");
signinConfirm.addEventListener("click", (e) => {
  e.preventDefault();
  if (signinEmail.value == "" || signinPassword.value == "") {
    alert("من فضلك أدخل بياناتك كاملة");
  } else {
    if (
      signinEmail.value === localStorage.getItem("form-email") &&
      signinPassword.value === localStorage.getItem("form-password")
    ) {
      showSpinner();
      setTimeout(() => {
        location.href = "/index.html";
        showMessage();
      }, 2000);
    } else {
      alert("البريد الخاص بك أو كلمة المرور غير صحيحية");
    }
  }
});
let welcomeM = document.querySelector(".welcome-message");
function showMessage() {
  welcomeM.classList.add("show-spinner");
}
let spinner = document.querySelector(".spinner");
function showSpinner() {
  spinner.classList.add("show-spinner");
}
// submit.addEventListener("click", (e) => {
