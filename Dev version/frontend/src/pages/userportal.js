import "../index.css"
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './calendar/calendar.css'
import {Outlet, Link} from "react-router-dom";
import SigninForm from "./signin";
import Home from "./home";

//const datesToAddClassTo = [tomorrow, in3Days, in5Days];

function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
      return 'react-calendar__month-view__days__day--weekday';    
  }
}

const UserPortal = () => {
    
  const [value, onChange] = useState(new Date());

  //generic user for login testing
    const defaultUser = {
      email: "user@test.com",
      password: "password"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = (details) => {
      console.log(details);

      if(details.email == defaultUser.email && details.password == defaultUser.password)  //here is where we incorporate database user credentials matching
      {
          console.log("Logged in Successfully");
          setUser({
              email: details.email
          });

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
  //
  return (
    
    <div className="UserPortal">
      {(user.email != "") ? (
        <div>
        <h1><span>{user.email}</span> Calendar</h1>
        <Calendar
          className="react-calendar"
          onChange={onChange}
          value={value}
          tileClassName={tileClassName}
        />
        <Link to="/home"><button className="buttonClass">Log Out</button></Link>
        </div>
      ) : (
        <SigninForm Login ={Login} error={error}/> 
      )}
    </div>

    /*
    <div>
      <h1>Your Calendar</h1>
      <Calendar
        className="react-calendar"
        onChange={onChange}
        value={value}
        tileClassName={tileClassName}
      />
      <Link to="/home"><button className="buttonClass">Log Out</button></Link>
    </div>
    */
  );
}

export default UserPortal;