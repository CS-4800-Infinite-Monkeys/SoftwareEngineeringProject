import React, {useState} from "react"
import {Outlet, Link} from "react-router-dom";
//import "../signin.css"

const SigninForm = ({Login, error}) => {
//function SigninForm({ Login, error }) {
    
    const [details, setDetails] = useState({email: "", password: ""});  
    
    //begin


    //end
    const submitHandler = e => {
        e.preventDefault();
        Login(details);  //continue from HERE --> Login function???
    }
    
    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Log In</h2>
                {(error != "") ? ( <div className="error">{error}</div> ) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" email="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" password="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
            </div>
            <input type="submit" value="LOG IN" />
            <Link to="/home"><button className="buttonClass">Back to Home</button></Link> 
        </form>  //<input type="submit" value="SIGNIN"></input>
    )
}
export default SigninForm