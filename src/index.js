// Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Assets
import "./styles/reset.css";
import "./styles/App.sass";

// Components
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);