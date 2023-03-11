import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import App from "./App";
import "./index.css";
import { Details_link, Filter_link, Home_link, Login_link, Pelis_link, Register_link } from "./Links/links";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={Home_link} element={<h1>Home</h1>}/>
        <Route path={Register_link} element={<h1>Register</h1>}/>
        <Route path={Login_link} element={<h1>Login</h1>}/>
        <Route path={Pelis_link} element={<h1>Pelis</h1>}/>
        <Route path={Details_link} element={<h1>Detalles</h1>}/>
        <Route path={Filter_link} element={<h1>Filter</h1>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
