import '../Dashboard/Dashboard.scss';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TripCard from '../TripCard/TripCard';
import { Link, useLocation } from 'react-router-dom';
import { store } from '../../state/store';
import { addUserToStore } from '../../state/userSlice';
import { getAllTripsAsync, getSharedTripAsync } from '../../state/tripSlice';

const Dashboard = () => {
  const state = useSelector((state) => state);
  const [currentUser, setCurrentUser] = useState('');
  const [currentTrips, setCurrentTrips] = useState([]);
  const [sharedTripId, setSharedTripId] = useState('')
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const retrievedUser = localStorage.getItem('savedUser');
  const parsedUser = JSON.parse(retrievedUser);


  const sendUserToStore = () => {
    dispatch(
      addUserToStore(parsedUser)
    )
    setCurrentUser(parsedUser)
    setCurrentTrips(parsedUser['trip_set'])
  }

  const getSharedTrip = () => {
    let tripId = localStorage.getItem('sharedTripId')
    setSharedTripId(tripId)
    dispatch (
      getSharedTripAsync(tripId)
    )
  }

  const showSharedTrip = () => {
    if(!sharedTripId) {
      return (
        <p>You have no pending trips.</p>
      )
    } else {
      return (
        <>
          <p>You've been invited on a trip! We need a little more info.</p>
          <Link to="/add"><button>Click here</button></Link>
        </>
      )
    }
  }


  // const getAllTrips = () => {
  //   dispatch(
  //     getAllTripsAsync()
  //     )
  //     .then(() => {
  //     })
  //   }



  const createTripCards = () => {
    const currentUserCards = state.users['trip_set'].map((trip) => {
      return (
        <TripCard
          key={Math.floor(Math.random() * .5)}
          tripName={trip.name}
          createdBy={trip.created_by}
          confirmed={trip.confirmed}
          budget={trip.budget}
        // users={trip.users}
        />
      )
    })
    return currentUserCards
  }

  useEffect(() => {
    sendUserToStore()
    getSharedTrip()

    // getAllTrips()
  }, [])
  // setTimeout(() => {
  //   tripCards = createTripCards()

  // }, 4000)

  if (!state.users.id) {
    return (
      <h1>LMAO SUPER FUCK</h1>
    )
  } else {
    return (
      <div className="dashboard">
        <div className="dashboard-content">
          <h1>Welcome {currentUser.name}</h1>
          <p>Here's an overview of your account</p>
          {showSharedTrip()}
          <Link to="/schedule">
            <button className="create-trip-btn">Create a new trip</button>
          </Link>
          <div className="dashboard-cards">
            {createTripCards()}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard