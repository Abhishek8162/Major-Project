import accenture from "../Images/accenture.jpeg";
import cat from "../Images/cat.jpg";
import gatecs from "../Images/gatecs.webp";
import hcl from "../Images/hcl.jpg";
import infosys from "../Images/infosys.jpg";
import jeemain from "../Images/jeemain.webp";
import ssccgl from "../Images/ssccgl.png";
import tcs from "../Images/tcs.png";
import upsc from "../Images/upsc.png";
import wipro from "../Images/wipro.png";
import "../CSS/Exams.css";
import Signup from "./Signup";


import {useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import React from "react";
import { useNavigate } from "react-router-dom";

function Exams() {


 // const [liveexamname,setLiveexamname] =useState("")

  return (
    <div>
      {sessionStorage.getItem("isAuthenticated") ? (
        <div class="Exampage">
          <div className="ExamCategory">
            <div className="categorytitle">
              <h1>MNC Exams</h1>
              <p></p>
            </div>

            <div className="Exam-cards">
              <div
                className="Exam-card"
                onClick={() => {
                  sessionStorage.setItem("Liveexamname", "Accenture Tests");
                  sessionStorage.setItem("Liveexamno", "1");

                  window.location.href = "Testlist";
                }}
              >
                <img src={accenture} />
                <h4>Accenture</h4>
              </div>

              <div
                className="Exam-card"
                onClick={() => {
                  sessionStorage.setItem("Liveexamname", "TCS Ninja");                  
                  sessionStorage.setItem("Liveexamno", "2");
                  window.location.href = "Testlist";
                }}
              >
                <img src={tcs} />
                <h4>TCS Ninja</h4>
              </div>

              <div
                className="Exam-card"
                onClick={() => {
                  sessionStorage.setItem("Liveexamname", "Wipro Tests");
                  sessionStorage.setItem("Liveexamno", "3");
                  window.location.href = "Testlist";
                }}
              >
                <img src={wipro} />
                <h4>Wipro</h4>
              </div>

              <div className="Exam-card"
               onClick={() => {
                sessionStorage.setItem("Liveexamname", "HCL Tests");
                sessionStorage.setItem("Liveexamno", "4");
                window.location.href = "Testlist";
              }}>
                <img src={hcl} />
                <h4>HCL</h4>
              </div>

              <div className="Exam-card"
               onClick={() => {
                sessionStorage.setItem("Liveexamname", "Infosys Tests");
                sessionStorage.setItem("Liveexamno", "5");
                window.location.href = "Testlist";
              }}>
                <img src={infosys} />
                <h4>Infosys</h4>
              </div>
            </div>
          </div>

          <div className="ExamCategory">
            <div className="categorytitle">
              <h1>Competative Exams</h1>

              <p></p>
            </div>

            <div className="Exam-cards">
              <div className="Exam-card">
                <img src={gatecs} alt="" />
                <h4>Time : 3 hrs</h4>
                <h4>Total Questions : 65</h4>
              </div>

              <div className="Exam-card">
                <img src={cat} alt="" />
                <h4>Time : 3 hrs</h4>
                <h4>Total Questions : 100</h4>
              </div>

              <div className="Exam-card">
                <img src={jeemain} alt="" />
                <h4>Time : 3 hrs</h4>
                <h4>Total Questions : 50</h4>
              </div>

              <div className="Exam-card">
                <img src={upsc} alt="" />
                <h4>Time : 3 hrs</h4>
                <h4>Total Questions : 100</h4>
              </div>

              <div className="Exam-card">
                <img src={ssccgl} alt="" />
                <h4>Time : 3 hrs</h4>
                <h4>Total Questions : 50</h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
/*         add your own jsz page */
            <Signup/>
      )}
    </div>
  );
}

export default Exams;
