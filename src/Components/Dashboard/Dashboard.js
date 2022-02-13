import '../Dashboard/Dashboard.scss';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TripCard from '../TripCard/TripCard';
import { Link, useLocation } from 'react-router-dom';
import {store} from '../../state/store';
import { addUserToStore } from '../../state/userSlice';

const Dashboard = () => {
  const state = useSelector((state) => state);
  const [currentUser, setCurrentUser] = useState('');
  const dispatch = useDispatch()
  const location = useLocation().pathname;
  console.log(location, 'pathname')
  const retrievedUser = localStorage.getItem('savedUser')
  const parsedUser = JSON.parse(retrievedUser)

  const sendUserToStore = () => {
    dispatch (
      addUserToStore(parsedUser)
    )
    setCurrentUser(parsedUser)
  }

  useEffect(() => {
    sendUserToStore()
  }, [])



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
          <TripCard />
          <TripCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard