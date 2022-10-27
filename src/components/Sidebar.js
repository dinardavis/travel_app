import React from "react";
import Login from "./Login";
import { BsPinMap } from "react-icons/bs"
import { BsPlusSquareFill } from "react-icons/bs"
import { BsQuestionDiamond } from "react-icons/bs"

export default function Sidebar() {

  return (
    <section 
    className="sidebar-container">
      <div className="widgets-container">
        <h1 className="sidebar-header">Widgets</h1>
        <div className="widgets widget-map"><BsPinMap className="widget-icon" /><p>Map</p><BsPlusSquareFill className="widget-add-icon"/></div>

        <div className="widgets widget-advisory"><BsQuestionDiamond className="widget-icon advisory" /><p>Advisories</p><BsPlusSquareFill className="widget-add-icon"/></div>
      </div>
    
      <Login />
    </section>
  )
}