import React from "react";

const Peace = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen relative z-10">
        <div className="w-[779px] h-[275px] text-center mb-8 ">
          <div>
            <h1 className="text-5xl font-bold mb-4">Your Peace of Mind</h1>
            <h4 className="text-2xl font-signature">
              Through our conversion-focused strategies, we ensure that property
              seekers are not just visitors, but engaged prospects ready to make
              their next move in the real estate market
            </h4>
          </div>
          <div className="color-container" id="spot3"></div>
          <div className="color-container" id="spot2"></div>
          <button className="rounded-[32px] px-[64px] py-[16.5px] lg:py-[16.5px] lg:px-[64px] gap-[4px] bg-blue-600 text-white mt-10 hover:shadow-blue transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Peace;
