import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Details_link,
  Filter_link,
  Home_link,
  Login_link,
  Pelis_link,
  Register_link,
} from "../Links/links";

export const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to= {Home_link} >
        <button className="text-red-600 text-4x1 font-bold  cursor-pointer">
          {" "}
          NETFLIX
        </button>
        </Link>
        <div>
          <Link to={Login_link}>
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to={Register_link}>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
