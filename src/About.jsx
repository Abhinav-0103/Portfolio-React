import React from 'react';
// import profileImage from './assets/profile_pic-3.jpg'; // ensure this exists and matches filename
import profileImage from './assets/timeline.png'; // ensure this exists and matches filename

const About = () => {
  return (
    <div className="w-full max-w-[180vh] max-h-[100vh] flex flex-row justify-between text-gray-800">
      <div className="bg-white flex items-center max-w-[70vh] w-0 sm:w-0 md:w-150 lg:w-150">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full max-h-[150vh] object-contain py-2"
        />
      </div>

      {/* Right Side: About Content */}
      <div className="flex flex-col max-h-[70vh] w-[180vh] mt-20 items-center flex-grow px-4">
        <h2 className="text-4xl font-light tracking-widest text-gray-600">
          A B O U T
        </h2>

        <div className="flex flex-col items-start justify-evenly min-h-[50vh]">
          <h1 className="text-4xl font-semibold hidden sm:inline">
            From Algorithms to Application
          </h1>
          <p className="text-xl sm:text-lg leading-relaxed max-w-xl text-justify">
            I am an AI/ML Engineer who builds production-ready intelligent systems. Bridging the gap between academic research and software engineering, I design scalable solutions that solve complex real-world problems. My focus is simple: writing clean code, building efficient models, and delivering practical impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;