import React from 'react';

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white md:bg-gray-50">
      
      {/* 1. DESKTOP MAP BACKGROUND 
        Hidden on mobile (hidden), Visible on medium screens (md:block)
      */}
      <div className="hidden md:block absolute inset-0 z-0">
        <iframe
          title="Google Map - London"
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ filter: 'grayscale(1) contrast(1.1) opacity(0.75)' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60639185604!2d-0.4312382292249252!3d51.5286070217773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1766015929192!5m2!1sen!2suk"
        ></iframe>
        {/* Map Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/90 via-gray-50/80 to-white/70"></div>
      </div>

      {/* 2. CONTACT CONTENT 
        On Mobile: Clean text on white background (no card styles).
        On Desktop: Floating card with shadows and borders.
      */}
      <div className="relative z-10 w-full px-4 sm:px-0">
        <div className="
          w-full max-w-md mx-auto p-6 sm:p-8 
          transition-all duration-300
          
          {/* STYLES APPLIED ONLY ON DESKTOP (md:) */}
          md:backdrop-blur-sm 
          md:bg-white/95 
          md:border md:border-gray-200/50 
          md:rounded-2xl 
          md:shadow-xl 
          md:hover:shadow-2xl md:hover:bg-white/98
        ">
          
          {/* Decorative Top Line */}
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
    </div>
  );
};

export default Contact;