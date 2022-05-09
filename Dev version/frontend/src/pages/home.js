import {Outlet, Link} from "react-router-dom";
//import "../index.css";
import React, {useState} from "react";
import SigninForm from "./signin";
import logo from '../assets/IMLogo.jpg';


const Home = () => {
    return (
        <center>
        <img src={logo} alt="Infinite Monkeys Logo"/>
        <h1>Welcome!</h1>
        <div><Link to="/signin"><button className="buttonClass">Sign in</button></Link> <Link to="/register"><button className="buttonClass">Create an account</button></Link></div>
        <Outlet />
        </center>    
    );
    
}

export default Home;