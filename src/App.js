import React from 'react'
import Photos from "./components/Photos"
import Weather from "./components/Weather"
import Flights from "./components/Flights"
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

  console.log(airportCode)

  function updateLocation() {
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
    <div className="main-container">
      <div className="intro-container">
        <h1 className="intro-header"><span className='intro-span'>Travel</span> Dreamcatcher</h1>
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
      </div>

     
        <Photos 
          searchParam={searchParam}
        />


      <Weather 
        searchParam={searchParam}
      />

      <div className='quote-container'>
        You miss 100% of the flights you don't take.
      </div>

      <div className="flight-container">
        <Flights 
          searchParam={searchParam}
          toAirportCode={airportCode}
          getAirportCode={getAirportCode}
        />
      </div>
    </div>

  
  )
}