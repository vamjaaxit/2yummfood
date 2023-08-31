import React from "react";
import { Row } from "react-bootstrap";


function Login (){
    return(
<div className="w-50 border mx-auto bg-light">
<center>
    <h2>login form</h2>
</center>
    <form className="ms-5 fs-6 ">

<label>E-mail:</label>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="E-mail" name="email" placeholder="Enter your email*" className="w-75"/>  
<br/>
<br/> 

<label>Password:</label>
&nbsp;&nbsp;
<input type="Password" name="email" placeholder="Enter your password*" className="w-75"/>   
<br/>
<br/>
<center>
 <input type="submit" value="submit" className="w-25 me-5"></input></center>
</form>
</div>
    )
};
export default Login;