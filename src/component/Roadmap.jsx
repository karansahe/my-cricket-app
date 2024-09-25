import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Roadmap = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10  bg-clip-padding" data-aos="fade-down">
        Roadmap Of Joining Our Tournament
      </h2>

      {/* Roadmap */}
      <div className="w-full max-w-4xl space-y-10">
        {/* Step 1 */}
        <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-right">
          <div className="flex items-center">
            <span className="bg-pink-500 text-white text-lg font-bold rounded-full h-10 w-10 flex items-center justify-center">
              1
            </span>
            <h3 className="text-2xl font-semibold ml-4">Sign up individually</h3>
          </div>
          <p className="text-gray-300 mt-3 ml-14">
            Every player must create an individual account to participate.
          </p>
          {/* Highlighting animation */}
          <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
        </div>

        {/* Step 2 */}
        <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-left">
          <div className="flex items-center">
            <span className="bg-green-500 text-white text-lg font-bold rounded-full h-10 w-10 flex items-center justify-center">
              2
            </span>
            <h3 className="text-2xl font-semibold ml-4">Select Any Two Formats</h3>
          </div>
          <p className="text-gray-300 mt-3 ml-14">
            Players need to choose two formats in which they wish to compete.
          </p>
          {/* Highlighting animation */}
          <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
        </div>

        {/* Step 3 */}
        <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-right">
          <div className="flex items-center">
            <span className="bg-blue-500 text-white text-lg font-bold rounded-full h-10 w-10 flex items-center justify-center">
              3
            </span>
            <h3 className="text-2xl font-semibold ml-4">Team Captain Registers</h3>
          </div>
          <p className="text-gray-300 mt-3 ml-14">
            The team captain will register all members with their given unique IDs.
          </p>
          {/* Popup animation */}
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
        </div>

        {/* Step 4 */}
        <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-left">
          <div className="flex items-center">
            <span className="bg-yellow-500 text-white text-lg font-bold rounded-full h-10 w-10 flex items-center justify-center">
              4
            </span>
            <h3 className="text-2xl font-semibold ml-4">Entry Fee Submission</h3>
          </div>
          <p className="text-gray-300 mt-3 ml-14">
            Ensure the entry fee is submitted through the platform within the given time frame.
          </p>
          {/* Highlighting animation */}
          <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
        </div>

        {/* Step 5 */}
        <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-right">
          <div className="flex items-center">
            <span className="bg-red-500 text-white text-lg font-bold rounded-full h-10 w-10 flex items-center justify-center">
              5
            </span>
            <h3 className="text-2xl font-semibold ml-4">Game Announcement</h3>
          </div>
          <p className="text-gray-300 mt-3 ml-14">
            Stay tuned for the game schedule and prepare for the challenge!
          </p>
          {/* Popup animation */}
          <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
