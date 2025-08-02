import React from 'react';
import profileImage from './assets/profile_pic.jpg'; // make sure this image exists
import "./Home.css"

const Home = () => {
  return (
    <div className="sm:border-0 sm:w-60 sm:h-60 md:w-100 md:h-100 lg:w-150 lg:h-150 rounded-full md:border-2 lg:border-2 border-gray-200 bg-white mx-auto mt-5 mb-10">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img
          src={profileImage}
          alt="Profile"
          className="sm:w-32 sm:h-16 md:w-40 md:h-40 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-gray-300"
        />
        <div className="mt-4 flex flex-row items-center justify-center gap-x-4">
          <span className="sm: md:text-base lg:text-xl font-semibold text-gray-700 tracking-widest">
            A I / M L
          </span>
          <span className="md:text-base lg:text-xl font-semibold text-gray-700 tracking-widest">
            E N G I N E E R
          </span>
        </div>

        <div className="mt-6">
          <h1 className="md:text-xl lg:text-3xl font-bold text-gray-800 whitespace-nowrap typewriter-toggle">
            Hi, I am Abhinav
          </h1>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          {['about', 'projects', 'skills', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }
              className="rounded-full bg-white px-4 py-2 transition hover:border-2 hover:border-gray-400"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;