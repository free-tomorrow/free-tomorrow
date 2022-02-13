import './TripCard.scss';
import Earth from '../../assets/ft_earth.png'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const TripCard = ({budget, confirmed, createdBy, tripName}) => {
  return (
    (
      <article className="trip-card">
        {/* <img className="trip-card-img" src={Earth}/> */}
        <div className="trip-card-txt">
          <p></p>
          <p>Dates: Feb 20th to Feb 25th</p>
          <p>Budget: $500</p>
        </div>
      </article>
    )
  )


}


export default TripCard