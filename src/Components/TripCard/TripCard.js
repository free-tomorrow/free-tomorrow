import './TripCard.scss';
import React from 'react';


const TripCard = ({  tripName, createdBy, budget, dates }) => {
  

  return (
    (
      <article className="trip-card">
 
        <div className="trip-card-txt">
          <h1>{tripName}</h1>
          <p className="italic">Created By</p>
          <p>{createdBy}</p>
          <p className="italic">Proposed Budget</p>
          <p>${budget}</p>
         
        </div>
      </article>
    )
  )


}


export default TripCard