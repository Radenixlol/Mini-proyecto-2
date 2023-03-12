import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import App from "./App";
import "./index.css";
import {
  Filter_link,
  Home_link,
  Login_link,
  Pelis_link,
  Register_link,
} from "./Links/links";
import { HomePage } from "./Pages/HomePage";
import Login from './Pages/Login'
import { MovieDetails } from "./Pages/MovieDetails";
import Register from './Pages/Register'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path={Home_link} element={<Home/>} />
          <Route path={Register_link} element={<Register/>} />
          <Route path={Login_link} element={<Login/>} />
          <Route path={Pelis_link} element={<HomePage/>} />
          <Route path= '/movies/:movieId' element={<MovieDetails/>} />
          <Route path={Filter_link} element={<h1>Filter</h1>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
