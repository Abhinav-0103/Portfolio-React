import React from 'react';
import profileImage from './assets/profile_pic.jpg'; // ensure this exists and matches filename

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
            Here is a little background
          </h1>
          <p className="text-xl sm:text-lg leading-relaxed max-w-xl text-justify">
            I am a dedicated AI/ML Engineer with a strong foundation in machine learning, deep learning, and deploying real-world intelligent systems.
            I enjoy designing and building scalable AI solutions, working with complex data and turning insights into practical impact.
            With hands-on experience across both research and production environments, I strive to bridge the gap between cutting-edge algorithms and real-world applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;