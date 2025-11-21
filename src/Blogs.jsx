import React, { useState } from 'react';
import edaPortfolio from './assets/eda-portfolio.jpeg';

import article1 from './assets/blogs/article1.jpeg'
import article2 from './assets/blogs/article2.jpeg'
import article3 from './assets/blogs/article3.jpeg'
import article4 from './assets/blogs/article4.jpeg'
import article5 from './assets/blogs/article5.jpeg'
import article6 from './assets/blogs/article6.jpeg'
import article7 from './assets/blogs/article7.png'


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
];

const Blogs = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const closeModal = () => setActiveVideo(null);

  return (
    <div className="container px-5 py-4 mx-auto">
      <h2 className="text-4xl mb-10 font-light tracking-widest text-gray-600 text-center">
        B L O G S
      </h2>
      <div className="flex flex-wrap -m-4">
        {blogData.map((blog, index) => (
          <div key={index} className="p-4 lg:w-1/3">
            <div
              className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative backdrop-blur-lg"
              style={{
                backgroundImage: `url(${blog.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {blog.category}
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                {blog.title}
              </h1>
              <p className="leading-relaxed mb-3">{blog.description}</p>

              <div className="absolute bottom-0 left-0 w-full py-4 flex justify-center space-x-3">
                {/* Visit Project Button */}
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white/80 hover:bg-white border border-gray-200 text-gray-700 hover:text-gray-900 text-sm font-medium rounded-full transition-all duration-300 hover:shadow-md backdrop-blur-sm"
                >
                  Visit Blog
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;