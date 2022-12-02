import '../CSS/Homepage.css';
import title_img from "../Images/homepage.png"
import signup from "../Images/signup.png"

import { BrowserRouter as Router, Routes, Route, 
  Navigate,Link } from 'react-router-dom';

import React from "react";

function Title_desc() {
    return (
      <div className="title">
        <div className="title_desc">
        <h1>
        Online Examination System
        </h1>

        <h2>
        We provide a number of Test Series and Mock Tests to practice 
        any Competative exam or to crack a Coding Interview .
        </h2>

         <Link to="Signup" ><img src={signup} /></Link>

      </div>

      

      </div>
    );
  }
  
  export default Title_desc;