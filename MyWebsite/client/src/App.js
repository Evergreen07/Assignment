import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './App.css';
import Navbar from './components/layout/Navbar';
import Homescreen from './components/screens/Homescreen';
import UserScreen from './components/screens/UserScreen';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path='/' element = {<Homescreen />} />
            <Route path='/users' element = {<UserScreen />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
