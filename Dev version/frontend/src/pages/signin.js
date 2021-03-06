import React, {useState} from "react"
import {Outlet, Link} from "react-router-dom";
import UserPortal from "./userportal";
//import "../signin.css"

const SigninForm = (/*{Login, error} <-- REMOVE THESE LATER*/) => {
    
    const [details, setDetails] = useState({email: "", password: ""});  
    
    //begin


  //generic user for login testing
    const defaultUser = {
      email: "user@test.com",
      password: "password"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = (details) => {
      console.log(details);

      if(details.email === defaultUser.email && details.password === defaultUser.password)  //here is where we incorporate database user credentials matching
      {
          console.log("Logged in Successfully");
          setUser({
              email: details.email
          });
          window.location.href = "/userportal"

      }
      else
      {
          console.log("Credentials do not Match!");
          setError("Credentials do not Match!");
      }
  }

  const Logout = () => {
      setUser({
          email: ""
      });
      console.log("Logged out")
  }

    //end
    const submitHandler = (e) => {
        e.preventDefault();
        Login(details);  //continue from HERE --> Login function???
    }
    
    
    return (
        <center>
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Log In</h2>
                {(error !== "") ? ( <div className="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" style={{color:"black"}} email="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" style={{color:"black"}} password="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
            </div>
            <input class="buttonClass" type="submit" value="Log In" />
            <Link to="/home"><button className="buttonClass">Back to Home</button></Link> 
        </form>
        </center>
        
    )
}
export default SigninForm