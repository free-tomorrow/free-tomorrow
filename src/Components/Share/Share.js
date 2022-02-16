import './Share.scss';
import TripCard from '../TripCard/TripCard';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { createNewTripAsync } from '../../state/tripSlice';
import { useNavigate } from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Share = () => {
  const [tripName, setTripName] = useState('');
  const [budget, setBudget] = useState('');
  const [dates, setDates] = useState('');
  const [tripId, setTripId] = useState('');
  // const [url, setUrl] = useState('');
  const [link, setLink] = useState(``);
  const [copied, setCopied] = useState(false)


  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        localStorage.setItem('tripId', state.trips.allTrips.id)
        setTripId(state.trips.allTrips.id)
        console.log(state.trips.allTrips.id, 'ID')
        console.log(tripId)
        generateTripLink(e)
        
      })
  }

  useEffect(() => {
    setBudget(state.trips.tempTrip.budget)
    setDates(state.trips.tempTrip.dates)
  }, [])

  const generateTripLink = (e) => {
    e.preventDefault()
    const savedId = localStorage.getItem('tripId')
    setTripId(JSON.parse(savedId))
    console.log(tripId, 'tripId')

    const linkUrl = `https:/localhost:3000/:${tripId}`
    setLink(linkUrl)
    console.log(link)

  }

  useEffect(() => {

  }, [link])

  const goHome = (e) => {
    e.preventDefault();
    const savedUser = localStorage.getItem('savedUser');
    const userId = JSON.parse(savedUser).id;
    navigate(`/dashboard/${userId}`);

  }



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
         <div>
        <input value={link} readonly onCopy={(e) => setCopied(true)}/>


          <CopyToClipboard text={link}>
            <button onClick={(e) => e.preventDefault()}>Copy to clipboard with button</button>
          </CopyToClipboard>

          {copied ? <p>Copied.</p> : null}
      </div>

        <button onClick={(e) => goHome(e)}>Back to dashboard</button>
      </form>
    </div>
  )
}






export default Share;