import './Share.scss';
import TripCard from '../TripCard/TripCard';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { createNewTripAsync } from '../../state/tripSlice';

const Share = () => {
  const [tripName, setTripName] = useState('');
  const [budget, setBudget] = useState('');
  const [dates, setDates] = useState('');
  const [tripId, setTripId] = useState('');
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(tripName)
  const createTrip = (e) => {
    e.preventDefault()
    dispatch(
      createNewTripAsync({
        name: tripName,
        email: state.users.email,
        budget: budget,
        dates: dates
      }) 
      )
      .then(() => {
        if (state.trips.allTrips){
          console.log(state.trips.allTrips.id, 'ID')
          setTripId(state.trips.allTrips.id)
          console.log(tripId)
          generateTripLink(e)
        }
        // setTripId(state.trips.respTripId[0])
        // console.log(budget)
    })
  }

useEffect(() => {
  setBudget(state.trips.tempTrip.budget)
  setDates(state.trips.tempTrip.dates)
}, [])

const generateTripLink = (e) => {
  e.preventDefault()
  console.log(tripId)
  const linkUrl = new URL(`https:/localhost:3000/:${tripId}`)
  console.log(linkUrl.href, 'link url')
}

const validInputs = !tripName ? false : true
const canShare = tripId ? false : true

  return (
    <div className="share-pg">
      <div className="share-card-wrapper">
        <TripCard
          tripName={tripName}
          createdBy={state.users.email}
          budget={budget}
          dates={dates}
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
          disabled={!validInputs}
          onClick={(e) => createTrip(e)}
        >Create this trip</button>
        <button
          onClick={(e) => generateTripLink(e)}
          className="share-trip-btn share-btn"
          disabled={!canShare}
        >Get a link for this trip</button>
      </form>
    </div>
  )
}






export default Share;