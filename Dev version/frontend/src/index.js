import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Register from "./pages/register";
import UserPortal from "./pages/userportal";
import './index.css';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>        
        <Route path="/" element={<Home />}></Route>        
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/userportal" element={<UserPortal />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));