import React, { useEffect, useState } from 'react';
import './Schedule.scss';
import { Calendar } from 'react-calendar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addDates } from '../../state/tripSlice.js';
import 'react-calendar/dist/Calendar.css';
import { store } from '../../state/store.js';

const Schedule = () => {

  const [date, setDate] = useState(new Date());
  const [dateRange, setDateRange] = useState('');
  const [totalDates, setTotalDates] = useState([])

  // const [trip, setTrip] = useState('');

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const addDateRange = () => {
    if (dateRange) {
      dispatch (
        addDates(dateRange)
      )
      setTotalDates([...totalDates, dateRange])
    }
  }

  const logDates = (date) => {
    setDate([date[0], date[1]])
    
    const startDate = date[0].getTime()
    const endDate = date[1].getTime()

    setDateRange({startDate: startDate, endDate: endDate});
    addDateRange();
  }


  const displaySelectedDates = () => {
    console.log(state.trips.tempTrip.dates, 'DATES IN STATE')
    
    const allDates = state.trips.tempTrip.dates.map(range => {
      console.log(range, 'EACH DATE RANGE')
      const start = new Date(range.start_date)
      const end = new Date(range.end_date)


      return (
        <p>{start.toDateString()} - {end.toDateString()}</p>
      )
    })

    if(state.trips.tempTrip.dates.length) {
      return (
        <section className="dates-list">
          <h2>You're free:</h2>
          {allDates}
        </section>
      )
    }
    
  }

  useEffect(() => {
    console.log('DATES CHANGED', totalDates)
  }, [dateRange])
  

  // when the user selects dates on the calendar, on change we should set state to those dates.
  // then provide something on the UI for the user to confirm to add those dates
  // once the dates have been selected, add to UI with an option to remove from the list

  // 1. onChange of calendar run logDates to set state to selected dates
  // 2. 

  return (
    <div className="schedule">
      <section className="schedule-txt">
        <h1>When are you free?</h1>
        <div className="schedule-txt-p-cont">
          <p>Select as many dates as you like...</p>
          <p>Don't worry, we'll keep track.</p>
        </div>
      </section>
      <div className="calendar-container">
        <Calendar onChange={logDates} className="calendar" defaultValue="" selectRange={true} minDate={new Date()} defaultView='year' />
      </div>
      {displaySelectedDates()}
      <div className="btn-container">
        <Link to="/budget" className="budget-link" style={{ width: "100%" }}>
          <button className="continue-btn" onClick={addDateRange}>Continue</button>
        </Link>
      </div>
    </div>
  )
}


export default Schedule;