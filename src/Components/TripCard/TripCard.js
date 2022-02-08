import './TripCard.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const TripCard = () => {
  return (
    (
      <article className="trip-card">
        <div className="trip-card-txt">
          <p>Going with: </p>
          <p>Dates: </p>
          <p>Budget: </p>
        </div>
      </article>
    )
  )


}


export default TripCard