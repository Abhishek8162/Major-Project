import React from 'react'


function UserProfile() {
  return (
    <div className="user-profile-page">

<div className="user-profile-details">

<div className="user-profile-card">
  <img src="https://bootdey.com/img/Content/avatar/avatar7.png"/>
  <p><b>{sessionStorage.getItem("Name")}</b></p>
  <h5><b>{sessionStorage.getItem("post")}</b></h5>
  
  
  <button className="EditProfile">Edit Profile</button>
  


  </div>

  <div className="user-profile-personal">
  
  <p><b>Full Name : {sessionStorage.getItem("Name")}</b></p>
  <hr/>
  <p><b>Address : {sessionStorage.getItem("address")}</b></p>
  <hr/>
  <p><b>College : {sessionStorage.getItem("college")}</b></p>
  <hr/>
  <p><b>Email : {sessionStorage.getItem("email")}</b></p>
  <hr/>
  <p><b>Phone: {sessionStorage.getItem("phone")}</b></p>
  <hr/>

  <p><b>Exams Given : Nil</b></p>
  <hr/>
  

  </div>

</div>


    </div>
  )
}

export default UserProfile