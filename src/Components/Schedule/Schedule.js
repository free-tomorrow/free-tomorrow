import React, { useEffect, useState } from 'react';
import './Schedule.scss';
import { Calendar } from 'react-calendar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addDates } from '../../state/tripSlice.js';

const Schedule = () => {
  const [value, setValue] = useState(new Date());
  const [dateRange, setDateRange] = useState('');
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const logDates = (value) => {
    setValue([value[0], value[1]])
    const startDate = value[0].getTime()
    const endDate = value[1].getTime();
    setDateRange({ startDate: startDate, endDate: endDate });
  }

  const displaySelectedDates = () => {
    if(dateRange) {

      const allDates = state.trips.tempTrip.dates.map(range => {
       
        const start = new Date(range.start_date)
        const end = new Date(range.end_date)
        return (
          <p key={Math.floor(Math.random() * Date.now())}> {start.toDateString()} - {end.toDateString()}</p>
        )
      })
      return (
        <div className="schedule-btn-container">
          <section  className="dates-list">
            <h2>You're free:</h2>
            {allDates}
          </section>
          <Link to="/budget">
            <button className="schedule-continue-btn">Continue</button>
          </Link>
        </div>
      )
    }

   

    }
  

  useEffect(() => {
    if(dateRange){
      dispatch(addDates(dateRange))
    }
  }, [dateRange])


  return (
    <div className="schedule">
      <div className="schedule-content">
        <div className="calendar-wrapper">
          <section className="schedule-txt">
            <h1>When are you free?</h1>
            <p>Select as many dates as you like...</p>
            <p>Don't worry, we'll keep track.</p>
          </section>
          <Calendar
            activeStartDate={new Date()}
            onChange={logDates}
            selectRange={true}
            minDate={new Date()}
            defaultView='month' />
        </div>
        {displaySelectedDates()}
      </div>
    </div>
  )
}


export default Schedule;