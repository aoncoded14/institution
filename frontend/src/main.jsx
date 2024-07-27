import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.css";
import "./bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
