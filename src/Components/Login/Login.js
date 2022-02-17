import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Login.scss';
import { getUserAsync } from '../../state/userSlice';
import { store } from '../../state/store'

const Login = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const state = useSelector((state) => state);
  let userId;

  const logUserIn = (e) => {
    e.preventDefault()
    if (!value) {
      
    } else {
      dispatch(getUserAsync({
        email: value
      })
      )
        .then(() => {
          const retrievedUser = localStorage.getItem('savedUser')
          const parsedUser = JSON.parse(retrievedUser)
          userId = parsedUser.id

          navigate(`/dashboard/${userId}`)
        })
    }
  }

  const validInput = value.includes('@') && value.includes('.') && value.length > 3 ? true : false

  return (
    <div className="login">
      <div className="login-content">
        <h1>Good to see you again!</h1>
        <form className="login-form">
          <h2>Let's get you logged in.</h2>
          <input
            className="login-email-input"
            type="email"
            placeholder="Enter your email"
            name="email"
            maxLength="64"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button
            className="loginpg-btn"
            disabled={!validInput}
            onClick={(e) => logUserIn(e)}>
            Log In</button>
        </form>
      </div>
    </div >
  )

}

export default Login;