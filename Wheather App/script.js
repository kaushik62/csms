let sign_out_btn = document.getElementById("sign_out_btn");

sign_out_btn.addEventListener("click", () => {
  window.location.href = '/index.html'
})

let city_address = document.querySelector(".input_text");
city_address.value;

let humidity = document.querySelector("#humidity");
let visibility = document.querySelector("#visibility");
let wind = document.querySelector("#wind");

let temp_value_c = document.querySelector(".temp_value_c");


let search_icon = document.querySelector(".search_icon");
search_icon.addEventListener("click", () => {
  document.querySelector(".loc_para").innerText = city_address.value;

  const apiKey = `a7fa340b3c6fa5d53264ad85b06f486b`;

  let city = city_address.value;

  async function fetchWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
      
    let temp_value = (data.main.temp);
    temp_value_c.innerText = temp_value;

    humidity.innerText = data.main.humidity;
    wind.innerText = data.wind.speed;
    visibility.innerText = data.visibility;
  }
  fetchWeather();
});