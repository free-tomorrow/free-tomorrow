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
  let tripCards;

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

  // let cardsArray = [];
  const createTripCards = () => {
    // const currentUserCards = currentTrips ? currentTrips.filter((trip) => {
    //   trip.users.filter((user) => {
    //     console.log('USERR',user)
    //     return user.id === currentUser.id
    //   })
    // })
    //   : console.log('thing')
    //   console.log(currentUserCards, "CURRENTUSERCARDS")
    // return currentUserCards
    const currentUserCards = currentTrips ? currentTrips.reduce((arr, trip) => {
      trip.users.forEach((user) => {
        if(user.id === currentUser.id){
          arr.push(trip)
        }
      })
      return arr
    }, [])
    :console.log('Ass')
    console.log(currentUserCards, "CurrentUserCards<><><>")
    return currentUserCards
  }


  //iterate through the trips array
  //Check the .users array
  //if the user.id of the trip matches the currentUser's id, map THOSE TRIP CARDS DUDE HELL YEAH FUCKIN RIGHT

  useEffect(() => {

    createTripCards()

    tripCards = currentUser ? currentUser['trip_set'].map((trip) => {
      return (
        <TripCard
          key={Math.floor(Math.random() * .5)}
          budget={trip.budget}
          confirmed={trip.confirmed}
          createdBy={trip.created_by}
          tripName={trip.name}
        />
      )
    }) : 'loading'
    return tripCards
  }, [currentUser])

  console.log(currentUser['trip_set'], "CURRENT USER DASHBOARD")




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