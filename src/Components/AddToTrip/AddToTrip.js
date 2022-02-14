import React, { useState, useEffect } from 'react';
import './AddToTrip.scss';
import { useSelector } from 'react-redux';
import tripSlice from '../../state/tripSlice';

const AddToTrip = () => {

  const state = useSelector((state) => state);
  const [sharedTrip, setSharedTrip] = useState('');
  const [newBudget, setNewBudget] = useState(0);
  let allDates;

  const retrieveTrip = () => {
    let retrievedTrip = localStorage.getItem('sharedTrip')
    setSharedTrip(JSON.parse(retrievedTrip))
  }

  const updateTripDetails = (e) => {
    e.preventDefault()
  }

  const retrieveDates = () => {
    console.log(sharedTrip)
    // need to iterate through the sharedTrip.dates which doesn't exist yet
    // return (
    //   <>
    //     <input type="radio">{trip.start_date} to {trip.end_date}</input>
    //   </>
    // )
  }

  const lowerBudget = (e) => {
    setNewBudget(e.target.value)
  }

  const generateBudgets = () => {
    let budgetOptions = [250, 500, 1000, 1500, 2000, 2001]
    let filteredBudgets = budgetOptions.filter((num) => num < sharedTrip.budget)
    return filteredBudgets.map((num) => {
      return (
        <button value={num} onClick={(e) => lowerBudget(e)}>{num}</button>
      )
    })
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
        {retrieveDates()}
        
      </div>
      <div className="budget-container">
        <h2>Would you like to lower the budget?</h2>
        <p>It's currently set to ${sharedTrip.budget}.</p>
          {generateBudgets()}
      </div>
      <button onClick={(e) => updateTripDetails(e)} >Accept this trip</button>
    </div>
  )
}

export default AddToTrip;