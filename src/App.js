import React from "react";
import Login from "./components/Login";
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
import Register from "./components/Register";

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(true)
  const [registered, setRegistered] = React.useState(true)

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
  const [showWidgets, setShowWidgets] = React.useState(
    () => JSON.parse(localStorage.getItem("widgetsDisplayed")) ||{
    showFlightWidget: true,
    showAdvisoryWidget: true,
    showCalendarWidget: false,
    showTodoWidget: false,
    showWeatherWidget: true,
    showCurrencyWidget: false,
    showPTOWidget: false,
    showBudgetWidget: true, 
  });
  const [isVisible, setIsVisible] = React.useState(false);


  function toggleRegistered(){
    setRegistered(prevState => !prevState)
  }

  function goToRegisterPage() {
    setLoggedIn(false)
    setRegistered(false)
  }

  function loggedInSuccess() {
    setLoggedIn(true)
    setRegistered(true)
  }

  function logOut() {
    setLoggedIn(false)
    setRegistered(true)
  }

  function toggleFlightWidget() {
    setShowWidgets(prevWidgets => {
      return {
          ...prevWidgets,
          showFlightWidget: !prevWidgets.showFlightWidget
      }
    })
  }

  function toggleAdvisoryWidget() {
    setShowWidgets(prevWidgets => {
      return {
          ...prevWidgets,
          showAdvisoryWidget: !prevWidgets.showAdvisoryWidget
      }
    })
  }

  function toggleCalendarWidget() {
    setShowWidgets(prevWidgets => {
      return {
          ...prevWidgets,
          showCalendarWidget: !prevWidgets.showCalendarWidget
      }
    })
  }

  function toggleTodoWidget() {
    setShowWidgets(prevWidgets => {
      return {
          ...prevWidgets,
          showTodoWidget: !prevWidgets.showTodoWidget
      }
    })
  }

  function toggleWeatherWidget() {
    setShowWidgets(prevWidgets => {
      return {
          ...prevWidgets,
          showWeatherWidget: !prevWidgets.showWeatherWidget
      }
    })
  }

  function toggleCurrencyWidget() {
    setShowWidgets(prevWidgets => {
      return {
          ...prevWidgets,
          showCurrencyWidget: !prevWidgets.showPCurrencyWidget
      }
    })
  }

  function togglePTOWidget() {
    setShowWidgets(prevWidgets => {
      return {
          ...prevWidgets,
          showPTOWidget: !prevWidgets.showPTOWidget
      }
    })
  }

  function toggleBudgetWidget() {
    setShowWidgets(prevWidgets => {
      return {
          ...prevWidgets,
          showBudgetWidget: !prevWidgets.showBudgetWidget
      }
    })
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

  React.useEffect(() => {
    localStorage.setItem("widgetsDisplayed", JSON.stringify(showWidgets));
  }, [showWidgets]);

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
      { !loggedIn && !registered ? 
          <Register 
            toggleRegistered={toggleRegistered}
          /> :
        !loggedIn && registered ?
          <Login 
            loggedInSuccess={loggedInSuccess}
            goToRegisterPage={goToRegisterPage}
          /> :
          <div className="main-container">
          <Navbar searchParam={searchParam} />
          <Sidebar
            showWidgets={showWidgets}
            toggleFlightWidget={toggleFlightWidget}
            toggleAdvisoryWidget={toggleAdvisoryWidget}
            toggleCalendarWidget={toggleCalendarWidget}
            toggleTodoWidget={toggleTodoWidget}
            toggleWeatherWidget={toggleWeatherWidget}
            toggleCurrencyWidget={toggleCurrencyWidget}
            togglePTOWidget={togglePTOWidget}
            toggleBudgetWidget={toggleBudgetWidget}
            toggleIsVisible={toggleIsVisible}
            comingSoon={<ComingSoon isVisible={isVisible} />}
            logOut={logOut}
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
              showWidgets={showWidgets}
              toggleFlightWidget={toggleFlightWidget}
            />

            <Currency 
              countryCode={toCountryCode}
              toggleCurrencyWidget={toggleCurrencyWidget}  
              showWidgets={showWidgets}
            />

            <Advisory
              searchParam={searchParam}
              countryCode={toCountryCode}
              toggleAdvisoryWidget={toggleAdvisoryWidget}
              showWidgets={showWidgets}
            />

            <PTOtracker 
              togglePTOWidget={togglePTOWidget}  
              showWidgets={showWidgets}
            />

            <Budget
              searchParam={searchParam}
              showWidgets={showWidgets}
              toggleBudgetWidget={toggleBudgetWidget}
            />

            <Weather
              searchParam={searchParam}
              toggleWeatherWidget={toggleWeatherWidget}
              showWidgets={showWidgets}
            />

            <Date
              toggleCalendarWidget={toggleCalendarWidget}
              showWidgets={showWidgets}
            />

            <TodoMain
              toggleTodoWidget={toggleTodoWidget}
              showWidgets={showWidgets}
            />
          </div>
        </div>
      }
    </>
  );
}
