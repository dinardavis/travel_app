import React from "react";

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY

export default function Weather() {
  const [weatherInfo, setWeatherInfo] = React.useState({
    name: "Oakland",
    main: {
      temp: 80,
      feels_like: 80
    }
  })

  React.useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=imperial&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => setWeatherInfo(data))
  }, [])

  return (
    <div className="weather-container">
      <p>Weather in {weatherInfo.name}</p>
      <p>Current Temp: {Math.round(weatherInfo.main.temp)} &deg;F</p>
      <p>Feels Like: {Math.round(weatherInfo.main.feels_like)} &deg;F</p>
      <img className="weather-icon" src="/imgs/sunny.png" alt="sunny day icon"/>
    </div>
  )
}