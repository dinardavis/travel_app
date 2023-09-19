import React from "react";
import Login from "./Login"
import { SlPlane } from "react-icons/sl"
import { BsPinMap } from "react-icons/bs"
import { BsQuestionDiamond } from "react-icons/bs"
import { BsPiggyBank } from "react-icons/bs"
import { BsClock } from "react-icons/bs"
import { BsCurrencyExchange } from "react-icons/bs"

/* SIDEBAR CONTAINING FUTURE PLANNED FUNCTIONALITY FOR DASHBOARD */

export default function Sidebar(props) {

  return (
    <section 
    className="sidebar-container">
      <div className="widgets-container">
        <h1 className="sidebar-header">Widgets</h1>
        <div className="widgets widget-flight" style={{ display: props.showFlightWidget ? 'none': ''}}>
          <SlPlane className="widget-icon flight" />
          <p className="widget-text">Flight<br/> Search</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleFlightWidget}
          >+</div>
        </div>

        <div className="widgets widget-map">
          <BsPinMap className="widget-icon" />
          <p className="widget-text">Map</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleIsVisible}
          >+</div>
        </div>

        <div className="widgets widget-advisory">
          <BsQuestionDiamond className="widget-icon advisory" />
          <p className="widget-text">Travel Advisories</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleIsVisible}
          >+</div>
        </div>

        <div className="widgets widget-budget">
          <BsPiggyBank className="widget-icon budget" />
          <p className="widget-text">Budget</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleIsVisible}
          >+</div>
        </div>

        <div className="widgets widget-pto">
          <BsClock className="widget-icon advisory" />
          <p className="widget-text">PTO Tracker</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleIsVisible}
          >+</div>
        </div>

        <div className="widgets widget-currency">
          <BsCurrencyExchange className="widget-icon currency" />
          <p className="widget-text">Currency Converter</p>
          <div 
            className="widget-add-btn"
            onClick={props.toggleIsVisible}
          >+</div>
        </div>
      </div>

      {props.comingSoon}
      <Login 
        toggleIsVisible={props.toggleIsVisible}
      />
    </section>
  )
}