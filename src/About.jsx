import React from 'react';
import profileImage from './assets/profile_pic.jpg'; // ensure this exists and matches filename

const About = () => {
  return (
    <div className="w-full max-w-[180vh] max-h-[100vh] flex flex-row justify-between text-gray-800 px-4">
      {/* Left Side: Profile Image */}
      <div className="bg-white">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full h-full w-auto object-contain mx-auto py-2"
        />
      </div>

      {/* Right Side: About Content */}
      <div className="flex flex-col max-h-[70vh] mt-20 items-center flex-grow px-4">
        <h2 className="text-4xl font-light tracking-widest text-gray-600 self-start">
          A B O U T
        </h2>

        <div className="flex flex-col justify-evenly min-h-[50vh] mt-6">
          <h1 className="text-4xl font-semibold mb-[-50px]">
            Here is a little background
          </h1>
          <p className="text-lg leading-relaxed max-w-xl">
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