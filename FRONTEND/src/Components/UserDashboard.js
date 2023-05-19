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

    if (id == "feedback") setContent(<Feedback />);


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
                <Link href="#">Statistics</Link>
              </li>
            </ul>
            <hr />

            <ul>
              <li>
                <Link href="#">
                  <p>Tests Given</p>
                </Link>
              </li>
              <li>
                <Link href="#">Test Appeared</Link>
              </li>
              <li>
                <Link href="#">Test Requested</Link>
              </li>
            </ul>
            <hr />

            <ul>
              <li>
                <Link href="#">
                  <p>Feedback</p>
                </Link>
              </li>
              <li>
                <Link href="#" id="feedback" onClick={handleClick} >Give FeedBack</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Help</Link>
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
