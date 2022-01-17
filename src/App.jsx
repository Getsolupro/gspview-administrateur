import React, {useEffect, useMemo, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "./context";
import Login from "./pages/login";
import DashBoard from "./pages/Dashboard";
//import { hasAuthenticated } from "./services/AuthApi";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';

function App(){
   const loginState = useSelector((state) => state.data.loggedIn);
   console.log(loginState);
    return(
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route exact path="/" element={ loginState ? <Navigate to="/dashboard" />:<Navigate to="/login" />} />
        
      </Routes>
   
    );
}

export default App;