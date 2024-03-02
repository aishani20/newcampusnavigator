import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { SignupProvider } from "./context/SignupContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <SignupProvider>
      <App />
    </SignupProvider>
  </Router>
);
