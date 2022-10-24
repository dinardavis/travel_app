import React from 'react';
import Search from './Search';


export default function Navbar() {


  return (
    <nav className='main-nav light-mode'>
      <ul className='nav-list'>
        <li className='list-item'>Travel Dream Dashboard</li>
      </ul>

      <Search />
    </nav>
  )
}