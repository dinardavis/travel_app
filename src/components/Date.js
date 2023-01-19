import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function Date() {
  
  return (
    <section className='calendar-container'>
       <Calendar className='calendar' />
    </section>
  )
}