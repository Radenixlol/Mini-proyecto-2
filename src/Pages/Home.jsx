import React from "react";

export function Home() {
  return (
    <div className="w-full h-screen">
      <div className="overflow-x-hidden">
        <div className="flex p-5 justify-between">
          <img className="w-20" src="./assets/netflix-image.jpg" alt=""></img>
          <div className="flex gap-x-2 text-white">
            <button className="px-3 bg-red-600 rounded md">Sign In</button>
            <button className="px-3 bg-red-600 rounded md">Register</button>
          </div>
        </div>

        <div className="text -white text-center pt-40 px-10">
          <h1 className="text - 3x1 font-bold sm:text -4x1 md:text -5x1 pb-3">
            {" "}
            Unlimited Movies, TV Show, and more
          </h1>
          <h2 className="text-1g font-bold sm:text-x1 md:text-2x1 pb-5">
            Watch anywhere. Cancel Anytime
          </h2>
          <h2 className="text-1g font-bold sm:text-x1 md:text-2x1">
            Ready to watch ? Enter your email to create or restart your
            membership
          </h2>
          <div className="widthInput pr-20 sm:relative m1-auto mr-auto">
            <input
              className="inputBox w-96 py-3 px-4 mt-5 sm:py-4"
              type="text"
              placeholder="Email address"
            ></input>
            <button className="bg-red-600 px px-5 sm:py-4 py-3 mt-5 rounded-sm sm:absolute sm:top-0 sm:right-0">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
