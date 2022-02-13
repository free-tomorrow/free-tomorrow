import './Share.scss';
import TripCard from '../TripCard/TripCard';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react'
import { createNewTripAsync } from '../../state/tripSlice';

const Share = () => {
  const [tripName, setTripName] = useState('');
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(tripName)
  const createTrip = (e) => {
    e.preventDefault()
    dispatch(
      createNewTripAsync({
        name: tripName,
        email: state.users.email,
        budget: state.trips.tempTrip.budget,
        dates: state.trips.tempTrip.dates
      })
    )
  }


  // useEffect((e) => {
  //   setTre.target.value

  // }, [tripName])

  return (
    <div className="share-pg">
      <div className="share-card-wrapper">
        <TripCard
          tripName={tripName}
          createdBy={state.users.email}
          budget={state.trips.tempTrip.budget}
          dates={state.trips.tempTrip.dates}
        />
      </div>
      <form className="share-form">
        <input
          className="share-name-input"
          type="text"
          placeholder="Name your trip!"
          minLength="1"
          maxLength="64"
          autoComplete="off"
          onChange={(e) => setTripName(e.target.value)} />
        <button
          className="create-trip-btn share-btn"
          onClick={(e) => createTrip(e)}
        >Create this trip</button>
        <button
          className="share-trip-btn share-btn"
        >Get a link for this trip</button>
      </form>
    </div>
  )
}






export default Share;