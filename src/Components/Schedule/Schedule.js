import React, { useState } from 'react';
import './Schedule.scss';
import { Calendar } from 'react-calendar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addDates } from '../../state/tempTripSlice.js';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {

  const [date, setDate] = useState(new Date());
  const [dateRange, setDateRange] = useState('');

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const addDateRange = () => {
    if (dateRange) {
      dispatch (
        addDates(dateRange)
      )
    }
  }

  const logDates = (date) => {
    setDate([date[0], date[1]])
    
    const startDate = date[0].getTime()
    const endDate = date[1].getTime()

    setDateRange({startDate: startDate, endDate: endDate});
    addDateRange();
    // rethink model to allow multiple ranges
  }

  // add text to show selected dates on UI

  return (
    <div className="schedule">
      <section className="schedule-txt">
        <h1>When are you free?</h1>
      </section>
      <div className="calendar-container">
        <Calendar onChange={logDates} className="calendar" value={date} selectRange={true} defaultView='year' />
      </div>
      <div className="btn-container">
        <Link to="/budget" style={{ width: "100%" }}>
          <button className="continue-btn" onClick={addDateRange}>Continue</button>
        </Link>
      </div>

    </div>
  )
}


export default Schedule;