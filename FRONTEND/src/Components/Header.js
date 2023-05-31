import '../CSS/header.css';
import { BrowserRouter as Router, Routes, Route, 
  Navigate,Link } from 'react-router-dom';

import React from "react";
import Logout from "./Logout"
import icon from "../Images/userloginicon2.png"

function Header() {

  
  var req = document.getElementsByClassName('topnav');
    return (
      <>
        <div class="topnav">
        <Link to="Home"><b> Home </b></Link>  
        <Link to="Exams"><b>Exams</b></Link>
        <Link to="UserDashboard"><b>Dashboard</b></Link>
        <Link to="Services"><b>Services</b></Link>
        {/* <Link to="AdminDashboard"><b>Admin</b></Link> */}
        <Link to="About"><b>About</b></Link>

        

        {!sessionStorage.getItem("isAuthenticated") ? (
          <></>
        ):
(<div style={{fontSize:"1.3em", color:"white",fontWeight:"bold",margin:"0.6em 0em 0 45em",display:"flex"}}>

<img style={{width:"1.4em",height:"1.2em" ,marginRight:"0.5em", marginTop:"0.00em"}} src={icon}>

</img>

<div style={{ marginTop:"0.0em" }}>
  
{sessionStorage.getItem("Name")}

<button style={{marginLeft:"6.5em", background:"#007bff",
    borderColor: "#007bff",
    fontWeight: "bold",
    color: "white",
    height: "2em",
    borderRadius: "5px"}}
    
    onClick={
      ()=>{sessionStorage.removeItem("isAuthenticated")

      window.location.reload(false)
    }
    
    }
    >Logout</button>

</div>
</div>

)

}

      </div>
       </>

 

    );
  }
  
  export default Header;