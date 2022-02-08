import './TripCard.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const TripCard = () => {
  const tempTrip = useSelector((state) => state.tempTrip)
  console.log(tempTrip)

  const tripDates = tempTrip.dates.map((date) => {
    console.log(date)
    const from = new Date(date.startDate)
    const to = new Date(date.endDate)

    return <p>Dates: from {from.toDateString()} to {to.toDateString()} </p>
  })
  return (
    (
      <article className="trip-card">
        <div className="trip-card-txt">
          <p>Going with: </p>
          <p>Dates: {tripDates} </p>
          <p>Budget: ${tempTrip.budget} </p>
        </div>
      </article>
    )
  )


}


export default TripCard