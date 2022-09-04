import React from 'react'
import Photos from "./components/Photos"
import Weather from "./components/Weather"


export default function App() {
  const [location, setLocation] = React.useState("oakland")
  const [searchParam, setSearchParam] = React.useState("oakland")
  
  function handleChange(event) {
    const value = event.target.value
    setLocation(value)
  }

  console.log(location)

  function updateLocation() {
    setSearchParam(location)
  }


  return (
    <div className="main-container">
      <div className="intro-container">
        <h1 className="main-header-one">Don't Dream About It.</h1>
        <h1 className="main-header-two">Be About It.</h1>
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

      <Weather 
        searchParam={searchParam}
      />

      <div className="photo-container">
        <Photos 
          location={location}
          searchParam={searchParam}
        />
      </div>

      <div className="flight-container">
        Flight Module Here
      </div>

    </div>

  
  )
}