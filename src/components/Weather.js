import React from "react";


const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = React.useState(null)
  const [tempUnits, setTempUnits] = React.useState("imperial")

  React.useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.searchParam}&units=${tempUnits}&appid=${WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(data => setWeatherInfo(data))
  }, [props.searchParam, tempUnits])

  function toggleUnits() {
    if(tempUnits === "imperial") {
      return setTempUnits("metric")
    } else {
      return setTempUnits("imperial")
    }
  }

  const selectWeatherIcon = (data) => {
      let weatherIcon = ""
      if(data === "Clouds") {
        weatherIcon = "clouds.png";
      } else if(data === "Drizzle" || data === "Rain") {
        weatherIcon = "rain.png";
      } else if(data === "Thunderstorm") {
        weatherIcon = "lightening.png";
      } else if(data === "Snow") {
        weatherIcon = "snow.png";
      } else if(data === "Mist" || data === "Haze" || data === "Fog") {
        weatherIcon = "fog.png";
      } else if(data === "Smoke" || data === "Dust" || data === "Sand" || data === "Ash" || data === "Squall") {
        weatherIcon = "wind.png";
      } else if(data === "Tornado") {
        weatherIcon = "tornado.png"
      } else {
        weatherIcon = "sun.png";
      }
      return weatherIcon
  }

  return (
    <>
      {!weatherInfo ? 
        <p className="loading">Loading...</p> :
        <div className="weather-container">
          <img className="weather--icon" src={`/imgs/weather/${selectWeatherIcon(weatherInfo.weather[0].main)}`} alt={weatherInfo.weather[0].description} />
          <p className="weather--location">{weatherInfo.name}, {weatherInfo.sys.country}</p>
          <p className="weather--temp">{Math.round(weatherInfo.main.temp)} {tempUnits === "imperial" ? "°F" : "°C" }</p>
          <div className="weather--desc">{weatherInfo.weather[0].main} </div>
          <p className="weather--feels">Feels Like: {Math.round(weatherInfo.main.feels_like)} {tempUnits === "imperial" ? "°F" : "°C" }</p>
       
          {/* <p className="weather--time">{weatherInfo.dt}</p> */}
        
          <div className="weather-footer">
            <div className="temp-min-max"> 
              <p className="weather--high">High: {Math.round(weatherInfo.main.temp_max)} &deg;F</p> •
              <p className="weather--low">Low: {Math.round(weatherInfo.main.temp_min)} &deg;F</p>
            </div>
            <div className="toggle-temp-units" onClick={toggleUnits}>°F / °C</div>
            {/* <div className="temp-toggle">
              <p>&deg;F</p>
              <label className="switch" onClick={toggleUnits}>
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
              </label>
              <p>&deg;C</p>
            </div> */}
          </div>
        </div>
      }
    </>
  )
}