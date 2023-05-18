import React from "react";
import "../CSS/DashboardUser.css";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, 
  Navigate,Link, BrowserRouter } from 'react-router-dom';

import UserProfile from './User Dashboard/UserProfile';
 import EditProfile from './User Dashboard/EditProfile';
 import Help from './User Dashboard/Help';
 import Statistics from "./User Dashboard/Statistics"; 





function DashboardUser() {
  const [isprofilecard, setIsprofilecard] = useState(true);
  const [isorderedmedicines, setIsorderedmedicines] = useState(false);
  const [islabtest, setIslabtest] = useState(false);

  const [content,setContent]=useState(UserProfile);
  
  function handleClick(event)
{
  var id=event.currentTarget.id;
  if(id=="userprofile")
  setContent(UserProfile);

if(id=="editprofile")
setContent(EditProfile);

if(id=="help")
setContent(Help);

if(id=="statistics")
setContent(Statistics);


}

  return (
    <>
    
    <div className="UserDashBoard-Page">

  
    <div className="UserDashboard-Sidebar">
     
     <ul>
     <li >
         <Link to="#" id="userprofile" onClick={handleClick}><p>User Profile</p></Link>
       </li>
       <li >
         <Link to="#"  id="editprofile"   onClick={handleClick} >Edit Profile</Link>
       </li>
       

       <li >
         <Link href="#" id="statistics"   onClick={handleClick}>Statistics</Link>
       </li>
       
     </ul>
     <hr/>
     
 
     <ul>
     <li >
         <Link href="#" ><p>Tests Given</p></Link>
       </li>
       <li >
         <Link href="#" >Test Appeared</Link>
       </li>
       <li >
         <Link href="#" >Test Requested</Link>
       </li>
      
       
       
     </ul>
 <hr/>
 
 
 
     <ul>
     <li >
         <Link href="#" ><p>Feedback</p></Link>
       </li>
       <li >
         <Link href="#" >Give FeedBack</Link>
       </li>
       <li >
         <Link href="#" >FAQs</Link>
       </li>
       <li >
         <Link href="#" id="help"   onClick={handleClick}>Help</Link>
       </li>
       
     </ul>
 
    </div>



    
     
    {content}
   


    </div>
    </>
  );
}











export default DashboardUser;
