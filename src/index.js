import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import * as ReactDOMServer from "react-dom/server";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
