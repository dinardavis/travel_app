import React from "react";

const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY

export default function Weather(props) {

  const [weatherInfo, setWeatherInfo] = React.useState({
    name: props.searchParam,
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

  console.log(weatherInfo)

  return (
    <div className='weather-container'>
      <p className="weather-info">Currently in: {weatherInfo.name}, {weatherInfo.sys.country}</p>
      <p className="weather-info">{Math.round(weatherInfo.main.temp)} &deg;F</p>
      <p className="weather-info">{weatherInfo.weather[0].main} </p>
      <p className="weather-info">Feels Like: {Math.round(weatherInfo.main.feels_like)} &deg;F</p>

      <div className="temp-min-max">
        <p className="weather-info">Low: {Math.round(weatherInfo.main.temp_min)} &deg;F</p>
        <p className="weather-info">High: {Math.round(weatherInfo.main.temp_max)} &deg;F</p>
      </div>
     
      <p className="weather-info">{weatherInfo.dt}</p>
      <img className="weather-icon" src="/imgs/sunny.png" alt="sunny day icon"/>
    </div>
  )
}