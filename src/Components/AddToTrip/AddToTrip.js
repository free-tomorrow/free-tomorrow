import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AddToTrip.scss';
import { useSelector, useDispatch } from 'react-redux';
import {editSharedTripAsync} from '../../state/tripSlice';

const AddToTrip = () => {

  const [sharedTrip, setSharedTrip] = useState('');
  const [newBudget, setNewBudget] = useState('');
  const [datesArr, setDatesArr] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const retrieveTrip = () => {
    let retrievedTrip = localStorage.getItem('sharedTrip')
    setSharedTrip(JSON.parse(retrievedTrip))
  }

  const updateTripDetails = (e) => {
    e.preventDefault();
    if(parseInt(newBudget) || datesArr.length) {
      dispatch (
        editSharedTripAsync({
          tripId: sharedTrip.id,
          userId: currentUser.id,
          budget: newBudget || null,
          dates: datesArr || null
        })
        )
        navigate(`/dashboard/${currentUser.id}`)
      } else {
        navigate(`/dashboard/${currentUser.id}`)
      }
      localStorage.removeItem('sharedTrip')
      localStorage.removeItem('sharedTripId')
  }

  const retrieveDates = () => {
    if(sharedTrip.id) {
      const allDates = sharedTrip.possible_dates.map((dateSet) => {
        let startDate = new Date(dateSet.start_date).toDateString();
        let endDate = new Date(dateSet.end_date).toDateString();
        let dateId = sharedTrip.possible_dates.indexOf(dateSet)
      
        return (
          <div key={dateId} className="date-radio">
            <input type="checkbox" onChange={(e) => updateDates(e)} value={[startDate, endDate]} id={dateId} key={dateId}></input><label htmlFor={dateId}>{startDate} to {endDate}</label>
          </div>
        )
      })
      return allDates;
    }
  }


  const lowerBudget = (e) => {
    setNewBudget(e.target.value)
  }

  const generateBudgets = () => {
    let budgetOptions = [250, 500, 1000, 1500, 2000, 2001]
    let filteredBudgets = budgetOptions.filter((num) => num < sharedTrip.budget)
    return filteredBudgets.map((num) => {
      return (
        <button className="addpg-budget-btn" value={num} key={num} onClick={(e) => lowerBudget(e)}>{num}</button>
      )
    })
  }

  

  useEffect(() => {
    retrieveTrip()
    let retrievedUser = localStorage.getItem('savedUser');
    setCurrentUser(JSON.parse(retrievedUser));
  }, [])

  

  return (
    <div className="add-to-trip">
      <div className="greeting-container">
        <h1>You've been invited to</h1>
        <h2>{sharedTrip.name}!</h2>
      </div>
      <div className="dates-container">
        <h2>Do these dates work for you?</h2>
        <div className="addpg-dates-list">
          {retrieveDates()}
        </div>
        
      </div>
      <div className="budget-container">
        <h2>Would you like to lower the budget?</h2>
        <p>It's currently set to ${sharedTrip.budget}.</p>
        <div className="addpg-budget-list">
          {generateBudgets()}
        </div>
      </div>
      <Link to="/dashboard" style={{height: "fit-content"}}><button className="accept-trip-btn" onClick={(e) => updateTripDetails(e)} >Accept this trip</button></Link>
    </div>
  )
}

export default AddToTrip;