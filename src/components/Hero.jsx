import React from "react";
import heroBg from "../assets/iphone-bg.png"; // Adjust path if needed

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center px-10"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="max-w-xl text-white">
        <h4 className="text-gray-400 text-lg mb-2">Pro.Beyond.</h4>
        <h1 className="text-6xl font-thin">
          IPhone 14 <span className="font-bold">Pro</span>
        </h1>
        <p className="text-gray-400 text-md mt-4">
          Created to change everything for the better. For everyone
        </p>
        <button className="mt-6 btn btn-outline text-white border-white hover:bg-white hover:text-black">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;