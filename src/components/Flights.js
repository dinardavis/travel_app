import React from "react";



const FLIGHT_API_KEY = process.env.REACT_APP_FLIGHT_API_KEY

export default function Flights(props) {
  const [flightPrice, setFlightPrice] = React.useState(599.99)

  React.useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${FLIGHT_API_KEY}`,
        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
      }
    };

    fetch(`https://skyscanner50.p.rapidapi.com/api/v1/searchFlights?origin=SFO&destination=${props.toAirportCode}&date=2022-11-19&returnDate=2022-11-21&adults=1&currency=USD&countryCode=US&market=en-US`, options)
    .then(res => res.json())
    .then(data => setFlightPrice(data.data[0].price.amount))
    .catch(err => console.error(err));
  }, [props.searchParam, props.toAirportCode])

  navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
  })

  return (
    <>
      <form className="flight-form">
          <div className="city-container">
            <label className="city-label">From:
              <input 
                className="city-input"
                defaultValue={'SFO'}
              />
            </label>
            {/* <span className="datepicker-toggle">
              <input type="date" className="datepicker-input"></input>
            </span> */}
          </div>
          
          <div className="city-container">
            <label className="city-label">To:
              <input 
                className="city-input"
                value={props.toAirportCode}
                readOnly
              />
            </label>
            
            {/* <span className="datepicker-toggle">
              <input type="date" className="datepicker-input"/>
            </span> */}
          </div>
      </form>

      <div className="flight-cta">
        <div className="flight--price">
          <p className="flight--copy">Flight from San Francisco<br></br> to <span className="flight-to-city">{props.searchParam}</span> starting at: </p>
          <p className="price-display">{`$${flightPrice}`}</p>
        </div>

        <a href="https://www.kayak.com/flights" className="flight-btn" to="route" target="_blank" rel="noopener noreferrer">Go Book It!</a>
      </div>
    </>
  )
}