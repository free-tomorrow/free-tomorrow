import './Budget.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Budget = () => {

  const [budget, setBudget] = useState('');
  const dispatch = useDispatch();

  const createBudget = () => {
    console.log(budget)

    // const budgetAsNum = 

    // dispatch (
    //   // useSelector()
    // )
  }

  // if budget < 500, text in button should read "set the budget as low as possible? don't worry, we get it."
  // if budget > 2000, text in button should read "proceed without budgeting? hope your friends are ready to get spendy!"

  const budgetDisplay = () => {
    let phrase;
    if (budget < 500 && budget > 1) {
      phrase = 'Set the budget as low as humanly possible?'
    } else if (budget > 2000) {
      phrase = 'Proceed without budgeting?'
    } else if (budget) {
      phrase = `Set the budget to $${budget}?`
    } else {
      phrase = 'Take your pick.'
    }
    return phrase;
  }

  return (
    <div className="budget-form">
      <div className="txt-container">
        <h1>What's your budget for this?</h1>
        <p>No pressure on our end. Just pick whatever works for you.</p>
      </div>
      <div className="btn-container">
        <button onClick={(e) => setBudget(e.target.value)} value={499}>I'm broke. Keep it cheap please!</button>
        <button onClick={(e) => setBudget(e.target.value)} value={500}>$500</button>
        <button onClick={(e) => setBudget(e.target.value)} value={1000}>$1000</button>
        <button onClick={(e) => setBudget(e.target.value)} value={1500}>$1500</button>
        <button onClick={(e) => setBudget(e.target.value)} value={2000}>$2000</button>
        <button onClick={(e) => setBudget(e.target.value)} value={2001}>The sky's the limit!</button>
      </div>
      <Link to="/share">
        <button onClick={createBudget}>{budgetDisplay()}</button>
      </Link>
    </div>
  )
}


export default Budget;