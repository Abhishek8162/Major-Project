import React from "react";
import { Link } from "react-router-dom";
import "../CSS/DashboardUser.css";

import { useState } from "react";

function DashboardUser() {
  const [isprofilecard, setIsprofilecard] = useState(true);
  const [isorderedmedicines, setIsorderedmedicines] = useState(false);
  const [islabtest, setIslabtest] = useState(false);

  return (
    <>
      <div className="AdminPage">
        <div className="Admin-Navigation">
          <Link
            to="Profile"
            onClick={() => {
              setIsorderedmedicines(false);
              setIsprofilecard(true);
              setIslabtest(false);
            }}
          >
            <p>
              <b>Profile</b>
            </p>
          </Link>
          <Link
            to="#"
            onClick={() => {
              setIsorderedmedicines(true);
              setIsprofilecard(false);
              setIslabtest(false);
            }}
          >
            <p>
              <b>Exams Given</b>
            </p>{" "}
          </Link>
          <Link
            to="#"
            onClick={() => {
              setIsorderedmedicines(false);
              setIsprofilecard(false);
              setIslabtest(true);
            }}
          >
            <p>
              <b>Request Exams</b>
            </p>{" "}
          </Link>
        </div>

        <div className="Admin-list">
          <div className="MedicineList">
            <div
              class="Profilecard"
              style={{ display: isprofilecard ? "flex" : "none" }}
            >
              <div class="cardpic">
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  alt="John"
                />
                <h1>
                  <b>Amit Rout</b>{" "}
                </h1>
              </div>
              <div className="cardtitle">
                <p class="title">User ID : 63872ff3a6245d0d2643f1c1</p>
                <p>
                  <b>Email : amitroutard@gmail.com</b>
                </p>
                <p>
                  <b>Join Date : 2022-11-30</b>
                </p>
                <p>
                  <button>Edit Profile</button>
                </p>
              </div>
            </div>

            <div
              class="MedicinesCard"
              style={{ display: isorderedmedicines ? "block" : "none" }}
            >
              <div className="card" style={{ width: "25em" }}>
                <img
                  src="https://media.istockphoto.com/id/1250471519/photo/vial-of-insulin-injection-with-a-syringe-on-black-table-and-stainless-steel-background.jpg?s=612x612&w=0&k=20&c=KE5VHmGmkSpQrhwfg5NUyMzECumK9lsiHDg9dJyvLPk="
                  alt="Avatar"
                />
                <div className="container">
                  <h4>
                    <b>Insulin</b>
                  </h4>
                  <h6>
                    <b>
                      Insulin is a hormone created by your pancreas that
                      controls the amount of glucose in your bloodstream at any
                      given moment. It also helps store glucose in your ...
                    </b>
                  </h6>

                  <h4>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </h4>

                  <Link to="/Booking">
                    <button>Status : Request State</button>
                  </Link>
                </div>
                        
              </div>
            </div>

            <div
              class="LabtestCard"
              style={{ display: islabtest ? "block" : "none" }}
            >
              <div className="card" style={{ width: "25em" }}>
                <img
                  src="https://www.shutterstock.com/image-photo/hands-lab-technician-tube-blood-260nw-441264445.jpg"
                  alt="Avatar"
                />
                <div className="container">
                  <h4>
                    <b>Blood Lab Test</b>
                  </h4>
                  <h4>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </h4>
                  <Link to="/Booking">
                    <button>Lab Status: Processing</button>
                  </Link>
                </div>
                        
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardUser;
