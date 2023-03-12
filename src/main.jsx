import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
//import App from "./App";
import "./index.css";
import {
  Details_link,
  Filter_link,
  Home_link,
  Login_link,
  Pelis_link,
  Register_link,
} from "./Links/links";
import Login from './Pages/Login'
import Register from './Pages/Register'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path={Home_link} element={<h1>Home</h1>} />
          <Route path={Register_link} element={<Register/>} />
          <Route path={Login_link} element={<Login/>} />
          <Route path={Pelis_link} element={<h1>Pelis</h1>} />
          <Route path={Details_link} element={<h1>Detalles</h1>} />
          <Route path={Filter_link} element={<h1>Filter</h1>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
