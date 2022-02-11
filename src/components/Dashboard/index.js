import React from 'react';
import ReactDOM from 'react-dom';
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "./assets/css/material-dashboard-react.css?v=1.10.0";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
          <App/>
       </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
