import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Photos from "./components/Photos"
import Date from "./components/Date"
import Weather from "./components/Weather"
import Flights from "./components/Flights"
import TodoMain from './components/todo/TodoMain'
import { airportData } from "./components/airportData"
import { departureAirportData } from "./components/departureAirportData"
import ComingSoon from './components/ComingSoon'


export default function App() {
  const [location, setLocation] = React.useState(() => JSON.parse(localStorage.getItem("searchInput")) || "tokyo")
  const [searchParam, setSearchParam] = React.useState(() => JSON.parse(localStorage.getItem("searchInput")) || "tokyo")
  const [toAirportCode, setToAirportCode] = React.useState(() => JSON.parse(localStorage.getItem("currentAirportCode")) || "NRT")
  const [fromAirportCode, setFromAirportCode] = React.useState(() => JSON.parse(localStorage.getItem("fromAirport")) || "SFO")
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    localStorage.setItem("searchInput", JSON.stringify(location))
  }, [location])

  React.useEffect(() => {
    localStorage.setItem("currentAirportCode", JSON.stringify(toAirportCode))
  }, [toAirportCode])

  React.useEffect(() => {
    localStorage.setItem("fromAirport", JSON.stringify(fromAirportCode))
  }, [fromAirportCode])

  //Filter ARRIVAL cities with multiple airports to simplify airport data
  const uniqueCityAirports = [];
  const filteredAirportData = airportData.filter(airport => {
  const isDuplicate = uniqueCityAirports.includes(airport.city);
    
  if(!isDuplicate) {
      uniqueCityAirports.push(airport.city);
      return true;
    } 
    return false;
  });

  const cityNames = filteredAirportData.map(airport => {
    const cities = airport.city;
    return cities.toUpperCase();
  })

  function toggleIsVisible() {
    setIsVisible(prevVisible => !prevVisible)
  }

  if(isVisible) {
    setTimeout(() => {
      setIsVisible(false)
    }, 2000)
  }
  
  function handleChange(event) {
    const value = event.target.value
    setLocation(value)
  }

  function clearInput() {
    document.querySelector('.search-input').value = ""
  }

  // Select airport from user input

  function getMatchingAirport() {
    const matchingAirportCode = filteredAirportData.filter(airport => {
      const cityFromData = airport.city.toUpperCase()
      return cityFromData.includes(location.toUpperCase())
    })
    return matchingAirportCode
  }

  function getAirportCode() {
    const airport = getMatchingAirport()
    setToAirportCode(airport[0].iata_code) 
  }

  function updateLocation(e) {
    e.preventDefault()
    const introCopyError = document.querySelector('.intro-copy-error')
    if(cityNames.includes(location.toUpperCase())){
      introCopyError.style.visibility = 'hidden'
      setSearchParam(location)
      getAirportCode()
    } else {
      introCopyError.style.visibility = 'visible'
    } 
    clearInput()
  }

  //Filter DEPARTURE cities with multiple airports to simplify airport data
  const uniqueDepartureCityAirports = [];
  const filteredDepartureAirportData = departureAirportData.filter(airport => {
  const departureIsDuplicate = uniqueDepartureCityAirports.includes(airport.city);

  if(!departureIsDuplicate) {
      uniqueDepartureCityAirports.push(airport.city);
      return true;
    } 
    return false;
  });

    return (
    <>    
      <div className="main-container">
        <Navbar 
          searchParam={searchParam}
        />
        <Sidebar 
          toggleIsVisible={toggleIsVisible}
          comingSoon={ <ComingSoon isVisible={isVisible} /> }
        />
        <form className="section intro-container light-mode">
          <p className='intro-copy'>Enter the city's name that you've always wished to travel to, and get inspired to plan your next vacation!</p>
          <p className='intro-copy-error'>Please enter a valid city name, <br></br>or the nearest major airport location</p>
          <input
            type="text"
            placeholder="Where to?"
            className="search-input"
            value={location.userInput}
            onChange={handleChange}
          />
          <button
            className="search-btn"
            onClick={updateLocation}
          >
            Let's Go!
          </button>
        </form>
    
        <Photos searchParam={searchParam} />
        <Date />
        <Weather searchParam={searchParam} />
        <TodoMain />
        <section className="flight-container light-mode">
          <Flights 
            searchParam={searchParam}
            fromAirportCode={fromAirportCode}
            setFromAirportCode={setFromAirportCode}
            toAirportCode={toAirportCode}
            filteredAirportData={filteredAirportData}
            filteredDepartureAirportData={filteredDepartureAirportData}
          />
        </section>
      </div>
    </>
  )
}