import './Share.scss';
import TripCard from '../TripCard/TripCard';
import { useSelector, useDispatch } from 'react-redux';
import React, {useState} from 'react'
import { createNewTripAsync, addEmails } from '../../state/tripSlice';

const Share = () => {

  const [tripName, setTripName] = useState('')
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  // const addEmailInput = (e) => {
  //   e.preventDefault()
  //   // const newInput =
  //   return (
  //     <input type="email" name="share-email" placeholder="Your friend's email"/>
  //   )
  // }

  const createTrip = (e) => {
    e.preventDefault()
    dispatch (
      createNewTripAsync({
        name: state.trips.tempTrip.tripName,
        email: state.users[0].email,
        budget: state.trips.tempTrip.budget,
        dates: state.trips.tempTrip.dates
      })
    )
  }

  // const shareNewTrip = (e) => {
  //   e.preventDefault()
  //   dispatch (
     
  //   )
  //   // call async here

  // }
  // console.log(tripName)
  // console.log(datesInStore)
  // const shareLink = new URL(`http://localhost:3000/trips/${}`)

  return (
    <div className="share-pg">
      <div className="share-card-wrapper">
        <TripCard />
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
        {/* <input
          className="share-email-input"
          type="email"
          name="share-email"
          placeholder="Your friend's email"
          minLength="4"
          maxLength="64"
          autoComplete="off"
          onBlur={(e) => setShareEmails([...shareEmails, e.target.value])}
        />
        <input
          className="share-email-input"
          type="email"
          name="share-email"
          placeholder="Your friend's email"
          minLength="4"
          maxLength="64"
          autoComplete="off"
          onBlur={(e) => setShareEmails([...shareEmails, e.target.value])}
        /> */}

        {/* <button
          className="add-friends-btn share-btn"
          onClick={(e) => addEmailInput(e)}
        >Add more friends</button> */}
        <button
          className="create-trip-btn share-btn"
          onClick={(e) => createTrip(e)}
        >Create this trip</button>
        <button
          // disabled={isDisabled}
          className="share-trip-btn share-btn"
        >Share</button>
      </form>
    </div>
  )
}






export default Share;