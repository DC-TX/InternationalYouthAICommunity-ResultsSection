import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./staticQuality.css";
import "./academyExtras.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";

// React 入口文件
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
