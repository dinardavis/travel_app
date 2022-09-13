import React from "react";

const FLIGHT_API_KEY = process.env.REACT_APP_FLIGHT_API_KEY

export default function Flights(props) {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${FLIGHT_API_KEY}`,
      'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
    }
  };
  
  React.useEffect(() => {
    fetch('https://skyscanner50.p.rapidapi.com/api/v1/searchFlights?origin=LOND&destination=NYCA&date=2022-09-19&returnDate=2022-09-21&adults=1&currency=USD&countryCode=US&market=en-US', options)
    .then(res => res.json())
    .then(data => console.log(data.data[0].price.amount))
    .catch(err => console.error(err));
  })

  return (
    <>
      <form>
        <div>
          <label>From:</label>
          <input className="city-input"></input>
          <label>To:</label>
          <input className="city-input"></input>
        </div>
        <div>
          <label>Depart:</label>
          <input type="date"></input>
          <label>Return:</label>
          <input type="date"></input>
        </div>
      </form>

      <a href="https://www.kayak.com/flights" className="flight-btn" to="route" target="_blank" rel="noopener noreferrer">Book It!</a>
    </>
  )
}