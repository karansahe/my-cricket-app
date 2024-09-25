import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css"; // Import the CSS for additional styles

// Import the images
import win1 from "../assets/win.jpg";
import win2 from "../assets/win1.jpg";
import win3 from "../assets/win2.jpg";
import win4 from "../assets/win3.webp";
import win5 from "../assets/win4.jpeg";
import win6 from "../assets/win5.jpeg";

const AboutUs = () => {
  // Initialize AOS for animations
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between p-10">
      {/* About Us Section */}
      <div className="md:w-1/2 p-6" data-aos="fade-right">
        <h2 className="text-4xl font-bold mb-2">About Us</h2>
        <h3 className="text-2xl font-bold mb-12">Our Tournament</h3>
        <p className="text-lg">
          Established in 2003, our cricket tournament has grown into one of the
          most anticipated events in the cricketing calendar, featuring
          competitive action in ODI, T20, and Test match formats. With a legacy
          of over two decades, we are committed to promoting the spirit of the
          game, bringing together skilled players and teams from across the
          nation. Our tournament is designed to offer a platform for both
          seasoned professionals and emerging talents, encouraging healthy
          competition and camaraderie. Each year, we aim to raise the bar by
          providing high-quality facilities, ensuring fair play, and creating
          memorable experiences for players and fans alike. We are proud to
          contribute to the development of cricket, fostering not only athletic
          excellence but also the values of teamwork, leadership, and
          sportsmanship. Join us as we continue to shape the future of cricket
          with passion, dedication, and a love for the game.
        </p>
      </div>

      {/* Image Section */}
      <div
        className="md:w-1/2 relative flex flex-col items-center"
        data-aos="fade-left"
      >
        <div className="image-slider grid grid-cols-2 gap-6 relative">
          <img
            src={win1}
            alt="Win 1"
            className="w-full h-48 object-cover rounded-lg  shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer"
          />
          <img
            src={win2}
            alt="Win 2"
            className="w-full h-48 object-cover rounded-lg  shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer"
          />
          <img
            src={win3}
            alt="Win 3"
            className="w-full h-48 object-cover rounded-lg  shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer"
          />
          <img
            src={win4}
            alt="Win 4"
            className="w-full h-48 object-cover rounded-lg  shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer"
          />
          <img
            src={win5}
            alt="Win 5"
            className="w-full h-55 object-cover rounded-lg  shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer"
          />
          <img
            src={win6}
            alt="Win 6"
            className="w-full h-90 object-cover rounded-lg  shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
