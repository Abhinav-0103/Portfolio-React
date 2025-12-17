import React from 'react';

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 sm:px-6 lg:px-8">
      {/* Google Map */}
      <div className="absolute -inset-10 z-0 md:inline">
        <iframe
          title="Google Map - Kanpur"
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ filter: 'grayscale(1) contrast(1.1) opacity(0.75)' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14282.283131888076!2d80.33597949072268!3d26.501761334546643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1748952702097!5m2!1sen!2sin"
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-5 bg-gradient-to-br from-gray-100/90 via-gray-50/80 to-white/70"></div>

      {/* Contact Info Card */}
      <div className="relative z-10 backdrop-blur-sm bg-white/95 border border-gray-200/50 rounded-2xl shadow-xl p-5 sm:p-8 w-full max-w-md mx-auto transition-all duration-300 hover:shadow-2xl hover:bg-white/98">
        
        <div className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mb-8"></div>

        <h2 className="text-gray-800 text-xl sm:text-2xl mb-2 font-light tracking-wide text-center">
          Get In Touch
        </h2>
        <p className="leading-relaxed mb-8 text-gray-500 text-center font-light text-sm sm:text-base tracking-wide">
          Let's connect and create something meaningful together.
        </p>

        <div className="space-y-6">
          {/* Email */}
          <div className="group text-center">
            <p className="text-gray-600 text-xs sm:text-sm font-medium mb-1 tracking-wide uppercase opacity-70">
              Email
            </p>
            <a
              href="mailto:abhinava808@gmail.com"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-base sm:text-lg font-light tracking-wide block break-words"
            >
              abhinava808@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="group text-center">
            <p className="text-gray-600 text-xs sm:text-sm font-medium mb-1 tracking-wide uppercase opacity-70">
              LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/abhinav-kumar-bb334a226/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200 text-base sm:text-lg font-light tracking-wide block"
            >
              /abhinav-kumar
            </a>
          </div>
        </div>

        <div className="mt-6 pt-8 border-t border-gray-200/60">
          <p className="text-xs text-gray-400 text-center font-light tracking-widest uppercase">
            Response within 24 hours
          </p>
        </div>

        <div className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mt-6"></div>
      </div>
    </div>
  );
};

export default Contact;