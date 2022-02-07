import './SignUp.scss';
import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')

  return (
    <div className="signup">
      <div className="signup-content">
      <h1>Welcome to Free Tomorrow!</h1>
        <article className="signup-text">
          <p> </p>
        </article>
        <form className="signup-form">
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

          <button className="signup-pg-btn">Sign Up</button>
          {/* if including a signup button in the header, it needs to have a different className. 
          "header- signup-btn" */}
        </form>
      </div>
    </div>
  )


}



export default SignUp;
