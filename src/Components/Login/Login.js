import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import './Login.scss';

const Login = () => {
  const [value, setValue] = useState('');
  console.log(value)
  return (
    <div className="login">
      <div className="login-content">
        <h1>Good to see you again!</h1>
        <h2>Let's get you logged in.</h2>
        <form className="login-form">
          <input 
          className="email-input"
          type="text"
          placeholder="Enter your email address"
          name="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  )

}

export default Login;