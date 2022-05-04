//import "../index.css"
import React, { useState, useContext,useEffect } from 'react'
import "./userportal.css"
//import './calendar/calendar.css'
import {Outlet, Link} from "react-router-dom";
import SigninForm from "./signin";
import Home from "./home";
import {useNavigate} from "react-router-dom"
//import {Redirect} from "react-router-dom";
import ContextWrapper from '../context/ContextWrapper';
import Calendar from './calendar'
import './calendar.css';
import { getMonth } from '../util'
import CalendarHeader from '../components/CalendarHeader';
import Sidebar from '../components/Sidebar';
import Month from '../components/Month';
import { current } from 'tailwindcss/colors';
import GlobalContext from '../context/GlobalContext';
import EventModal from "../components/EventModal";


//const datesToAddClassTo = [tomorrow, in3Days, in5Days];

function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
      return 'react-calendar__month-view__days__day--weekday';    
  }
}

const UserPortal = () => {
  
  
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate()
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
    /*
    <div className="UserPortal">
      {(user.email !== "") ? (
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
        useEffect(navigate('signin'))
        
      )}
    </div>*/

    
    <React.StrictMode>
      <ContextWrapper>
        <Calendar />
      </ContextWrapper>
    </React.StrictMode>
    
  );
  
}

export default UserPortal;