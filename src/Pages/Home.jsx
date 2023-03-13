import React from "react";
import { Link } from "react-router-dom";
import {
  Details_link,
  Filter_link,
  Home_link,
  Login_link,
  Pelis_link,
  Register_link,
} from "../Links/links";
export function Home() {
  return (



    <div
    className="flex flex-col items-center justify-center min-h-screen bg-black"
    style={{
      'backgroundImage':
        'linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(https://images.lifestyleasia.com/wp-content/uploads/2019/11/01120945/netflix-image.jpg)',
    }}
  >
    <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
    <h1 className="text-5xl font-medium text-white max-w-lg tracking-wide">
      Peliculas ilimitadas, Shows de TV y mas para la comunidad.
    </h1>
    <h2 className="text-2xl text-white mt-4 mb-8">
      Mira desde cualquier parte.
    </h2>
    <p className="text-white text-lg">
      Gratis para la comunidad unimetana, que esperas para registrarte ?
    </p>
    <div className="flex mt-4">
      <Link to={Register_link}>
      <button
        className="flex items-center bg-[#000dff] text-white text-xl px-8"
        >
        Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
        
        </button>
        </Link>
        </div>
      </main>
      </div>

  );
};

export default Home;
