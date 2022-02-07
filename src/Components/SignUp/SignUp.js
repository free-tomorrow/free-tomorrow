import './SignUp.scss';
import React, { useState } from 'react';


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')

  return (
    <div className="signup">
      <div className="signup-content">
        <article>
          <h1> Welcome to Free Tomorrow!</h1>
        </article>
        <form className="signup-form">
          <input
            className="signup-input-name"
            type="text"
            maxLength="64"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
          className="signup-input email"
          type="text"
          maxLength="64"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />


        </form>


      </div>


    </div>
  )


}



export default SignUp;
