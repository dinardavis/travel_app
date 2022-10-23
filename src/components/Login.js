import React from "react";
import { MdOutlineLogin } from "react-icons/md";



export default function Login() {

  return (
    <form className="login-container">  
        <div className="user-info">
          <img src="/imgs/me.png" className="login-user-emoji" alt="User Login Emoji"></img> 
          <p className="user-msg">Welcome back, Dinar!</p> 
        </div>
   
        <button className="login-btn">Login <MdOutlineLogin className="login-icon"/></button>
    </form>
  )
}