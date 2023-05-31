import React from "react";
import "../../CSS/Editprofile.css";
import { json } from "react-router-dom";

function EditProfile() {


//   var newname = document.getElementById('editname').innerHTML;
// // myEditableElement.addEventListener('input', function() {
// //     console.log('An edit input has been detected');
// //     console.log(myEditableElement.innerHTML);
// // });

// const  handlesubmit=async()=> {
//   const res = await fetch("/editprofile", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       newname
//       //name:name,email:email,phone:phone,password:password
//       // It can also be written but as both are same we can write the above too
//     }),
//   });

//   console.log(newname)
  
// }

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-details">
        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" />

        <p>
          <b>Full Name :<span  id="editname" contentEditable="true" > {sessionStorage.getItem("Name")}</span></b>
        </p>
        <hr />
        <p>
          <b>Address : {sessionStorage.getItem("address")}</b>
        </p>
        <hr />
        <p>
          <b>Email : {sessionStorage.getItem("email")}</b>
        </p>
        <hr />
        <p>
          <b>Phone : {sessionStorage.getItem("phone")}</b>
        </p>
        <hr />
        <p>
          <b>Post : {sessionStorage.getItem("post")}</b>
        </p>
        <hr />
        <p>
          <b>College : {sessionStorage.getItem("college")}</b>
        </p>
        <hr />
        <button style={{ marginTop:"1em",backgroundColor:"#007bff",borderColor: "#007bff",
    fontWeight: "bold",
    color: "white",
    height: "3em",borderRadius:"5px"}}

  
    
    >SUBMIT </button>
      </div>
    </div>
  );
}

export default EditProfile;
