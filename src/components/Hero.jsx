import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white mt-24">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-6 py-4">
          GROWING WITH DATA.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-3xl text-xl font-bold">
            Fast, flexible finacing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-lg font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
