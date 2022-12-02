import '../CSS/Login.css';

function Login()
{
    return (

        <>
          <div class ="Signin">

<h1>
    Hi Welcome!
</h1>
<h5>
    Log in into your account
</h5>


<form action="">

<input type="email" name="" placeholder="Email" id=""/>
<input type="password" name="" placeholder="password" id=""/>

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