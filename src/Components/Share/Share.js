import './Share.scss';
import TripCard from '../TripCard/TripCard';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { createNewTripAsync } from '../../state/tripSlice';
import { useNavigate } from 'react-router-dom'

const Share = () => {
  const [tripName, setTripName] = useState('');
  const [budget, setBudget] = useState('');
  const [dates, setDates] = useState('');
  const [tripId, setTripId] = useState('');
  const [url, setUrl] = useState('');
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(state)
  const createTrip = (e) => {
    e.preventDefault()
    console.log(tripName)
    dispatch(
      createNewTripAsync({
        name: tripName,
        email: state.users.email,
        budget: budget,
        dates: dates
      })
    )
      .then(() => {
        setTripId(state.trips.allTrips.id)
        console.log(state.trips.allTrips.id, 'ID')
        console.log(tripId)
        generateTripLink(e)
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
    const linkUrl = new URL(`https:/localhost:3000/dashboard/:${tripId}`)
    console.log(linkUrl.href, 'link url')
    setUrl(linkUrl)
    console.log(url)
  }

  const goHome = (e) => {
    e.preventDefault();
    const savedUser = localStorage.getItem('savedUser');
    const userId = JSON.parse(savedUser).id;
    navigate(`/dashboard/${userId}`);

  }

  const shareLink = url ?
    (
      <div className="share-link-wrapper">
        <p>You're all set! Just share this link with your friends</p>
        <p>{url}</p>
      </div>
    ) : console.log(4)


  const validInputs = !tripName ? false : true
  const canShare = parseInt(tripId) ? true : false

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
        <button onClick={(e) => goHome(e)}>Back to dashboard</button>
      </form>
    </div>
  )
}






export default Share;