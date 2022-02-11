import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Login.scss';
import { getUserAsync } from '../../state/userSlice';

const Login = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const stateUsers = useSelector((state) => state.users)
  console.log('before functions>>', stateUsers[0])


  const redirect = () => {
    // setTimeout(() => {
    //   console.log('REDIRECT<><>', stateUsers[0])
    //   window.location.replace(`http://localhost:3000/dashboard`)
    // }, 2000)
  }

  const logUserIn = (e) => {
    e.preventDefault()
    if (!value) {
      console.log("Please enter an email")
    } else {
      dispatch(getUserAsync({
        email: value
      })
      )
        .then(console.log('LOGIN<><>', stateUsers[0]))

      // redirect()
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
          <Link to="/dashboard"
            style={{ border: "1px solid red" }}>HERE
          </Link>
        </form>
      </div>
    </div >
  )

}

export default Login;