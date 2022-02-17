import '../Dashboard/Dashboard.scss';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TripCard from '../TripCard/TripCard';
import { Link, useLocation } from 'react-router-dom';
import { store } from '../../state/store';
import { addUserToStore } from '../../state/userSlice';
import { getAllTripsAsync, getSharedTripAsync, getUserTripsAsync } from '../../state/tripSlice';

const Dashboard = () => {
  const state = useSelector((state) => state);
  const [currentUser, setCurrentUser] = useState('');
  const [currentTrips, setCurrentTrips] = useState([]);
  const [sharedTripId, setSharedTripId] = useState('')
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const retrievedUser = localStorage.getItem('savedUser');
  const parsedUser = JSON.parse(retrievedUser);
  // let currentUserCards;


  const sendUserToStore = () => {
    dispatch(
      addUserToStore(parsedUser)
    )
    setCurrentUser(parsedUser)

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
        <p>You have no pending trip invitations</p>
      )
    } else {
      return (
        <div className="invited-container">
          <p>You've been invited on a trip! We need a little more info...</p>
          <Link to="/add"><button className="add-to-trip-btn">Click here</button></Link>
        </div>
      )
    }
  }

  useEffect(() => {
    console.log(currentTrips)
    
  }, [currentTrips])



  const createTripCards = () => {
    if(currentUser.trip_set) {
     const currentUserCards = state.users.trip_set.map((trip) => {
        return (
          <TripCard
            key={Math.floor(Math.random() * Date.now())}
            tripName={trip.name}
            createdBy={trip.created_by}
            confirmed={trip.confirmed}
            budget={trip.budget}
            dates={trip.possible_dates}
          />
          )
        })
        return currentUserCards
      }
      else {
       
      }
    }

  useEffect(() => {
    sendUserToStore()
    // dispatch (
    //   getUserTripsAsync(parsedUser.id)
    //   )
        getSharedTrip()
        // setCurrentTrips(state.trips.allTrips)
        // createTripCards()
    

    
    // setCurrentTrips(state.trips.allTrips)
    // localStorage.setItem('userTrips', currentTrips)
  }, [])

  // useEffect(() => {
  //   setCurrentTrips(state.trips.allTrips)
  //   // localStorage.setItem('userTrips', currentTrips)
  // }, [sharedTripId])


  if (!state.users.id) {
    return (
      <h1>UH OH!</h1>
    )
  } else {
    return (
      <div className="dashboard">
        <div className="dashboard-greeting">
          <h1>Welcome {currentUser.name}</h1>
          <p>Here's an overview of your account</p>
        </div>
        <div className="dashboard-content">
          <div className="create-invite-wrapper">
          <Link to="/schedule" >
            <button className="dashboard-create-btn">Create a new trip</button>
          </Link>
          {showSharedTrip()}
          </div>
          <div className="dash-cards-wrapper">
            <div className="dashboard-cards">
              {createTripCards()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard