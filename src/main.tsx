import React from "react";
import ReactDOM from "react-dom/client";
import LoginComponent from "./components/login/components/LoginComponent/Login.component.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoginComponent />
  </React.StrictMode>
);
