import './TripCard.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const TripCard = () => {
  const allTrips = useSelector((state) => state.trips)
  console.log(allTrips)

  return (
    (
      <article className="trip-card">
        <div className="trip-card-txt">
          <p>Going with allTrips.tripUsers</p>
          <p>Dates: allTrips.dates</p>
          <p>Budget: allTrips.proposedBudget</p>
        </div>
      </article>
    )
  )


}


export default TripCard