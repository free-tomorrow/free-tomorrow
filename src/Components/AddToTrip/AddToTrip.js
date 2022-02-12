import React, { useState, useEffect } from 'react';
import './AddToTrip.scss';
import { useSelector } from 'react-redux';

const AddToTrip = () => {

  const state = useSelector((state) => state);
  const [sharedTrip, setSharedTrip] = useState('');

  const retrieveTrip = () => {
    setSharedTrip(state.trips.sharedTrip)
  }

  useEffect(() => {
    retrieveTrip()
  }, [])
  

  return (
    <>
      <div className="greeting-container">
        <h1>You've been invited to {sharedTrip.name}!</h1>
      </div>
      <div className="dates-container">
        <h2>Do these dates work for you?</h2>

        
      </div>
      <div className="budget-container">

      </div>
      <button>Accept this trip?</button>
    </>
  )
}

export default AddToTrip;