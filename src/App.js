import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Schedule from './Components/Schedule/Schedule';
import Budget from './Components/Budget/Budget';
import Share from './Components/Share/Share';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import AddToTrip from './Components/AddToTrip/AddToTrip';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import './App.scss';


const App = () => {


  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/share" element={<Share />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/:id" element={<Homepage />} />
        <Route path="/add" element={<AddToTrip />} />
      </Routes>
    </main>
  )

}

export default App;
