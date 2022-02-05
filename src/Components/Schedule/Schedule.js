import React, { useState } from 'react';
import './Schedule.scss';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { Link } from 'react-router-dom';
import { trips, users } from '../../mockData';

const Schedule = () => {

  const [date, setDate] = useState(new Date())


  const logDates = (date) => {
    
    const startDate = new Date(date[0])
    const endDate = new Date(date[1])
    console.log(startDate, 'start date')
    console.log(endDate, 'end date')

    const startTime = startDate.getTime()
    const endTime = endDate.getTime()
    
    console.log(startTime, 'start time')
    console.log(endTime, 'end time')


    setDate(startDate, endDate)
  }

  return (
    <div className="schedule">
      <section className="schedule-txt">
        <h1>What's your availability like?</h1>
      </section>
      <div className="calendar-container">
        <Calendar onChange={logDates} className="calendar" value={date} selectRange={true} />
      </div>
      <div className="btn-container">
        <Link to="/budget" style={{ width: "100%" }}>
          <button className="continue-btn" >Continue</button>
        </Link>
      </div>

    </div>
  )
}







export default Schedule;