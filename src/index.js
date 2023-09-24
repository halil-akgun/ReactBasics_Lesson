import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/scss/style.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById("root"));

root.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>

);