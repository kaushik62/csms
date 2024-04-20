let user_login = document.querySelector(".user_login");
let signup_pop = document.querySelector("#signup_pop");
let login_pop = document.querySelector("#login_pop");
let sign_in_up_close_btn = document.querySelector(".sign_in_up_close_btn");

user_login.addEventListener("click", () => {
  signup_pop.style.display = "block";
  document.getElementById("main_container").style.display = "none";
});
sign_in_up_close_btn.addEventListener("click", () => {
  signup_pop.style.display = "none";
  login_pop.style.display = "none";
  document.getElementById("main_container").style.display = "block";
});
let open_login_pop = document.getElementById("open_login_pop");
open_login_pop.addEventListener("click", () => {
  signup_pop.style.display = "none";
  login_pop.style.display = "block";
});
let login_close = document.getElementById("login_close");
login_close.addEventListener("click", () => {
  login_pop.style.display = "none";
  document.getElementById("main_container").style.display = "block";
});
let open_signup_pop = document.getElementById("open_signup_pop");
open_signup_pop.addEventListener("click", () => {
  login_pop.style.display = "none";
  signup_pop.style.display = "block";
});
// remove text from form
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signup_btn = document.getElementById("signup");
signup_btn.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    username.value = "";
    email.value = "";
    password.value = "";
  }, 2000);
});
