import React from "react";
import "../../CSS/Editprofile.css";
import { json } from "react-router-dom";

function EditProfile() {
  return (
    <div className="edit-profile-page">
      <div className="edit-profile-details">
        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" />

        <p>
          <b>Full Name : {sessionStorage.getItem("Name")}</b>
        </p>
        <hr />
        <p>
          <b>Address : Rengali,Sambalpur</b>
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
          <b>Post : Software Engineer</b>
        </p>
        <hr />
        <p>
          <b>College : GCE Keonjhar</b>
        </p>
        <hr />
      </div>
    </div>
  );
}

export default EditProfile;
