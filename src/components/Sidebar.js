import React from "react";
import Login from "./Login"
import { BsPinMap } from "react-icons/bs"
import { BsQuestionDiamond } from "react-icons/bs"
import { BsPiggyBank } from "react-icons/bs"
import { BsClock } from "react-icons/bs"

export default function Sidebar(props) {

  return (
    <section 
    className="sidebar-container">
      <div className="widgets-container">
        <h1 className="sidebar-header">Widgets</h1>
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
          <BsPiggyBank className="widget-icon advisory" />
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
      </div>

      {props.comingSoon}
      

      <Login 
        toggleIsVisible={props.toggleIsVisible}
      />
    
  
    </section>
  )
}