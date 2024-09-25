import React from "react";
import playground from "../assets/playground.jpg"; // Path to your background image

export const FrontVideo = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src={playground}
        alt="Cricket Playground"
        className="w-full h-full object-cover brightness-50" // Darkens the image slightly
      />

      {/* Main Content (Centered) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {/* Flashing 'Hurry Up' text */}
        <h1 className="text-5xl font-bold text-blue-400 animate-slideInLeft flash-text">
          !!! Hurry Up !!!
        </h1>

        {/* Static Text (No typing effect here) */}
        <p className="text-2xl text-white mt-4">
          Best Cricket 2024 Premium Tournament
        </p>

        {/* Typing effect applied to the desired text */}
        <div className="mt-6">
          <span className="typing-effect text-xl text-yellow-500">
            giyhskfbkfbvkefbvkefhvkuerfnhvkuefrnhkejrhfnkejnhkerjfnhveukfvnhuefbveuifwbviuev
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-green-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
            Get Started
          </button>
          <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
