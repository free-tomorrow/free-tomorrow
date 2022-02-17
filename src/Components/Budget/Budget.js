import './Budget.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBudget } from '../../state/tripSlice.js';

const Budget = () => {

  const [budget, setBudget] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state);


  const createBudget = () => {
    dispatch (
      addBudget(parseInt(budget))
    )
  }

  const budgetDisplay = () => {
    let phrase;
    if (budget < 500 && budget > 1) {
      phrase = 'Set the budget as low as humanly possible?'
    } else if (budget > 2000) {
      phrase = 'Proceed without budgeting?'
    } else if (budget) {
      phrase = `Set the budget to $${budget}?`
    } 
    
    if(budget) {
      return (
        <Link to="/share" style={{width: "fit-content"}}>
          <button onClick={createBudget} className="budget-continue-btn">{phrase}</button>
        </Link>
      )
    }
  }

  const cheekyMsg = () => {
    if(budget < 500 && budget > 1) {
      return (
        <p className="cheeky-msg">Hey, we get it. We're not made of money.</p>
      )
    } else if (budget > 2000) {
      return (
        <p className="cheeky-msg">Hope your friends are ready to get spendy!</p>
      )
    }
  }

  return (
    <div className="budget-form">
      <div className="txt-container">
        <h1>What's your budget for this?</h1>
        <p>No pressure on our end. Just pick whatever works for you.</p>
      </div>
      <div className="budget-btn-container">
        <button onClick={(e) => setBudget(e.target.value)} value={250} className="budget-btn">I'm broke. Keep it under $250 please!</button>
        <button onClick={(e) => setBudget(e.target.value)} value={500} className="budget-btn">$500</button>
        <button onClick={(e) => setBudget(e.target.value)} value={1000} className="budget-btn">$1000</button>
        <button onClick={(e) => setBudget(e.target.value)} value={1500} className="budget-btn">$1500</button>
        <button onClick={(e) => setBudget(e.target.value)} value={2000} className="budget-btn">$2000</button>
        <button onClick={(e) => setBudget(e.target.value)} value={2001} className="budget-btn">The sky's the limit!</button>
      </div>
      <div className="budget-proceed-container">
        {budgetDisplay()}
        {cheekyMsg()}
      </div>
    </div>
  )
}


export default Budget;

