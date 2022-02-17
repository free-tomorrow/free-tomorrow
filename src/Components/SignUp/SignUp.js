import './SignUp.scss';
import React, { useState } from 'react';
import { createUserAsync } from '../../state/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state)
  const [id, setId] = useState('')
  let userId;


  const registerUser = (e) => {
    e.preventDefault();
    if (!username || !email) {
      //need some error handling here
    } else {
      dispatch(createUserAsync({
        name: username,
        email: email
      }))
      .then(() => {
        navigate(`/dashboard/:${state.users.id}`)
      })
    }
    clearInputs()
  }

  const clearInputs = () => {
    setUsername('')
    setEmail('')
  }

  userId = useSelector((state) => {
    return state.users.id
  })

  return (
    <div className="signup">
      <div className="signup-content">
        <h1>Welcome to Free Tomorrow!</h1>
        <article className="signup-text">
          <p></p>
        </article>
        <form 
            className="signup-form">
          <p className="name-text">We'll just need your name</p>
          <input
            className="signup-input-name"
            type="text"
            maxLength="64"
            placeholder="Enter your name"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="email-text">And your email</p>
          <input
            className="signup-input-email"
            type="text"
            maxLength="64"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="signup-pg-btn" onClick={(e) => registerUser(e)}>Sign Up</button>
          {/* if including a signup button in the header, it needs to have a different className. 
          "header- signup-btn" */}
          <Link to={`/dashboard/${userId}`}>CLICK ME</Link>
        </form>
      </div>
    </div>
  )


}



export default SignUp;
