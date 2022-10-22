import React from 'react'
import Navbar from './components/Navbar'
import Photos from "./components/Photos"
import Date from "./components/Date"
import Weather from "./components/Weather"
import Flights from "./components/Flights"
import Map from "./components/Map"
import { airportData } from "./components/airportData"


export default function App() {
  const [location, setLocation] = React.useState("barcelona")
  const [searchParam, setSearchParam] = React.useState("barcelona")
  const [airportCode, setAirportCode] = React.useState('BCN')

  
  //Filter cities with multiple airports to simplify airport data
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
  
  function handleChange(event) {
    const value = event.target.value
    setLocation(value)
  }

  function getMatchingAirport() {
    const matchingAirportCode = filteredAirportData.filter(airport => {
      const cityFromData = airport.city.toUpperCase()
      return cityFromData.includes(location.toUpperCase())
    })
    return matchingAirportCode
  }

  function getAirportCode() {
    const airport = getMatchingAirport()
    setAirportCode(airport[0].iata_code) 
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
  }

  return (
    <>    
   
      <div className="main-container">
      <Navbar />
        <form className="section intro-container light-mode">
          <p className='intro-copy'>Enter the city that you've always wished to travel to, and get inspired to plan your next vacation!</p>
          <p className='intro-copy-error'>Please enter a valid city name or nearest airport hub</p>
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

      
        <Photos 
          searchParam={searchParam}
        />

        <Date />

        <Weather 
          searchParam={searchParam}
        />

        <section className='quote-container light-mode'>
          You miss 100% of the flights you don't take.
        </section>

        <section className="flight-container light-mode">
          <Flights 
            searchParam={searchParam}
            toAirportCode={airportCode}
            getAirportCode={getAirportCode}
          />
        </section>

        <Map />
      </div>
    </>
  )
}