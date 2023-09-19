import React from "react";

export default function Photos(props) {

  const [advisories, setAdvisories] = React.useState([])
    
  React.useEffect(() => {
    // fetch(`https://www.travel-advisory.info/api`)
    //   .then(res => res.json())
    //   .then(data => setAdvisories(data.data.AE))

    // console.log(advisories)
  }, [props.searchParam])

  return (
    <>
      {!advisories ? 
        <p className="loading">Loading...</p> :
        <section className="advisory-container light-mode">
        
          <p className="advisory--location">City Name, Country</p>
          <div className="temp-icon-container">
            <p className="weather--temp">Temp</p>
            <div className="weather--icon">Threat Icon</div>
          </div>
          <p className="weather--feels">Feels Like: </p>
          <div className="weather--desc">Threat description </div>
      
          {/* {fetchDataError && <div className="error-message">There was a problem retrieving the weather for that location</div>} */}
        
          <div className="weather-footer">
            <div className="temp-min-max"> 
              <p className="weather--high">High: </p> •
              <p className="weather--low">Low: </p>
            </div>
            <div className="toggle-temp-units">°F / °C</div>
          </div>
        </section>
      }
    </>
  )
}
