import React from "react";
import Login from "./Login";
import { BsPinMap } from "react-icons/bs"

export default function Sidebar() {

  return (
    <section 
    className="sidebar-container">
      <div className="widgets-container">
        <h1 className="sidebar-header">Widgets</h1>
        <div className="widgets widget-map"><BsPinMap className="widget-icon" /><p>Map</p></div>
      </div>
    
      <Login />
    </section>
  )
}