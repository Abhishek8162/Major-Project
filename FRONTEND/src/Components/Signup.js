import '../CSS/Signup.css';
import {useState} from 'react'
import React from 'react'
import {useNavigate } from 'react-router-dom';

function Signup () 
{
    const navigate=useNavigate();

const [user,setUser] =useState(
    {
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""

    }
);

let name,value;
const handleInputs=(e)=>
{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
}


const PostData=async(e)=>
{

    e.preventDefault();
    const  {name,email,phone,password,cpassword}=user;

    const res= await fetch("/register",
    {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify
        ( {
            name,email,phone,password,cpassword
            //name:name,email:email,phone:phone,password:password
            // It can also be written but as both are same we can write the above too
        })
    });

    const data =await res.json();
 
    if(data.status === 422||!data)
     {
        window.alert('Invalid Entry');
        console.log('Invalid Entry')
     } 

     else
     {
        window.alert('Registration Successfull');
        console.log('Registration Successfull');
        navigate("/login")
     } 


}


    return( 
<>
<div className ="Signup">

<h1>
    Hi Welcome!
</h1>
<h5>
    Let's create an account
</h5>



 
<form method="POST" >

<input type="email" name="email" placeholder="Email"  value={user.email} onChange={handleInputs}/>
<input type="text" name="name" placeholder="Full name"  value={user.name} onChange={handleInputs}/>
<input type="text" name="phone" placeholder="phone"  value={user.phone} onChange={handleInputs}/>
<input type="password" name="password" placeholder="password"  value={user.password} onChange={handleInputs}/>
<input type="password" name="cpassword" placeholder="confirm password"  value={user.cpassword} onChange={handleInputs}/>


<input type="submit" name="" value="Signup" id="submit" onClick={PostData}/>


</form>

<h5>
    Already have an account? <span> <a href="Login"> Login</a> </span>
</h5>

</div>




</>



    );
}

export default Signup;