import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Slider images (ensure these paths are correct)
import odiImg from '../assets/odi.jpeg';
import t20Img from '../assets/t20.jpeg';
import testImg from '../assets/test.jpeg';

// Importing a search icon (you can use any icon library, here I'm assuming FontAwesome)
import { FaSearch } from 'react-icons/fa';

const Slider = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigateHome = () => {
    window.location.href = '/'; // Redirect to home page when search icon is clicked
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-20">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold" data-aos="fade-up">
          Our Feature
        </h2>
        <p className="text-xl mt-2" data-aos="fade-up" data-aos-delay="200">
          Any two formats you can participate in
        </p>
      </div>

      {/* Sliders */}
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
        {/* ODI Slider */}
        <div className="relative group" data-aos="fade-right" data-aos-delay="400">
          <img
            src={odiImg}
            alt="ODI Format"
            className="w-80 object-cover rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 cursor-pointer group-hover:brightness-50"
            style={{ height: 'calc(15rem + 2cm)' }} // Increase height by 2cm
          />
          {/* Dim Light Slide Animation */}
          <div className="absolute inset-0 bg-gray-100 bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out">
            <p className="text-black text-sm font-light mb-2">Coming Soon October 20, 2024</p>
            <FaSearch
              onClick={navigateHome}
              className="text-pink-500 text-xl cursor-pointer hover:text-pink-600 transition duration-300"
            />
          </div>
        </div>

        {/* T20 Slider */}
        <div className="relative group" data-aos="fade-right" data-aos-delay="600">
          <img
            src={t20Img}
            alt="T20 Format"
            className="w-80 object-cover rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 cursor-pointer group-hover:brightness-50"
            style={{ height: 'calc(15rem + 2cm)' }} // Increase height by 2cm
          />
          {/* Dim Light Slide Animation */}
          <div className="absolute inset-0 bg-gray-200 bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out">
            <p className="text-black text-sm font-light mb-2">Coming Soon October 25, 2024</p>
            <FaSearch
              onClick={navigateHome}
              className="text-green-500 text-xl cursor-pointer hover:text-green-600 transition duration-300"
            />
          </div>
        </div>

        {/* Test Match Slider */}
        <div className="relative group" data-aos="fade-right" data-aos-delay="800">
          <img
            src={testImg}
            alt="Test Format"
            className="w-80 object-cover rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 cursor-pointer group-hover:brightness-50"
            style={{ height: 'calc(15rem + 2cm)' }} // Increase height by 2cm
          />
          {/* Dim Light Slide Animation */}
          <div className="absolute inset-0 bg-gray-300 bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out">
            <p className="text-black text-sm font-light mb-2">Coming Soon December 2, 2024</p>
            <FaSearch
              onClick={navigateHome}
              className="text-orange-500 text-xl cursor-pointer hover:text-orange-600 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
