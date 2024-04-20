// date & time function
function clock() {
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let dayNames = ['Sun,', 'Mon,', 'Tue,', 'Wed,', 'Thr,', 'Fri,', 'Sat,'];

  let today = new Date();

  document.querySelector('.date').innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear());
  
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let session = h < 11 ? 'AM' : 'PM';
  
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  let AM_PM = document.querySelector("#AM_PM");
  if (h < 12) {
    AM_PM.innerHTML = 'AM';
  } else {
    AM_PM.innerHTML = 'PM';
  }

  if (h > 12) {
    h = h - 12;
  }

  document.querySelector('#hour').innerHTML = h + ':';
  document.querySelector('#minutes').innerHTML = m + ':';
  document.querySelector('#seconds').innerHTML = s;
}
let inter = setInterval(clock, 1000);

// signin & signup
let register_user = document.getElementById("register_user");
let signup_pop = document.getElementById("signup_pop");
let sign_in_up_close_btn = document.querySelector(".sign_in_up_close_btn");
let login_pop = document.querySelector("#login_pop");
let container = document.querySelector(".container");
let open_login_pop = document.getElementById("open_login_pop");
let register_btn = document.querySelector(".register_btn");
let close_login_popup = document.querySelector(".close_login_popup");
let open_signup_pop = document.querySelector("#open_signup_pop");

register_user.addEventListener("click", () => {
  container.style.display = "none";
  document.body.classList.add("full_screen_background"); //add class list
  signup_pop.style.display = "block";
})
sign_in_up_close_btn.addEventListener("click", () => {
  window.location.href = "/index.html";
})
close_login_popup.addEventListener("click", ()=> {
  window.location.href = "/index.html";
})
open_login_pop.addEventListener("click", () => {
  signup_pop.style.display = "none";
  login_pop.style.display = "block";
})
register_btn.addEventListener("click", () => {
  container.style.display = "none";
  document.body.classList.add("full_screen_background"); //add class list
  signup_pop.style.display = "block";
})
open_signup_pop.addEventListener("click", () => {
  container.style.display = "none";
  login_pop.style.display = "none";
  signup_pop.style.display = "block";
});

// greeting message start
const currHour = new Date().getHours();
let greeting;
if (currHour >= 4 && currHour < 12) {
    greeting = 'Good Morning';
} else if (currHour >= 12 && currHour < 17) {
    greeting = 'Good Afternoon';
} else if (currHour >= 17 && currHour < 21) {
    greeting = 'Good Evening';
} else {
    greeting = 'Good Night';
}
let greeting_message = document.querySelector("#greeting_message").innerHTML = greeting;
// greeting message end

