const apiKey = "c16eac0ff43f3142aef074f12bdf738a";
const city = "Delhi"; // Corrected spelling of Bangalore
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



async function checkWeather() {

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=`${Math.floor(data.main.temp)}°C`;
}

checkWeather();
