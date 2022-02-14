import React, { useState, useEffect } from 'react';
import './AddToTrip.scss';
import { useSelector } from 'react-redux';

const AddToTrip = () => {

  const state = useSelector((state) => state);
  const [sharedTrip, setSharedTrip] = useState('');

  const retrieveTrip = () => {
    let retrievedTrip = localStorage.getItem('sharedTrip')
    setSharedTrip(JSON.parse(retrievedTrip))
  }

  const updateTripDetails = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    retrieveTrip()
  }, [])
  

  return (
    <div className="add-to-trip">
      <div className="greeting-container">
        <h1>You've been invited to {sharedTrip.name}!</h1>
      </div>
      <div className="dates-container">
        <h2>Do these dates work for you?</h2>

        
      </div>
      <div className="budget-container">

      </div>
      <button onClick={(e) => updateTripDetails(e)} >Accept this trip</button>
    </div>
  )
}

export default AddToTrip;