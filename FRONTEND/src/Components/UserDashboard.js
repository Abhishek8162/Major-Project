import React from "react";
import "../CSS/DashboardUser.css";
import Signup from "./Signup";

import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  BrowserRouter,
} from "react-router-dom";

import UserProfile from "./User Dashboard/UserProfile";
import EditProfile from "./User Dashboard/EditProfile";
import Feedback from "./User Dashboard/Feedback";
import Help from "./User Dashboard/Help";
import Statistics from "./User Dashboard/Statistics";
import Testappeared from "./User Dashboard/Testappeared";
import Testrequested from "./User Dashboard/Testrequested";
import Faq from "./User Dashboard/Faq"

function DashboardUser() {
  const [isprofilecard, setIsprofilecard] = useState(true);
  const [isorderedmedicines, setIsorderedmedicines] = useState(false);
  const [islabtest, setIslabtest] = useState(false);

  const [content, setContent] = useState(UserProfile);

  // function handleContent() {
  //   setContent(<EditProfile/>)
  //   console.log("wirkinb")
    
  // }

  function handleClick(event) {
    var id = event.currentTarget.id;
    if (id == "userprofile") setContent(<UserProfile />);

    if (id == "editprofile") setContent(<EditProfile />);

    if (id == "Feedback") setContent(<Feedback />);

    if (id == "help") setContent(<Help />);

    if (id == "Faq") setContent(<Faq />);

    if (id == "Statistics") setContent(<Statistics />);

    
    if (id == "Testrequested") setContent(<Testrequested />);
    
    if (id == "Testappeared") setContent(<Testappeared />);



  }

  return (
    <>
      {sessionStorage.getItem("isAuthenticated") ? (
        <div className="UserDashBoard-Page">
          <div className="UserDashboard-Sidebar">
            <ul>
              <li>
                <Link to="#" id="userprofile" onClick={handleClick}>
                  <p>User Profile</p>
                </Link>
              </li>
              <li>
                <Link to="#" id="editprofile" onClick={handleClick}>
                  Edit Profile
                </Link>
              </li>

              <li>
                <Link href="#" id="Statistics" onClick={handleClick}>Statistics</Link>
              </li>
            </ul>
            <hr />

            <ul>
              <li>
                <Link href="#" >
                  <p>Tests Given</p>
                </Link>
              </li>
              <li>
                <Link href="#" id="Testappeared" onClick={handleClick}>Test Appeared</Link>
              </li>
              <li>
                <Link href="#" id="Testrequested" onClick={handleClick}>Test Requested</Link>
              </li>
            </ul>
            <hr />

            <ul>
              <li>
                <Link href="#" >
                  <p>Feedback</p>
                </Link>
              </li>
              <li>
                <Link href="#" id="Feedback" onClick={handleClick} >Give FeedBack</Link>
              </li>
              <li>
                <Link href="#" id="Faq" onClick={handleClick}>FAQs</Link>
              </li>
              <li>
                <Link href="#"id="help" onClick={handleClick}>Help</Link>
              </li>
            </ul>
          </div>

          {content}
        </div>
      ) : (
        <Signup/>
      )}
    </>
  );
}

export default DashboardUser;
