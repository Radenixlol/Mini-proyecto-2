import React from "react";

export function Home() {
  return (



    <div
    className="flex flex-col items-center justify-center min-h-screen bg-black"
    style={{
      'background-image':
        'linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(https://images.lifestyleasia.com/wp-content/uploads/2019/11/01120945/netflix-image.jpg)',
    }}
  >
    <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
    <h1 className="text-5xl font-medium text-white max-w-lg tracking-wide">
      Unlimited movies, TV shows, and more.
    </h1>
    <h2 className="text-2xl text-white mt-4 mb-8">
      Watch anywhere. Cancel anytime.
    </h2>
    <p className="text-white text-lg">
      Ready to watch? Enter your email to create or restart your membership.
    </p>
    <div className="flex mt-4">
      <input
        placeholder="Email address"
        className="bg-white p-4 min-w-[400px]"
      />
      <button
        onClick={() => signIn()}
        className="flex items-center bg-[#e50914] text-white text-xl px-8"
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
        </div>
      </main>
      </div>

  );
};

export default Home;
