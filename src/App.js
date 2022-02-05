import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Schedule from './Components/Schedule/Schedule';
import Budget from './Components/Budget/Budget';
import Share from './Components/Share/Share';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import './App.scss';

import {addUser, deleteUser} from './state/userSlice';

const App = () => {

  const state = useSelector((state) => state);
  const dispatch = useDispatch()

  const doThing = () => {
    console.log(state)
    dispatch(
      addUser({name: 'Dave'})
    )
  }

  const deleteThing = () => {
    console.log('deleted')
    dispatch(
      deleteUser({name: 'Dave'})
    )
  }

  return (
    <main className="App">
      <h1>Hi</h1>
      <button onClick={doThing}>Click me!</button>
      <button onClick={deleteThing}>Delete</button>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage addUser={doThing} />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/share" element={<Share />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  )

}

export default App;
