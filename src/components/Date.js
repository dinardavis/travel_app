import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function Date(props) {
  
  return (
    <section className='calendar-container' style={{ display: props.showWidgets.showCalendarWidget ? '': 'none'}}>
      <div className="widget-close-btn"  onClick={props.toggleCalendarWidget}>X</div>
       <Calendar className='calendar' />
    </section>
  )
}