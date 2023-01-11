import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.js';
import Title_desc from './Components/Title_desc.js'
import Exams from './Components/Exams.js'
import Signup from './Components/Signup.js'
import Login from './Components/Login.js'
import Testlist from './Components/Testlist.js'
import Live from './Components/Live.js'
import Instruction from './Components/Instruction.js'
import Completion from './Components/Completion.js'
import About from './Components/About.js'
import Profile from './Components/Profile.js'
import UserDashboard from './Components/UserDashboard.js'

import { BrowserRouter as Router, Routes, Route, 
  Navigate,Link } from 'react-router-dom';

import React from "react";


function App() {
  return (
    <>
    
        
      <Router>

      <Header/>

      
      <Routes>
        <Route path="/" element={<Title_desc/>}/>
        <Route path="/Exams" element={<Exams/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Examlist" element={<Login/>}/>
        <Route path="/Instruction" element={<Instruction/>}/>
        <Route path="/Live" element={<Live/>}/>
        <Route path="/Completion" element={<Completion/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>
        <Route exact path="/Dashboard" element={<UserDashboard/>}/>

        <Route path="/About" element={<About/>}/>
        <Route path="/Testlist" element={<Testlist/>}/>

        <Route path="/Home" element={<Navigate replace to="/" />} />
      </Routes>

      </Router>
      </>
  
  );
};

export default App;
