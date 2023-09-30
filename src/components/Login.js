import React from "react";

export default function Login(props) {
  return (
    <div className="login-container">
      <div className="login-header">
        <img src='/imgs/travel_dreams_logo.png' className='login-logo' alt='main logo'/>
        <li className='nav-list-item'>
        Travel Dreamcatcher</li>
      </div>

      <div className="login-inputs-container">
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value=""
          onChange=""
        />
        <input
          type="text"
          placeholder="Password"
          className="login-input"
          value=""
          onChange=""
        />
        <button className="login-btn" onClick={props.loggedInSuccess}>Login</button>
        <button className="guest-login-btn">Continue As Guest</button>
      </div>
      <div className="register-message">
        <p className="register-text">Don't have an account yet? <span onClick={props.goToRegisterPage}>Sign up</span>.</p>
      </div>
    </div>
  )
}