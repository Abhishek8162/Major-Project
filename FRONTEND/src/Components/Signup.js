import '../CSS/Signup.css';


function Signup () 
{



    return( 
<>
<div className ="Signup">

<h1>
    Hi Welcome!
</h1>
<h5>
    Let's create an account
</h5>




<form >

<input type="email" name="" placeholder="Email" id=""/>
<input type="text" name="" placeholder="Full name" id=""/>
<input type="text" name="" placeholder="Username" id=""/>
<input type="password" name="" placeholder="password" id=""/>
<input type="password" name="" placeholder="confirm password" id=""/>


<input type="submit" name="" value="Signup" id="submit"/>


</form>

<h5>
    Already have an account? <span> <a href="Login"> Login</a> </span>
</h5>

</div>




</>



    );
}

export default Signup;