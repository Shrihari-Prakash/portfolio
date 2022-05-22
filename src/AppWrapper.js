import { HashRouter as Router } from "react-router-dom";
import React from "react";
import App from "./App";

export default function RouterWrapper() {
  return (
    <Router basemname={process.env.PUBLIC_URL}>
      <App />
    </Router>
  );
}
