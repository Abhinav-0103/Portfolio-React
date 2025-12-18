import React from 'react';

const categories = [
  {
    title: "AI & MACHINE LEARNING",
    skills: [
      { name: "TensorFlow", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
      { name: "PyTorch", image: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" },
      { name: "OpenCV", image: "https://upload.wikimedia.org/wikipedia/commons/5/53/OpenCV_Logo_with_text.png" },
      { name: "Pandas", image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
      { name: "NumPy", image: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
    ]
  },
  {
    title: "LANGUAGES",
    skills: [
      { name: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
      { name: "C++", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
      { name: "SQL", image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    ]
  },
  {
    title: "WEB & CLOUD",
    skills: [
      { name: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "Next.js", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
      { name: "AWS", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "HTML5", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
      { name: "CSS3", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    ]
  },
  {
    title: "TOOLS & LIBRARIES",
    skills: [
      { name: "Git", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
      { name: "Docker", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
      { name: "Firebase", image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
    ]
  }
];

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 py-12 bg-transparent">
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite; /* Slower speed for smoother look */
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl font-light tracking-[0.3em] text-gray-600 mb-16 text-center uppercase">
        Skills
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        
        {categories.map((category, catIndex) => (
          // Category Card
          <div 
            key={catIndex} 
            className="group bg-[#364153] border border-gray/10 rounded-2xl p-6 flex flex-col gap-6 overflow-hidden"
          >
            <h3 className="text-xl sm:text-2xl text-white font-medium tracking-wide text-left uppercase z-10 relative">
              {category.title}
            </h3>
            <div className="relative w-full overflow-hidden">
              <div className="flex w-max gap-8 animate-scroll">
                {[...category.skills, ...category.skills, ...category.skills, ...category.skills].map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 shrink-0 cursor-pointer"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="rounded-full bg-white object-contain p-2 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 border-transparent transition-transform duration-300"
                    />
                    <span className="text-gray-300 text-xs sm:text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Skills;