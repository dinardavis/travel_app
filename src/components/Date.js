import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


export default function Date() {
  const [date, sestDate] = React.useState()

  return (
    <section className='calendar-container'>
       <Calendar />
    </section>
  )
}