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
  const [tripCards, setTripCards] = useState('');
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  console.log(location, 'pathname');
  const retrievedUser = localStorage.getItem('savedUser');
  const parsedUser = JSON.parse(retrievedUser);
  // let tripCards;
  const sendUserToStore = () => {
    dispatch(
      addUserToStore(parsedUser)
    )
    setCurrentUser(parsedUser)
  }

  const getAllTrips = () => {
    dispatch(
      getAllTripsAsync()
    )
      .then(() => {
        setCurrentTrips(state.trips.allTrips)
      })
  }

  useEffect(() => {
    sendUserToStore()
    getAllTrips()
  }, [])
  
  const createTripCards = () => {
    const currentUserCards = currentTrips ? currentTrips.reduce((arr, trip) => {
      trip.users.forEach((user) => {
        console.log(user, "USER")
        if (user.id === currentUser.id) {
          arr.push(trip)
        }
      })
      return arr
    }, [])
    : console.log('Ass')
    console.log(currentUserCards, "CurrentUserCards<><><>")
    
    
    setTripCards(currentUserCards.map((card) => {
      return (
        <TripCard
        key={card.id}
        id={card.id}
        budget={card.budget}
        createdBy={card.created_by}
        tripName={card.name}
        users={card.users}
        />
        )
      })
      )
    }
    
    useEffect(() => {
      createTripCards()
    }, [currentUser])
    //change useEffect to update on something else?
    
    console.log(currentUser['trip_set'], "CURRENT USER DASHBOARD")
    console.log(currentTrips, "CURRENTTTTTT")



  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h1>Welcome {currentUser.name}</h1>
        <p>Here's an overview of your account</p>
        <p>You've been invited on a trip! We need a little more info.</p>
        <Link to="/add"><button>Click here</button></Link>
        <Link to="/schedule">
          <button className="create-trip-btn">Create a new trip</button>
        </Link>
        <div className="dashboard-cards">
          {tripCards}
        </div>
      </div>
    </div>
  )
}

export default Dashboard