import React, { useState } from 'react';
import edaPortfolio from './assets/eda-portfolio.jpeg';

import article1 from './assets/blogs/article1.jpeg'
import article2 from './assets/blogs/article2.jpeg'
import article3 from './assets/blogs/article3.jpeg'
import article4 from './assets/blogs/article4.jpeg'
import article5 from './assets/blogs/article5.jpeg'
import article6 from './assets/blogs/article6.jpeg'
import article7 from './assets/blogs/article7.png'
import article8 from './assets/blogs/article8.png'
import article9 from './assets/blogs/article9.png'
import article10 from './assets/blogs/article10.png'

const blogData = [
  {
    category: 'Data Science',
    title: 'Lists V/S Numpy Arrays',
    description:
      'Compare Python lists and NumPy arrays, focusing on speed and memory efficiency for Data Science',
    image: article1,
    link: 'https://medium.com/@abhinava808/python-lists-vs-numpy-arrays-why-speed-and-memory-matter-in-data-science-06bc64752b7a',
  },
  {
    category: 'Data Science',
    title: 'Advance Pandas Function',
    description:
      'Explores advanced Pandas functions such as .apply(), .groupby() and more...',
    image: article2,
    link: 'https://medium.com/@abhinava808/mastering-pandas-advanced-functions-that-make-data-analysis-way-easier-7d0d1a0ca89b',
  },
  {
    category: 'Data Science',
    title: 'Basic Web Scraping',
    description:
      'Extract structured data by fetching, parsing and organizing web content using Requests, BeautifulSoup and Pandas',
    image: article3,
    link: 'https://medium.com/@abhinava808/web-scraping-for-ml-projects-creating-a-clean-dataset-from-quotestoscrape-com-10d797bb7b4c',
  },
  {
    category: 'Machine Learning',
    title: 'Dynamic Content Scraping',
    description:
      'Overcome static limitations by extracting dynamic JavaScript and AJAX content using Python and Selenium automation',
    image: article4,
    link: 'https://medium.com/@abhinava808/web-scraping-beyond-the-static-mastering-dynamic-content-with-selenium-and-python-d532beca3883',
  },
  {
    category: 'Data Science',
    title: 'Advanced SQL',
    description:
      'Write clean, scalable SQL using sub-queries, views and stored procedures to optimize Data Science workflows',
    image: article5,
    link: 'https://medium.com/@abhinava808/clean-scalable-sql-for-data-scientists-a-practical-guide-to-sub-queries-and-views-c5b1a738523f',
  },
  {
    category: 'Machine Learning',
    title: 'ML Lifecycle',
    description:
      'Solve Machine Learning problems end-to-end using an eight-step framework, from problem definition to model deployment',
    image: article6,
    link: 'https://medium.com/@abhinava808/the-8-practical-steps-i-follow-to-solve-any-machine-learning-problem-a50ad1abcaae',
  },
  {
    category: 'Data Science',
    title: 'Github Basics',
    description:
      'Track code changes, manage branches and undo mistakes by mastering essential Git workflows and commands',
    image: article7,
    link: 'https://medium.com/@abhinava808/github-basics-everyone-should-know-e679ba465d2d',
  },
  {
    category: "Machine Learning",
    title: "Linear Regression from Scratch",
    description: "Build Linear Regression model from scratch using Pytorch",
    image: article8,
    link: "https://medium.com/@abhinava808/a-beginners-guide-to-pytorch-building-linear-regression-from-the-ground-up-7f864d70fd94"
  },
  {
    category: "Machine Learning",
    title: "Neural Networks from Scratch",
    description: "Build a Neural Network from scratch using Pytorch",
    image: article9,
    link: "https://medium.com/@abhinava808/pytorch-for-beginners-how-i-built-a-neural-network-in-under-50-lines-of-code-0748922ae877"
  },
  {
    category: "Deep Learning",
    title: "Self-Attention from Scratch",
    description: "Implement 'Attention is all you need' from scratch using Pytorch",
    image: article10,
    link: "https://medium.com/@abhinava808/queries-keys-and-values-an-intuitive-guide-to-self-attention-b79e21ae8ecd"
  },
];

const Blogs = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showAll, setShowAll] = useState(false); // NEW: State to toggle visible blogs

  const closeModal = () => setActiveVideo(null);

  // Safely reverse the array without mutating the original, then determine how many to show
  const reversedBlogs = [...blogData].reverse();
  const displayedBlogs = showAll ? reversedBlogs : reversedBlogs.slice(0, 6);

  return (
    <div className="container px-5 py-4 mx-auto">
      <h2 className="text-4xl mb-10 font-light tracking-widest text-gray-600 text-center">
        B L O G S
      </h2>
      <div className="flex flex-wrap -m-4">
        {displayedBlogs.map((blog, index) => (
          <div key={index} className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 rounded-lg overflow-hidden text-center relative">
              <div
                className="absolute inset-0 opacity-70 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${blog.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="relative z-10 h-full px-8 pt-16 pb-24">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {blog.category}
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {blog.title}
                </h1>
                <p className="leading-relaxed mb-3">{blog.description}</p>

                <div className="absolute bottom-0 left-0 w-full py-4 flex justify-center space-x-3">
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white/90 hover:bg-white border border-gray-600 text-gray-600 hover:text-gray-900 text-sm font-medium rounded-full transition-all duration-300 hover:shadow-md backdrop-blur-sm"
                  >
                    Visit Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NEW: Show More / Show Less Button */}
      {reversedBlogs.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-white hover:bg-gray-50 border border-gray-600 text-gray-600 hover:text-gray-900 text-sm font-medium rounded-full transition-all duration-300 hover:shadow-md"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;