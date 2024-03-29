import React from "react";
import Logout from "./Logout"
import { SlPlane } from "react-icons/sl"
import { BsCalendarWeek } from "react-icons/bs"
import { BsCloudSun } from "react-icons/bs"
import { BsPinMap } from "react-icons/bs"
import { AiOutlineAlert } from "react-icons/ai"
import { BsPiggyBank } from "react-icons/bs"
import { BsClock } from "react-icons/bs"
import { BsCurrencyExchange } from "react-icons/bs"
import { VscChecklist } from "react-icons/vsc"

/* SIDEBAR CONTAINING FUTURE PLANNED FUNCTIONALITY FOR DASHBOARD */

export default function Sidebar(props) {

  return (
    <section 
    className="sidebar-container">
      <div className="widgets-container">
        <h1 className="sidebar-header">Widgets</h1>

        <div className="widgets widget-flight" style={{ display: props.showWidgets.showFlightWidget ? 'none': 'flex'}}>
          <SlPlane className="widget-icon calendar" />
          <p className="widget-text">Flight<br/>Search</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleFlightWidget}
          >+</div>
        </div>

        <div className="widgets widget-budget" style={{ display: props.showWidgets.showBudgetWidget ? 'none': ''}}>
          <BsPiggyBank className="widget-icon budget" />
          <p className="widget-text">Budget</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleBudgetWidget}
          >+</div>
        </div>

        <div className="widgets widget-weather" style={{ display: props.showWidgets.showWeatherWidget ? 'none': 'flex'}}>
          <BsCloudSun className="widget-icon weather" />
          <p className="widget-text">Weather</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleWeatherWidget}
          >+</div>
        </div>

        <div className="widgets widget-advisory" style={{ display: props.showWidgets.showAdvisoryWidget ? 'none': ''}}>
          <AiOutlineAlert className="widget-icon advisory" />
          <p className="widget-text">Travel Advisories</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleAdvisoryWidget}
          >+</div>
        </div>
        
        <div className="widgets widget-todo" style={{ display: props.showWidgets.showTodoWidget ? 'none': ''}}>
          <VscChecklist className="widget-icon todo" />
          <p className="widget-text">Checklist</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleTodoWidget}
          >+</div>
        </div>

        <div className="widgets widget-calendar" style={{ display: props.showWidgets.showCalendarWidget ? 'none': ''}}>
          <BsCalendarWeek className="widget-icon calendar" />
          <p className="widget-text">Calendar</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleCalendarWidget}
          >+</div>
        </div>

        <div className="widgets widget-pto"  style={{ display: props.showWidgets.showPTOWidget ? 'hidden': ''}}>
          <BsClock className="widget-icon pto" />
          <p className="widget-text">PTO Tracker</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleIsVisible}
          >+</div>
        </div>

        <div className="widgets widget-map" style={{ display: props.showWidgets.showMapWidget ? 'hidden': ''}}>
          <BsPinMap className="widget-icon" />
          <p className="widget-text">Map</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleIsVisible}
          >+</div>
        </div>

        <div className="widgets widget-currency" style={{ display: props.showWidgets.showCurrencyWidget ? 'hidden': ''}}>
          <BsCurrencyExchange className="widget-icon currency" />
          <p className="widget-text">Currency Converter</p>
          <div 
             className="widget-add-btn"
            onClick={props.toggleIsVisible}
          >+</div>
        </div>
      </div>

      {props.comingSoon}
      <Logout 
        toggleIsVisible={props.toggleIsVisible}
        logOut={props.logOut}
      />
    </section>
  )
}