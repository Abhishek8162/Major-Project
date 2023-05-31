import { BrowserRouter as Router, Routes, Route, 
    Navigate,Link } from 'react-router-dom';
  
  import React from "react";

import '../CSS/Testlist.css'

function Testlist()
{

    return(
    <>
    <div className="Examtitle">
       <h1>{sessionStorage.getItem("Liveexamname")}</h1> 
    </div>

    <div className="Testlist">

      <h2>Mock Tests</h2>

     <Link to="/Instruction"> 
     <div className="tests">
<p>{sessionStorage.getItem("Liveexamname")} Mock Test 1</p>
<p>15 Questions | 15 Marks | 15 min</p>

     </div>
    </Link>

    <Link to="/Instruction"> 
     <div className="tests">
<p>{sessionStorage.getItem("Liveexamname")} Mock Test 2</p>
<p>15 Questions | 15 Marks | 15 min</p>

     </div>
    </Link>


    <Link to="/Instruction"> 
     <div className="tests">
<p>{sessionStorage.getItem("Liveexamname")} Mock Test 3</p>
<p>15 Questions | 15 Marks | 15 min</p>

     </div>
    </Link>

    <Link to="/Instruction"> 
     <div className="tests">
<p>{sessionStorage.getItem("Liveexamname")} Mock Test 4</p>
<p>15 Questions | 15 Marks | 15 min</p>

     </div>
    </Link>


    

    </div>
    
    </>

    );
}

export default Testlist;