import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Schedule.css'; // Make sure to import the custom CSS

// Countdown component
const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        milliseconds: Math.floor(difference % 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 50); // Updating more frequently for better accuracy

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mt-4 bg-gray-800 p-4 rounded-lg text-white shadow-md">
      <div className="font-bold text-2xl mb-2 ">Join Now</div>
      
      <div className="grid grid-cols-5 gap-2 text-lg font-mono">
        <div>{timeLeft.days || '0'}<span className="block text-sm">Days</span></div>
        <div>{timeLeft.hours || '0'}<span className="block text-sm">Hours</span></div>
        <div>{timeLeft.minutes || '0'}<span className="block text-sm">Minutes</span></div>
        <div>{timeLeft.seconds || '0'}<span className="block text-sm">Seconds</span></div>
        <div>{timeLeft.milliseconds || '0'}<span className="block text-sm">Millisec</span></div>
      </div>
    </div>
  );
};

const SchedulePage = () => {
  const ODIStartDate = '2024-10-20T00:00:00';
  const T20StartDate = '2024-10-25T00:00:00';
  const TestStartDate = '2024-12-02T00:00:00';

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">Countdown stated </h1>
      <p className="text-xl mb-12" data-aos="fade-up" data-aos-delay="200">
        Cricket are Scheduled for Power Sports of Energy
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center">
        {/* ODI */}
        <div className="flex flex-col items-center gif-container">
          <div className="bg-gray-700 rounded-lg p-4 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">ODI</h2>
            <iframe
              src="https://tenor.com/embed/11875695680258927004"
              width="300"
              height="250"
              frameBorder="0"
              className="mb-4"
            ></iframe>
            <Countdown targetDate={ODIStartDate} />
            <div className="celebration-lights"></div> {/* Celebration lights */}
          </div>
        </div>

        {/* T20 */}
        <div className="flex flex-col items-center gif-container">
          <div className="bg-gray-700 rounded-lg p-4 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">T20</h2>
            <iframe
              src="https://tenor.com/embed/25540953"
              width="300"
              height="250"
              frameBorder="0"
              className="mb-4"
            ></iframe>
            <Countdown targetDate={T20StartDate} />
            <div className="celebration-lights"></div> {/* Celebration lights */}
          </div>
        </div>

        {/* Test */}
        <div className="flex flex-col items-center mb-3 gif-container">
          <div className="bg-gray-700 rounded-lg p-4 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">TEST</h2>
            <iframe
              src="https://tenor.com/embed/14425092182453774272"
              width="300"
              height="250"
              frameBorder="0"
              className="mb-4"
            ></iframe>
            <Countdown targetDate={TestStartDate} />
            <div className="celebration-lights"></div> {/* Celebration lights */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
