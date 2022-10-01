import React from "react";



// const FLIGHT_API_KEY = process.env.REACT_APP_FLIGHT_API_KEY

export default function Flights(props) {

  // React.useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': `${FLIGHT_API_KEY}`,
  //       'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
  //     }
  //   };

  //   fetch('https://skyscanner50.p.rapidapi.com/api/v1/searchFlights?origin=LOND&destination=NYCA&date=2022-09-19&returnDate=2022-09-21&adults=1&currency=USD&countryCode=US&market=en-US', options)
  //   .then(res => res.json())
  //   .then(data => console.log(data.data[0].price.amount))
  //   .catch(err => console.error(err));
  // }, [props.searchParam])

  return (
    <>
      <form className="flight-form">
          <div className="city-container">
            <label className="city-label">From:
              <input className="city-input"></input>
            </label>
            <span className="datepicker-toggle">
              <input type="date" className="datepicker-input"></input>
            </span>
          </div>
          
          <div className="city-container">
            <label className="city-label">To:
              <input 
                className="city-input"
                value={props.toAirportCode}
              />
            </label>
            
            <span className="datepicker-toggle">
              <input type="date" className="datepicker-input"/>
            </span>
          </div>
      </form>

      <div className="flight-cta">
        <div className="flight--price">
          <p className="flight--copy">Flight from Oakland to Bangkok starting at: </p>
          <p className="price-display">$1,499.99</p>
        </div>

        <a href="https://www.kayak.com/flights" className="flight-btn" to="route" target="_blank" rel="noopener noreferrer">Book It!</a>
      </div>
    </>
  )
}