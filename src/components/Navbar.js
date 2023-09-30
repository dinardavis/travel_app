import React from 'react';
import Search from './Search';


export default function Navbar(props) {

  return (
    <nav className='main-nav light-mode'>
      <ul className='nav-list'>
        <img src='/imgs/travel_dreams_logo.png' className='main-nav-logo' alt='main logo'/>
        <li className='nav-list-item'>
        Travel Dreamcatcher</li>
      </ul>

      <Search 
        searchParam={props.searchParam}
      />
    </nav>
  )
}