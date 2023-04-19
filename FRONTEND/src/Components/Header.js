import '../CSS/header.css';
import { BrowserRouter as Router, Routes, Route, 
  Navigate,Link } from 'react-router-dom';

import React from "react";


function Header() {
    return (
      <>
        <div class="topnav">
        <Link to="Home"><b> Home </b></Link>  
        <Link to="Exams"><b>Exams</b></Link>
        <Link to="UserDashboard"><b>Dashboard</b></Link>
        <Link to="Services"><b>Services</b></Link>
        <Link to="AdminDashboard"><b>Admin</b></Link>
        <Link to="About"><b>About</b></Link>
      </div>
       </>

 

    );
  }
  
  export default Header;