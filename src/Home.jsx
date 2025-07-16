import React from 'react';
import profileImage from './assets/profile_pic.jpg'; // make sure this image exists
import "./Home.css"

const Home = () => {
  return (
    <div className="w-150 h-150 rounded-full border-2 border-gray-200 bg-white mb-8 mx-auto">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
        />
        <div className="mt-4 flex flex-row items-center justify-center gap-x-4">
          <span className="text-xl font-semibold text-gray-700 tracking-widest">
            D A T A
          </span>
          <span className="text-xl font-semibold text-gray-700 tracking-widest">
            S C I E N T I S T
          </span>
        </div>

        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-800 whitespace-nowrap typewriter-toggle">
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