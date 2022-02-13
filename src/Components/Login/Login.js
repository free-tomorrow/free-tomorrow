import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Login.scss';
import { getUserAsync } from '../../state/userSlice';
import { store } from '../../state/store'

const Login = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  let userId;


  const logUserIn = (e) => {
    e.preventDefault()
    if (!value) {
      console.log("Please enter an email")
    } else {
      dispatch(getUserAsync({
        email: value
      })
      )
      const retrievedUser = localStorage.getItem('savedUser')
      const parsedUser = JSON.parse(retrievedUser)
      userId = parsedUser.id
      window.location.replace(`/dashboard/${userId}`)
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
          {/* <Link to={`/dashboard/${userId}`}
            style={{ border: "1px solid red" }}>HERE
          </Link> */}
        </form>
      </div>
    </div >
  )

}

export default Login;