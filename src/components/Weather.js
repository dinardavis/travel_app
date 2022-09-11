import React from "react";
import Time from "./Time";

const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY

export default function Weather(props) {

  const [weatherInfo, setWeatherInfo] = React.useState({
    name: props.location,
    main: {
      temp: 80,
      feels_like: 80
    }
  })

  React.useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.searchParam}&units=imperial&appid=${WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(data => setWeatherInfo(data))
  }, [props.searchParam])


  return (
    <div className='weather-container'>
      <p className="weather-info">The Weather in {weatherInfo.name}</p>
      <p className="weather-info">Temp: {Math.round(weatherInfo.main.temp)} &deg;F</p>
      <p className="weather-info">Feels Like: {Math.round(weatherInfo.main.feels_like)} &deg;F</p>
      <Time 
        searchParam={props.searchParam}
      />
      <img className="weather-icon" src="/imgs/sunny.png" alt="sunny day icon"/>
    </div>
  )
}