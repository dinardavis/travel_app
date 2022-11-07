import React from 'react';
import Search from './Search';


export default function Navbar(props) {

  return (
    <nav className='main-nav light-mode'>
      <ul className='nav-list'>
        <li className='nav-list-item'>Travel Dream Dashboard</li>
      </ul>

      <Search 
        searchParam={props.searchParam}
      />
    </nav>
  )
}