const city = document.getElementById("userlocation");

async function currentWeather(city) {
    
    const weatherImage = document.querySelector(".weather-temp img");
    
    const apiKey = "1f3958f6f03d358e58a42acf3f912ac4";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    
    if (response.status === 404 || city === "") {
         
        document.querySelector(".invalid-city").style.display = "block";

        document.querySelector(".weather-status").style.display = "none";
        
        document.querySelector(".weather-temp").style.display = "none";
        } 
    else {

        const body = await response.json();
        
        const {name, main, wind, weather} = body;
        
        document.querySelector(".weather-temp p").innerHTML = `${Math.round(main.temp)}<span>°C</span>`;
        
        document.querySelector(".city-name").innerHTML = name;
        
        document.querySelector(".humidity__measure").innerHTML = main.humidity;
        
        document.querySelector(".wind__speed").innerHTML = wind.speed;
        
        if (weather[0].main === "Clouds") {

            weatherImage.src="/assets/images/cloud.png";
       
        } else if (weather[0].main === "Rain") {
            weatherImage.src="/assets/images/rain.png";
            
        } else if (weather[0].main === "Snow") {
            weatherImage.src="/assets/images/snow.png";
       
        } else if (weather[0].main === "Mist") {
            weatherImage.src="/assets/images/mist.png";
       
        } else if (weather[0].main === "Clear") {
            weatherImage.src="/assets/images/clear.png";
       
        } else if (weather[0].main === "Drizzle") {
            weatherImage.src="/assets/images/drizzle.png";
        } 
        
        document.querySelector(".invalid-city").style.display = "none";
        
        document.querySelector(".weather-status").style.display = "flex";
        
        document.querySelector(".weather-temp").style.display = "inline-block";
    }

    
}

document.querySelector(".current-temp").addEventListener("click", ()=>{
    currentWeather(city.value);
});