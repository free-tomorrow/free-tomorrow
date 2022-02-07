import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../state/userSlice';
import './Login.scss';
//import {getUserAsync} from '../../state/userSlice;

const Login = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  //const currentUser = useSelector((state) => state.currentUser)
  const logUserIn = (e) => {
    e.preventDefault()
    if (!value) {
      console.log("Please enter an email")
    } else {
      dispatch(addUser({
        //dispatch will be getUserAsync once we have a server to work with
        id: 3,
        name: "Bob Loblaw",
        email: value
      }))
    }
    setValue('')
  }




  return (
    <div className="login">
      <div className="login-content">
        <h1>Good to see you again!</h1>
        <form className="login-form">
          <h2>Let's get you logged in.</h2>
          <input
            className="email-input"
            type="text"
            placeholder="Enter your email address"
            name="email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="login-btn"
            onClick={(e) => logUserIn(e)}>
            Log In</button>
        </form>
      </div>
    </div>
  )

}

export default Login;