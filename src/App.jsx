import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/login";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  import {createContext} from 'react';
  export const AuthContext = createContext();

const App=()=>{
    return(
      <Router>
        <Routes>
        
          <Route exact path="/" element={<Login/>} />
            

        </Routes>
      </Router>
    );
}

export default App;