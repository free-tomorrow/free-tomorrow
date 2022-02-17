import './Share.scss';
import TripCard from '../TripCard/TripCard';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { createNewTripAsync } from '../../state/tripSlice';
import { useNavigate } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import copyImg from '../../assets/copy_icon.png'

const Share = () => {
  const [tripName, setTripName] = useState('');
  const [budget, setBudget] = useState('');
  const [dates, setDates] = useState('');
  const [tripId, setTripId] = useState('');
  const [link, setLink] = useState(``);
  const [copied, setCopied] = useState(false)
  const [copyMsg, setCopyMsg] = useState('')


  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createTrip = (e) => {
    e.preventDefault()
    dispatch(
      createNewTripAsync({
        name: tripName,
        email: state.users.email,
        budget: budget,
        dates: dates
      })
    ).then(() => {
      const savedTrip = localStorage.getItem('savedTrip')
      let id = JSON.parse(savedTrip).id
      setTripId(id)

    }

    )
  }

  useEffect(() => {
    console.log(tripId, 'tripID')
    if (tripId) {
      generateTripLink()

    }
  }, [tripId])


  useEffect(() => {
    console.log(localStorage)
    setBudget(state.trips.tempTrip.budget)
    setDates(state.trips.tempTrip.dates)
  }, [])

  const generateTripLink = () => {

    const linkUrl = `https://freetomorrow.netlify.app/:${tripId}`
    setLink(linkUrl)

  }


  const createCopyMsg = (e) => {
    e.preventDefault()
    setCopyMsg(

      <p className="copy-msg">Copied!</p>

    )
  }

  const goHome = (e) => {
    e.preventDefault();
    const savedUser = localStorage.getItem('savedUser');
    const userId = JSON.parse(savedUser).id;
    navigate(`/dashboard/${userId}`);
    localStorage.removeItem('savedTrip');
  }


  const validInputs = !tripName ? false : true

  return (
    <div className="share-pg">
      <div className="share-pg-content">

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
          <div className="copy-to-clipboard">
            <input className="link-input" value={link} readOnly onCopy={(e) => setCopied(true)} />


            <CopyToClipboard text={link}>
              <button onClick={(e) => createCopyMsg(e)}><img src={copyImg} className="copy-img"></img></button>
            </CopyToClipboard>

            {copyMsg}
          </div>
          <div className="share-btn-container">
            <button className="share-dashboard-btn" onClick={(e) => goHome(e)}>Back to dashboard</button>

          </div>
        </form>
      </div>
    </div>
  )
}






export default Share;