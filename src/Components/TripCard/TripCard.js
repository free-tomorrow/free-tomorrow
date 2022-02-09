import './TripCard.scss';
import Earth from '../../assets/ft_earth.png'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const TripCard = () => {
  return (
    (
      <article className="trip-card">
        <img className="trip-card-img" src={Earth}/>
        <div className="trip-card-txt">
          <p>Going with: Delilah, Sam, Greg</p>
          <p>Dates: Feb 20th to Feb 25th</p>
          <p>Budget: $500</p>
        </div>
      </article>
    )
  )


}


export default TripCard