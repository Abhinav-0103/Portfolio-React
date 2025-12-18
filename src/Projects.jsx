import React, { useState } from 'react';
import edaPortfolio from './assets/eda-portfolio.jpeg';
import wensa2 from './assets/wensa2.avif';
import isr from './assets/isr.avif';
import wanderlust from './assets/wanderlust.avif';
import one from "./assets/1.mp4"
import two from "./assets/2.mp4"
import three from "./assets/3.mp4"

const projectData = [
  {
    category: 'Computer Vision',
    title: 'Image Super Resolution',
    description:
      'Deployed a Deep Learning model (ESRGAN + CBAM) to upscale low-resolution images by 4x while preserving edge details, outperforming standard bicubic interpolation.',
    video: "https://www.youtube.com/embed/95QoXYpZTJY?si=bj-YMTa3Ot7G-5kj",
    github: 'https://github.com/Abhinav-0103/Super-Resolution',
    image: isr,
    link: 'https://super-resolution-0103.streamlit.app/',
  },
  {
    category: 'Natural Language Processing',
    title: 'WhatsApp Sentiment Analyser',
    description:
      'Transforms raw WhatsApp chat logs into visual intelligence, decoding user engagement trends, communication dynamics, and emotional undercurrents via advanced sentiment analysis.',
    video: "https://www.youtube.com/embed/y7MjYVb8cUE?si=Aa2fUwr-ObmIN7eN",
    github:
      'https://github.com/Abhinav-0103/WENSA-WhatsApp-Emotion-and-Sentiment-Analyzer-Using-LSTM-and-BI-LSTM',
    image: wensa2,
    link: 'https://wensa0103.streamlit.app/',
  },
  {
    category: 'Web Development',
    title: 'WanderLust',
    description:
      'Architected a scalable travel marketplace using Node.js and MongoDB, orchestrating seamless data management through optimized RESTful APIs and secure CRUD operations.',
    video: "https://www.youtube.com/embed/GL25No1tNRY?si=NJAJ3YQ2lFVwK9cM",
    github: 'https://github.com/Abhinav-0103/Wanderlust',
    image: wanderlust,
    link: 'https://wanderlust-9nb0.onrender.com/',
  },
  {
    category: 'Machine Learning',
    title: 'E D A Portfolio',
    description:
      'Transforms raw datasets into actionable intelligence through rigorous cleaning, compelling visual storytelling, and strategic exploratory analysis.',
    video: "https://www.youtube.com/embed/EJA1s-3cZAU?si=OEWBa5OpIIybqRvd",
    github: 'https://github.com/Abhinav-0103/EDA-Portfolio',
    image: edaPortfolio,
    link: 'https://abhinav-0103-eda-portfolio.streamlit.app/',
  }
];

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const closeModal = () => setActiveVideo(null);

  return (
    <div className="container px-5 py-4 mx-auto">
      <h2 className="text-4xl mb-10 font-light tracking-widest text-gray-600 text-center">
        P R O J E C T S
      </h2>
      <div className="flex flex-wrap -m-4">
        {projectData.map((project, index) => (
          <div key={index} className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 rounded-lg overflow-hidden text-center relative">
              
              {/* --- NEW: Background Image Layer --- */}
              <div
                className="absolute inset-0 opacity-70 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>

              <div className="relative z-10 h-full px-8 pt-16 pb-24">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {project.category}
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed mb-3">{project.description}</p>

                <div className="absolute bottom-0 left-0 w-full py-4 flex justify-center space-x-3">
                  {/* Video Button */}
                  <button
                    onClick={() => setActiveVideo(project.video)}
                    className="group relative w-10 h-10 bg-white/80 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-md backdrop-blur-sm"
                  >
                    <svg
                      className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.269l9.344-5.89a1.5 1.5 0 0 0 0-2.538L6.3 2.84z" />
                    </svg>
                  </button>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white/80 hover:bg-white border border-gray-200 text-gray-700 hover:text-gray-900 text-sm font-medium rounded-full transition-all duration-300 hover:shadow-md backdrop-blur-sm"
                  >
                    Visit Project
                  </a>

                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 h-10 bg-white/80 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-md backdrop-blur-sm"
                  >
                    <svg
                      className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-4 rounded-xl relative max-w-4xl mx-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-white text-3xl font-bold hover:text-red-500 z-51 w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
            <iframe
              src={activeVideo}
              title="YouTube video"
              className="w-[40vh] h-[60vh] sm:w-[70vh] rounded-md sm:h-[60vh]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            >
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;