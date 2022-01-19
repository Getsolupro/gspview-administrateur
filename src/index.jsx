require('file-loader?name=[name].[ext]!./index.html');
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "./assets/css/material-dashboard-react.css?v=1.10.0";
import { Router, Switch, BrowserRouter } from 'react-router-dom';
import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
       <Provider store={store}>  
          <App/>
       </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();