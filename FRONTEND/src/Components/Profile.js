import React from 'react'
import '../CSS/Profile.css'
import { BrowserRouter as Router, Routes, Route, 
  Navigate,Link } from 'react-router-dom';

function Profile() {
  return (
    <>
    <div class="profilecontainer">
      <div class="">

        <Link to="/Dashboard">
         <h3>Dashboard</h3> 
        </Link>
        
        
    </div>
    </div>
    </>
  )
}

export default Profile