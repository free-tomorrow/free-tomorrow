import './TripCard.scss';
import Earth from '../../assets/ft_earth.png'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const TripCard = ({  tripName, createdBy, confirmed, budget, dates }) => {
  // console.log(budget, "BUDGET TRIP CARD")
  return (
    (
      <article className="trip-card">
        {/* <img className="trip-card-img" src={Earth}/> */}
        <div className="trip-card-txt">
          <h1>{tripName}</h1>
          <p>Created By: {createdBy}</p>
          <p>Proposed Budget: ${budget}</p>
        </div>
      </article>
    )
  )


}


export default TripCard