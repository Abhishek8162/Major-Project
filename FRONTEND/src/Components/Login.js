import '../CSS/Login.css';
import React,{useState} from 'react'

import {useNavigate } from 'react-router-dom';

function Login()
{

    
    const navigate=useNavigate();

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const loginUser=async (e)=>
    {
            e.preventDefault();

            const res= await fetch("/register",
    {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify
        ( {
            email,password
            //name:name,email:email,phone:phone,password:password
            // It can also be written but as both are same we can write the above too
        })
    });

    const data =await res.json();
 
    if(data.status === 422||!data)
     {
        window.alert('Invalid Credentials');
        console.log('Invalid Credentials')
     } 

     else
     {
        window.alert('Login Successfull');
        console.log('Login Successfull');
        navigate("/")
     } 


}





    

    return (

        <>
          <div class ="Signin">

<h1>
    Hi Welcome!
</h1>
<h5>
    Log in into your account
</h5>


<form method="POST">

<input type="email" name="email" placeholder="Email" value={email} 
 onChange={(e)=>{setEmail(e.target.value)}} />
<input type="password" name="password" placeholder="password" value={email} 
 onChange={(e)=>{setPassword(e.target.value)}} />

<input type="submit" name="" value="Log in" id="submit"/>


</form>

<h5>
    Dont Have an account ? <span> <a href="Signup"> Signup </a> </span>
</h5>

</div>

        
        </>
    )
};

export default Login;