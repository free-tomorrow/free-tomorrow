import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AddToTrip.scss';
import { useSelector, useDispatch } from 'react-redux';
import {editSharedTripAsync} from '../../state/tripSlice';

const AddToTrip = () => {

  const state = useSelector((state) => state);
  const [sharedTrip, setSharedTrip] = useState('');
  const [newBudget, setNewBudget] = useState('');
  const [datesArr, setDatesArr] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const dispatch = useDispatch();

  const retrieveTrip = () => {
    let retrievedTrip = localStorage.getItem('sharedTrip')
    setSharedTrip(JSON.parse(retrievedTrip))
  }

  const updateTripDetails = (e) => {
    e.preventDefault();
    console.log(currentUser, 'currentUser')
    dispatch (
      editSharedTripAsync({
        tripId: sharedTrip.id,
        userId: currentUser.id,
        budget: newBudget,
        dates: datesArr
      })
    )
    // this is where we need to call the PATCH thunk 
    // to update the trip object and send new dates or budget IF AND ONLY IF they've changed (if they got added to localStorage)
  }

  const retrieveDates = () => {
    if(sharedTrip.id) {
      const allDates = sharedTrip.possible_dates.map((dateSet) => {
        let startDate = new Date(dateSet.start_date).toDateString();
        let endDate = new Date(dateSet.end_date).toDateString();
        console.log(dateSet.start_date)
        let dateId = sharedTrip.possible_dates.indexOf(dateSet)
        // console.log(startDate)
        return (
          <div className="date-radio">
            <input type="checkbox" onChange={(e) => updateDates(e)} value={[startDate, endDate]} id={dateId} key={dateId}></input><label htmlFor={dateId}>{startDate} to {endDate}</label>
          </div>
        )
      })
      return allDates;
    }
  }

  const updateDates = (e) => {
    if(!datesArr.includes(e.target.value)) {
      
    } else {
      // let index = datesArr.indexOf(e.target.value)
      // datesArr.splice(index, 1)
      // console.log(datesArr)
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
        <h1>You've been invited to {sharedTrip.name}!</h1>
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
      <Link to="/dashboard"><button className="accept-trip-btn" onClick={(e) => updateTripDetails(e)} >Accept this trip</button></Link>
    </div>
  )
}

export default AddToTrip;