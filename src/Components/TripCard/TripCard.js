import './TripCard.scss';
import Earth from '../../assets/ft_earth.png'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const TripCard = ({ budget, createdBy, tripName, users }) => {
  console.log(budget, "BUDGET TRIP CARD")
  return (
    (
      <article className="trip-card">
        {/* <img className="trip-card-img" src={Earth}/> */}
        <div className="trip-card-txt">
          <p>Budget: {budget}</p>
          <p>createdBy={createdBy}</p>
          <p>tripname={tripName}</p>
          <p>users={users}</p>
        </div>
      </article>
    )
  )


}


export default TripCard