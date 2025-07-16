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
    category: 'Machine Learning',
    title: 'E D A Portfolio',
    description:
      'A curated collection of EDA projects showcasing data cleaning, visualization and insight generation skills.',
    video: one, // Example path; update accordingly
    github: 'https://github.com/Abhinav-0103/EDA-Portfolio',
    image: edaPortfolio,
    link: 'https://www.kaggle.com/',
  },
  {
    category: 'Natural Language Processing',
    title: 'W.E.N.S.A',
    description:
      'An EDA and sentiment analyzer that uncovers message patterns, user activity and emotional tone from WhatsApp chat exports.',
    video: two,
    github:
      'https://github.com/Abhinav-0103/WENSA-WhatsApp-Emotion-and-Sentiment-Analyzer-Using-LSTM-and-BI-LSTM',
    image: wensa2,
    link: 'https://www.kaggle.com/',
  },
  {
    category: 'Computer Vision',
    title: 'Image Super Resolution',
    description:
      'A deep learning project that enhances low-resolution images using ESRGAN architecture augmented with CBAM for improved detail and attention-driven restoration.',
    video: three,
    github: 'https://github.com/Abhinav-0103/Super-Resolution',
    image: isr,
    link: 'https://www.kaggle.com/',
  },
  {
    category: 'Web Development',
    title: 'WanderLust',
    description:
      'A dynamic full-stack web application built with MongoDB, Express, and Node.js, featuring CRUD functionality and RESTful API integration.',
    video: one,
    github: 'https://github.com/Abhinav-0103/Wanderlust',
    image: wanderlust,
    link: 'https://www.kaggle.com/',
  },
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
            <div
              className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative backdrop-blur-lg"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {project.category}
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                {project.title}
              </h1>
              <p className="leading-relaxed mb-3">{project.description}</p>

              <div className="absolute bottom-0 left-0 w-full py-4 flex justify-center space-x-4">
                {/* Video Button */}
                <button
                  onClick={() => setActiveVideo(project.video)}
                  className="pr-2 rounded-full inline-flex items-center justify-center"
                >
                  <svg
                    className="w-8 h-8 text-white hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 28"
                  >
                    <path d="M4 4v12l12-6-12-6z" />
                  </svg>
                </button>

                {/* Visit Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-green-100 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center shadow"
                >
                  <span>Visit Project</span>
                </a>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pr-2 rounded-full inline-flex items-center justify-center"
                >
                  <svg
                    className="w-8 h-8 text-white hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56v-1.97c-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.73-1.56-2.56-.3-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.2-3.12-.12-.3-.52-1.52.1-3.17 0 0 .98-.32 3.2 1.2a11.14 11.14 0 0 1 2.92-.4c.99 0 2 .14 2.92.4 2.22-1.52 3.2-1.2 3.2-1.2.62 1.65.22 2.87.1 3.17.75.82 1.2 1.86 1.2 3.12 0 4.43-2.7 5.4-5.27 5.7.41.35.77 1.04.77 2.1v3.12c0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-4 rounded-xl relative max-w-3xl mx-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-white text-5xl font-bold hover:text-red-500 z-51"
            >
              &times;
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-md max-h-[50vh]"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;