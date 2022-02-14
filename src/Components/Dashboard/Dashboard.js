import '../Dashboard/Dashboard.scss';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TripCard from '../TripCard/TripCard';
import { Link, useLocation } from 'react-router-dom';
import { store } from '../../state/store';
import { addUserToStore } from '../../state/userSlice';
import { getAllTripsAsync } from '../../state/tripSlice';

const Dashboard = () => {
  const state = useSelector((state) => state);
  const [currentUser, setCurrentUser] = useState('');
  const [currentTrips, setCurrentTrips] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  console.log(location, 'pathname');
  const retrievedUser = localStorage.getItem('savedUser');
  const parsedUser = JSON.parse(retrievedUser);


  const sendUserToStore = () => {
    dispatch(
      addUserToStore(parsedUser)
    )
    setCurrentUser(parsedUser)
    setCurrentTrips(parsedUser['trip_set'])
  }



  // const getAllTrips = () => {
  //   dispatch(
  //     getAllTripsAsync()
  //     )
  //     .then(() => {
  //     })
  //   }

  console.log(currentTrips, 'CURRENTTRIPS')


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
    // getAllTrips()
  }, [])
  // setTimeout(() => {
  //   tripCards = createTripCards()

  // }, 4000)

  // useEffect(() => {
  //   currentUser ? tripCards = createTripCards() : console.log('thing!')
  // }, [currentUser])


  console.log(state.users['trip_set'], "CURRENT USER DASHBOARD")
  if (!state.users.id) {
    return (
      <h1>LMAO SUPER FUCK</h1>
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
          <Link to="/schedule">
            <button className="dashboard-create-btn">Create a new trip</button>
          </Link>
          </div>
          <div className="dash-cards-wrapper">
            <h2>Your Trips</h2>
            <div className="dashboard-cards">
              {createTripCards()}
            </div>
          </div>
          {/* <p>You've been invited on a trip! We need a little more info.</p>
          <Link to="/add"><button>Click here</button></Link> */}
        </div>
      </div>
    )
  }
}

export default Dashboard