let city_address = document.querySelector(".input_text");
city_address.value;

let humidity = document.querySelector("#humidity");
let temp_value_c = document.querySelector(".temp_value_c");
let climate = document.querySelector(".climate");
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
        
        let climate_string = (data.weather[0].main);
        climate.innerText = climate_string;
    }
    fetchWeather();
});
