import '../Dashboard/Dashboard.scss';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TripCard from '../TripCard/TripCard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState('');
  const state = useSelector((state) => state.users[0]);

  const retrieveUser = () => {
    setCurrentUser(state)
  }

  useEffect(() => {
    retrieveUser()
  }, [])

  console.log(state)
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h1>Welcome {currentUser.name}</h1>
        <p>Here's an overview of your account</p>
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