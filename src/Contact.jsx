import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [flashMessage, setFlashMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to backend (Flask or any API endpoint)
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFlashMessage(result.message || 'Message sent successfully!');
        setFormData({ email: '', message: '' });
      } else {
        setFlashMessage(result.message || 'Something went wrong.');
      }
    } catch (error) {
      setFlashMessage('Error sending message.');
    }

    // Auto-dismiss message after 3 seconds
    setTimeout(() => setFlashMessage(''), 3000);
  };

  return (
    <div className="relative flex justify-center items-center">
      {/* Google Map */}
      <div className="absolute inset-0">
        <iframe
          title="map"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14282.283131888076!2d80.33597949072268!3d26.501761334546643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1748952702097!5m2!1sen!2sin"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="container px-5 py-24 mx-auto flex relative z-10">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md">
          <form onSubmit={handleSubmit}>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font text-center">Contact Me</h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Have a question, want to collaborate, or just want to say hello? Feel free to reach out — I’d love to hear from you.
            </p>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg"
            >
              Send Message
            </button>
            <p className="text-xs text-gray-500 mt-3">
              I'll do my best to respond within 1–2 business days. Thanks for reaching out!
            </p>
          </form>
        </div>
      </div>

      {/* Flash Message */}
      {flashMessage && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 transform rounded bg-green-600 px-6 py-3 text-black shadow-md z-20">
          {flashMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;