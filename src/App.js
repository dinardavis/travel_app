import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Photos from "./components/Photos";
import Advisory from "./components/Advisory";
import Date from "./components/Date";
import Weather from "./components/Weather";
import Flights from "./components/Flights";
import TodoMain from "./components/todo/TodoMain";
import Currency from "./components/Currency";
import { airportData } from "./dataFiles/airportData";
import { departureAirportData } from "./dataFiles/departureAirportData";
import { countryCodeData } from "./dataFiles/countryCodes";
import ComingSoon from "./components/ComingSoon";
import PTOtracker from "./components/PTOtracker";
import Budget from "./components/Budget";

export default function App() {
  const [location, setLocation] = React.useState(
    () => JSON.parse(localStorage.getItem("searchInput")) || "tokyo"
  );
  const [searchParam, setSearchParam] = React.useState(
    () => JSON.parse(localStorage.getItem("searchInput")) || "tokyo"
  );
  const [toAirportCode, setToAirportCode] = React.useState(
    () => JSON.parse(localStorage.getItem("currentAirportCode")) || "NRT"
  );
  const [toCountryCode, setToCountryCode] = React.useState(
    () => JSON.parse(localStorage.getItem("countryCode")) || "JP"
  );
  const [fromAirportCode, setFromAirportCode] = React.useState(
    () => JSON.parse(localStorage.getItem("fromAirport")) || "SFO"
  );
  const [isVisible, setIsVisible] = React.useState(false);

  //Widget state to show/hide widget & sidebar icon

  const [showFlightWidget, setShowFlightWidget] = React.useState(true);

  function toggleFlightWidget() {
    setShowFlightWidget((prevState) => !prevState);
  }

  const [showAdvisoryWidget, setShowAdvisoryWidget] = React.useState(true);

  function toggleAdvisoryWidget() {
    setShowAdvisoryWidget((prevState) => !prevState);
  }

  const [showCalendarWidget, setShowCalendarWidget] = React.useState(false);

  function toggleCalendarWidget() {
    setShowCalendarWidget((prevState) => !prevState);
  }

  const [showTodoWidget, setShowTodoWidget] = React.useState(false);

  function toggleTodoWidget() {
    setShowTodoWidget((prevState) => !prevState);
  }

  const [showWeatherWidget, setShowWeatherWidget] = React.useState(true);

  function toggleWeatherWidget() {
    setShowWeatherWidget((prevState) => !prevState);
  }

  const [showCurrencyWidget, setShowCurrencyWidget] = React.useState(false);

  function toggleCurrencyWidget() {
    setShowCurrencyWidget((prevState) => !prevState);
  }

  const [showPTOWidget, setShowPTOWidget] = React.useState(false);

  function togglePTOWidget() {
    setShowPTOWidget((prevState) => !prevState);
  }

  const [showBudgetWidget, setShowBudgetWidget] = React.useState(true);

  function toggleBudgetWidget() {
    setShowBudgetWidget((prevState) => !prevState);
  }

  //Local storage assignment for airport codes and location

  React.useEffect(() => {
    localStorage.setItem("searchInput", JSON.stringify(location));
  }, [location]);

  React.useEffect(() => {
    localStorage.setItem("currentAirportCode", JSON.stringify(toAirportCode));
  }, [toAirportCode]);

  React.useEffect(() => {
    localStorage.setItem("fromAirport", JSON.stringify(fromAirportCode));
  }, [fromAirportCode]);

  React.useEffect(() => {
    localStorage.setItem("countryCode", JSON.stringify(toCountryCode));
  }, [toCountryCode]);

  //Filter ARRIVAL cities with multiple airports to simplify airport data
  const uniqueCityAirports = [];
  const filteredAirportData = airportData.filter((airport) => {
    const isDuplicate = uniqueCityAirports.includes(airport.city);

    if (!isDuplicate) {
      uniqueCityAirports.push(airport.city);
      return true;
    }
    return false;
  });

  const cityNames = filteredAirportData.map((airport) => {
    const cities = airport.city;
    return cities.toUpperCase();
  });

  function toggleIsVisible() {
    setIsVisible((prevVisible) => !prevVisible);
  }

  if (isVisible) {
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  }

  function handleChange(event) {
    const value = event.target.value;
    setLocation(value);
  }

  function clearInput() {
    document.querySelector(".search-input").value = "";
  }

  // Select airport from user input

  function getMatchingAirport() {
    const matchingAirportCode = filteredAirportData.filter((airport) => {
      const cityFromData = airport.city.toUpperCase();
      return cityFromData.includes(location.toUpperCase());
    });
    return matchingAirportCode;
  }

  function getAirportCode() {
    const airport = getMatchingAirport();
    setToAirportCode(airport[0].iata_code);
  }

  function updateLocation(e) {
    e.preventDefault();
    const introCopyError = document.querySelector(".intro-copy-error");
    if (cityNames.includes(location.toUpperCase())) {
      introCopyError.style.visibility = "hidden";
      setSearchParam(location);
      getAirportCode();
      getCountryCode(airportData, "city", location);
    } else {
      introCopyError.style.visibility = "visible";
    }
    clearInput();
  }

  //Filter DEPARTURE cities with multiple airports to simplify airport data
  const uniqueDepartureCityAirports = [];
  const filteredDepartureAirportData = departureAirportData.filter(
    (airport) => {
      const departureIsDuplicate = uniqueDepartureCityAirports.includes(
        airport.city
      );

      if (!departureIsDuplicate) {
        uniqueDepartureCityAirports.push(airport.city);
        return true;
      }
      return false;
    }
  );

  //Retrieve country code from user input city

  function getCountryCode(arr, propName, propValue) {
    let cityObj = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][propName].toUpperCase() === propValue.toUpperCase()) {
        cityObj = arr[i];
      }
    }

    for (let i = 0; i < countryCodeData.length; i++) {
      if (
        cityObj.country.toUpperCase() ===
        countryCodeData[i]["Name"].toUpperCase()
      ) {
        setToCountryCode(countryCodeData[i]["Code"]);
      }
    }
  }

  return (
    <>
      <div className="main-container">
        <Navbar searchParam={searchParam} />
        <Sidebar
          toggleFlightWidget={toggleFlightWidget}
          showFlightWidget={showFlightWidget}
          toggleAdvisoryWidget={toggleAdvisoryWidget}
          showAdvisoryWidget={showAdvisoryWidget}
          toggleCalendarWidget={toggleCalendarWidget}
          showCalendarWidget={showCalendarWidget}
          toggleTodoWidget={toggleTodoWidget}
          showTodoWidget={showTodoWidget}
          toggleWeatherWidget={toggleWeatherWidget}
          showWeatherWidget={showWeatherWidget}
          toggleCurrencyWidget={toggleCurrencyWidget}
          showCurrencyWidget={showCurrencyWidget}
          togglePTOWidget={togglePTOWidget}
          showPTOWidget={showPTOWidget}
          toggleBudgetWidget={toggleBudgetWidget}
          showBudgetWidget={showBudgetWidget}
          toggleIsVisible={toggleIsVisible}
          comingSoon={<ComingSoon isVisible={isVisible} />}
        />
        <div className="widget-display">
          <form className="section intro-container light-mode">
            <p className="intro-copy">
              Enter the city's name that you've always wished to travel to, and
              get inspired to plan your next vacation!
            </p>
            <p className="intro-copy-error">
              Please enter a valid city name, <br></br>or the nearest major
              airport location
            </p>
            <input
              type="text"
              placeholder="Where to?"
              className="search-input"
              value={location.userInput}
              onChange={handleChange}
            />
            <button className="search-btn" onClick={updateLocation}>
              Let's Go!
            </button>
          </form>

          <Photos searchParam={searchParam} />

          <Flights
            searchParam={searchParam}
            fromAirportCode={fromAirportCode}
            setFromAirportCode={setFromAirportCode}
            toAirportCode={toAirportCode}
            filteredAirportData={filteredAirportData}
            filteredDepartureAirportData={filteredDepartureAirportData}
            toggleFlightWidget={toggleFlightWidget}
            showFlightWidget={showFlightWidget}
          />

          {/* <Currency 
            countryCode={toCountryCode}
            toggleCurrencyWidget={toggleCurrencyWidget}  
            showCurrencyWidget={showCurrencyWidget}
          /> */}

          <Advisory
            searchParam={searchParam}
            countryCode={toCountryCode}
            toggleAdvisoryWidget={toggleAdvisoryWidget}
            showAdvisoryWidget={showAdvisoryWidget}
          />

          {/* <PTOtracker 
            togglePTOWidget={togglePTOWidget}  
            showPTOWidget={showPTOWidget} 
          /> */}

          <Budget
            searchParam={searchParam}
            toggleBudgetWidget={toggleBudgetWidget}
            showBudgetWidget={showBudgetWidget}
          />

          <Weather
            searchParam={searchParam}
            toggleWeatherWidget={toggleWeatherWidget}
            showWeatherWidget={showWeatherWidget}
          />

          <Date
            toggleCalendarWidget={toggleCalendarWidget}
            showCalendarWidget={showCalendarWidget}
          />

          <TodoMain
            toggleTodoWidget={toggleTodoWidget}
            showTodoWidget={showTodoWidget}
          />
        </div>
      </div>
    </>
  );
}
