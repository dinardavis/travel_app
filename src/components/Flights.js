import React from "react";


// const FLIGHT_API_KEY = process.env.REACT_APP_FLIGHT_API_KEY

export default function Flights(props) {
  const [flightPrice, setFlightPrice] = React.useState(599.99);
  const [departureCity, setDepartureCity] = React.useState("San Francisco");
  const [departureDate, setDepartureDate] = React.useState(() => {
    let today = new Date()
    today.setDate(today.getDate() + 7) //Initialize departureDate to one week from today
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`
  })

  const [returnDate, setReturnDate] = React.useState(() => {
    let today = new Date()
    today.setDate(today.getDate() + 14) //Initialize returnDate to one week after departureDate
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`
  })

  // SORT IMPORTED AIRPORT DATA BY CITY AND COUNTRY

  const citySort = props.filteredAirportData.sort(function(a, b) {
    let cityA = a.city.toUpperCase();
    let cityB = b.city.toUpperCase();
    return (cityA < cityB) ? -1 : (cityA > cityB) ? 1 : 0;
});

  const countrySort = citySort.sort(function(a, b) {
    let countryA = a.country.toUpperCase();
    let countryB = b.country.toUpperCase();
    return (countryA < countryB) ? -1 : (countryA > countryB) ? 1 : 0;
});

function getDepartureCity() {
  const departureCityInput = document.querySelector('.city-input')
  props.setFromAirportCode(departureCityInput.value)
  const matchingCityName = props.filteredAirportData.filter(airport => {
    const cityFromData = airport.iata_code
    return cityFromData.includes(departureCityInput.value)
    
  })
  setDepartureCity(matchingCityName[0].city)
}

function getDepatureDate(e) {
  setDepartureDate(e.target.value)
}

function getReturnDate(e) {
  setReturnDate(e.target.value)
}


  // React.useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': `${FLIGHT_API_KEY}`,
  //       'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
  //     }
  //   };

  //   fetch(`https://skyscanner50.p.rapidapi.com/api/v1/searchFlights?origin=${props.fromAirportCode}&destination=${props.toAirportCode}&date=${departureDate}&returnDate=${returnDate}&adults=1&currency=USD&countryCode=US&market=en-US`, options)
  //   .then(res => res.json())
  //   .then(data => setFlightPrice(data.data[0].price.amount || 599.99))
  //   .catch(err => console.error(err));
  // }, [props.searchParam, props.toAirportCode, props.fromAirportCode, returnDate, departureDate])


  // navigator.geolocation.getCurrentPosition(position => {
  //   console.log(position)
  // })

  return (
    <>
      <form className="flight-form">
          <div className="city-container">
            <label htmlFor="departure-city" className="city-label">From:
              <select
                name="from-city"
                id="departure-city"
                className="city-input"
                value={props.fromAirportCode}
                onChange={getDepartureCity}
              >
              {countrySort.map(data => {
                return <option className="from-input"
                          key={data.objectID}
                          value={data.iata_code}
                        >
                          {`${data.iata_code}  - ${data.city}, ${data.country}
                          `}
                        </option>
              })} 
              </select>
            </label>
            <div className="date-container">
              <label className="date-label">Depart On:       
                <input 
                  type="date" 
                  className="datepicker-input depart-picker"
                  value={departureDate}
                  onChange={getDepatureDate}
                >
                </input>
              </label>
            </div>
          </div>
          
          <div className="city-container">
            <label className="city-label">To:
              <input 
                className="city-input"
                value={props.toAirportCode}
                readOnly
              />
            </label>
            
            <div className="date-container">
              <label className="date-label">Return On:       
                <input 
                  type="date" 
                  className="datepicker-input return-picker"
                  value={returnDate}
                  onChange={getReturnDate}
                >
                </input>
              </label>
            </div>
          </div>
      </form>

      <div className="flight-cta">
        <div className="flight--price">
          <p className="flight--copy">{`Flight from ${departureCity}`}<br></br> to <span className="flight-to-city">{props.searchParam}</span> starting at: </p>
          <p className="price-display">{`$${flightPrice}`}</p>
        </div>

        <a href="https://www.kayak.com/flights" className="flight-btn" to="route" target="_blank" rel="noopener noreferrer">Go Book It!</a>
      </div>
    </>
  )
}