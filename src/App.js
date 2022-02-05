import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Schedule from './Components/Schedule/Schedule';
import Budget from './Components/Budget/Budget';
import Share from './Components/Share/Share';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import './App.scss';

import {changeName} from './state/reducer';

const App = () => {

  const [newName, setNewName] = useState('Britney')
  const dispatch = useDispatch()

  const doThing = () => {
    dispatch(
      changeName({name: 'Dave'})
    )
  }

  return (
    <main className="App">
      <h1>{newName}</h1>
      <button onClick={doThing}>Click me!</button>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
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
