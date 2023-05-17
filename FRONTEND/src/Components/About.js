import React from 'react'
import '../CSS/About.css'

import abhishek from "../Images/abhishek.jpg"
import arup from "../Images/arup.jpg"
import amit from "../Images/amit.jpg"
import dipasa from "../Images/dipasa.jpg"

function About() {
  return (
    <div class="about-page">
    <div class="about-section">
  <h1>About Us </h1>
  <p>We are currently the undergraduate students of GCE Keonjhar working together 
    for our major Project on the  Online Examination System .</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 >Our Team</h2>
<div class="row">
<div class="column">
    <div class="about-card">
      <img src={abhishek} alt="John" />
      <div class="card-container">
        <h2>Abhishek Kumar</h2>
        <p class="abouttitle">MERN Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="about-button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="about-card">
      <img src={amit} alt="Mike" />
      <div class="card-container">
        <h2>Amit Kumar</h2>
        <p class="abouttitle">Frontend Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="about-button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="about-card">
      <img src={dipasa} alt="John" />
      <div class="card-container">
        <h2>Dipasa Rout</h2>
        <p class="abouttitle">Backend Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="about-button">Contact</button></p>
      </div>
    </div>
  </div>

    
  <div class="column">
    <div class="about-card">
      <img src={arup} alt="John" />
      <div class="card-container">
        <h2>Arup Ashish</h2>
        <p class="abouttitle">Database Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="about-button">Contact</button></p>
      </div>
    </div>
  </div>


</div>
    
    </div>
  )
}

export default About