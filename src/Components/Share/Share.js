import './Share.scss';
import TripCard from '../TripCard/TripCard';
import { useSelector, useDispatch } from 'react-redux';
import React, {useState} from 'react'
import { createNewTripAsync, addEmails } from '../../state/tripSlice';

const Share = () => {

  const [tripName, setTripName] = useState('')
  const [shareEmails, setShareEmails] = useState([])
  const trip = useSelector((state) => state.trips.tempTrip)
  const user = useSelector((state) => state.users)
  const datesInStore = useSelector((state) => state.trips.tempTrip.dates)
  const dispatch = useDispatch()

  const addEmailInput = (e) => {
    e.preventDefault()
    // const newInput =
    return (
      <input type="email" name="share-email" placeholder="Your friend's email"/>
    )
  }

  const createTrip = (e) => {
    e.preventDefault()
    dispatch (
      createNewTripAsync({
        tripInfo: {
          name: tripName, 
          email: user.email,
          budget: trip.budget
        },
      dates: datesInStore}),
      addEmails(
        shareEmails
      )
    )
  }

  const shareNewTrip = (e) => {
    e.preventDefault()
    dispatch (
     
    )
    // call async here

  }
  console.log(tripName)
  console.log(datesInStore)
  // const shareLink = new URL(`http://localhost:3000/trips/${tripId}`)

  return (
    <div className="share-pg">
      <div className="share-card-wrapper">
        <TripCard/>
      </div>
      <form>
        <input type="text" placeholder="Name your trip!" autoComplete="off" onBlur={(e) => setTripName(e.target.value)}/>
        <input type="email" name="share-email" onBlur={(e) => setShareEmails([...shareEmails, e.target.value])} placeholder="Your friend's email" autoComplete="off"/>
        <input type="email" name="share-email" onBlur={(e) => setShareEmails([...shareEmails, e.target.value])} placeholder="Your friend's email" autoComplete="off"/>

        <button onClick={(e) => addEmailInput(e)}>Add more friends</button>

        <button onClick={(e) => createTrip(e)}>Create this trip</button>
        <button >Share</button>
      </form>
    </div>
  )
}






export default Share;