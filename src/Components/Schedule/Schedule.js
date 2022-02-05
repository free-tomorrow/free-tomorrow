import React from 'react';
import './Schedule.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { Link } from 'react-router-dom';

const Schedule = () => {
  return (
    <div className="schedule">
      <section className="schedule-txt">
        <h1>What's your availability like?</h1>
      </section>
      <div className="calendar-container">
        <Calendar className="calendar" />
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