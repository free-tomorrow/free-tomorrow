import React from 'react';
import './Calendar.scss';
import { Calendar as DatePicker } from 'react-calendar';

const Calendar = () => {
  return (
    <div className="date-picker-container">
      <DatePicker className="date-picker" />
    </div>
  )
}

export default Calendar;