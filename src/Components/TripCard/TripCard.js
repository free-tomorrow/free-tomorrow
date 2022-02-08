import './TripCard.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const TripCard = () => {
  const tempTrip = useSelector((state) => state.tempTrip)
  console.log(tempTrip)

  const tripDates = tempTrip.dates[0]
  return (
    (
      <article className="trip-card">
        <div className="trip-card-txt">
          <p>Going with: </p>
          <p>Dates: From {tripDates.startDate} to {tripDates.endDate} </p>
          <p>Budget: ${tempTrip.budget} </p>
        </div>
      </article>
    )
  )


}


export default TripCard