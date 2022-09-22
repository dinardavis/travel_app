import React from 'react'
import Photos from "./components/Photos"
import Weather from "./components/Weather"
import Flights from './components/Flights'


export default function App() {
  const [location, setLocation] = React.useState("oakland")
  const [searchParam, setSearchParam] = React.useState("oakland")
  
  function handleChange(event) {
    const value = event.target.value
    setLocation(value)
  }

  function updateLocation() {
    setSearchParam(location)
  }

  return (
    <div className="main-container">
      <div className="intro-container">
        <h1 className="intro-header"><span className='intro-span'>The (Travel)</span> Dreamcatcher</h1>
        <p className='intro-copy'>Enter the city that you've always wished to travel to, and get inspired to plan your next vacation.</p>
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

      <div className="photo-container">
        <Photos 
          searchParam={searchParam}
        />
      </div>

      <Weather 
        searchParam={searchParam}
      />

      <div className='quote-container'>
        Don't dream about it. Be about it.
      </div>

      <div className="flight-container">
        <Flights 
          searchParam={searchParam}
        />
      </div>
    </div>

  
  )
}