import React from 'react';
import profileImage from './assets/profile_pic.jpg'; // ensure this exists and matches filename

const About = () => {
  return (
    <div className="w-full max-w-[180vh] max-h-[100vh] flex flex-row justify-between text-gray-800">
      <div className="bg-white max-w-[70vh]">
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
          <h1 className="text-4xl font-semibold">
            Here is a little background
          </h1>
          <p className="text-lg leading-relaxed max-w-xl text-left">
            I am a passionate Data Scientist with a strong background in machine learning,
            deep learning, and real-world problem-solving. I enjoy building intelligent
            systems, exploring data, and transforming insights into action. With experience
            in both research and practical applications, I aim to bridge the gap between
            theory and impactful solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;