import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import App from "./App";

export default function RouterWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
