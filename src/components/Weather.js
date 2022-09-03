import React from "react";

export default function Weather() {
  const [weatherInfo, setWeatherInfo] = React.useState({
    location: "Oakland"
  })


  React.useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=imperial&appid=62e289c67390749d08fb4ac8f53988fb")
      .then(res => res.json())
      .then(data => setWeatherInfo(data))
  }, [])


  

  console.log(weatherInfo.weather[0].description)

  return (
    <div className="weather-container">
      <p>Weather in {weatherInfo.name}</p>
      <p>Current Temp: {Math.round(weatherInfo.main.temp)} &deg;F</p>
      <p>Feels Like: {Math.round(weatherInfo.main.feels_like)} &deg;F</p>
      <img className="weather-icon" src="/imgs/sunny.png" alt="sunny day icon"/>
    </div>
  
  )
}