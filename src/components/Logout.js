import React from "react";
import { MdOutlineLogout } from "react-icons/md";

/* PLAN FOR FUTURE FUNCTIONALITY TO ENABLE USERS TO LOGIN AND SAVE UNIQUE DATA TO PROFILE */

export default function Logout(props) {

  return (
    <form className="logout-container">  
        <div className="user-info">
          <img src="imgs/me.png" className="logout-user-emoji" alt="User logout Emoji"></img> 
          <p className="user-msg">Welcome back, Dinar!</p> 
        </div>
   
        <button 
          className="logout-btn"
          onClick={(e) => props.toggleIsVisible(e.preventDefault())}
        >
          Logout<MdOutlineLogout className="logout-icon"/>
        </button>
    </form>
  )
}