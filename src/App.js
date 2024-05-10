import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import './App.css'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/report" element={<Report/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;