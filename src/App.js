import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import Schedule from './Components/Schedule/Schedule';
import Budget from './Components/Budget/Budget';
import Share from './Components/Share/Share';
import './App.scss';

const App = () => {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/share" element={<Share />} />
      </Routes>

    </main>
  )

}

export default App;
