import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Register from "./pages/register";
import UserPortal from "./pages/userportal";
import './index.css';



/*
  const handleLogin = (userEmail) => {
    setState({
      loggedIn: true,
      currentUser: userEmail
    })
  }
*/
export default function App(){
  const [state, setState] = useState({loggedIn: false, currentUser: "testing"})
  console.log(state.loggedIn)
  console.log(state.currentUser)

  const handleLogin = (userEmail) => {
    setState({
      loggedIn: true,
      currentUser: userEmail
    })
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>        
        <Route path="/home" element={<Home />}></Route>        
        <Route path="/signin" element={<Signin data={state} onLoginAttempt = {handleLogin}/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/userportal" element={<UserPortal data={state} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));