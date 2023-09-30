import React from "react";

export default function Register(props) {
  return (
    <div className="register-container">
      <div className="register-header">
        <img src='/imgs/travel_dreams_logo.png' className='register-logo' alt='main logo'/>
        <li className='nav-list-item'>
        Travel Dreamcatcher</li>
      </div>

      <div className="register-inputs-container">
        <input
          type="text"
          placeholder="Username"
          className="register-input"
          value=""
          onChange=""
        />
        <input
          type="text"
          placeholder="Password"
          className="register-input"
          value=""
          onChange=""
        />
         <input
          type="text"
          placeholder="Confirm Password"
          className="register-input"
          value=""
          onChange=""
        />
        <button className="register-btn">Register</button>
      </div>
      <div className="register-message">
        <p className="register-text">Back to login <span onClick={props.toggleRegistered}>here</span>.</p>
      </div>
    </div>
  )
}