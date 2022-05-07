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
import { tileProps } from 'react-calendar/dist/umd/shared/propTypes';


//const datesToAddClassTo = [tomorrow, in3Days, in5Days];

function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
      return 'react-calendar__month-view__days__day--weekday';    
  }
}

const UserPortal = (props) => {
  
  
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate()
  
  // //generic user for login testing
  //   const defaultUser = {
  //     email: "user@test.com",
  //     password: "password"
  // }

  // const [user, setUser] = useState({email: ""});
  // const [error, setError] = useState("");

  // const Login = (details) => {
  //     console.log(details);

  //     if(details.email === defaultUser.email && details.password === defaultUser.password)  //here is where we incorporate database user credentials matching
  //     {
  //         console.log("Logged in Successfully");
  //         setUser({
  //             email: details.email
  //         });

  //     }
  //     else
  //     {
  //         console.log("Credentials do not Match!");
  //         setError("Credentials do not Match!");
  //     }
  // }

  // const Logout = () => {
  //     setUser({
  //         email: ""
  //     });
  //     console.log("Logged out")
  // }
  // //
  // console.log(props.data.currentUser)

  return (
    
    /*
    <div className="UserPortal">
      {(props.data.loggedIn) ? (
        <React.StrictMode>
        <ContextWrapper>
          <Calendar />
        </ContextWrapper>
      </React.StrictMode>
      ) : (
        <>
        <p>Oops! You have to be signed in to do that!</p>
        <br/>
        <Link to="/signin"><button className = "buttonClass">Sign In</button></Link>
        </>
      )}
    </div> 
    */
    <React.StrictMode>
        <ContextWrapper>
          <Calendar />
        </ContextWrapper>
      </React.StrictMode>
    
  );
  
}

export default UserPortal;