<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
// import Pelis from './Pages/Pelis';
// import Details from './Pages/Details';
// import Filter from './Pages/Filter';
import Layout from "./Pages/Layout";
// import ProtectedRoute from './Components/ProtectedRoute';
import {
  Details_link,
  Filter_link,
  Home_link,
  Login_link,
  Pelis_link,
  Register_link,
} from "./Links/links";
import HomePage from "./Pages/HomePage";
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< Updated upstream
        <>
        <Navbar />
        </>
  )
=======
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={Home_link} element={<Home />} />
          <Route path={Register_link} element={<Register />} />
          <Route path={Login_link} element={<Login />} />
          <Route path={Pelis_link} element={<HomePage/>} />
          <Route path={Details_link} element={<h1>Detalles</h1>} />
          <Route path={Filter_link} element={<h1>Filter</h1>} />
        </Route>
      </Routes>
    </>
  );
>>>>>>> Stashed changes
}

export default App
