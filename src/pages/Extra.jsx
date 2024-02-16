import React from "react";
import landingImage from "../images/cuate.png";

const Extra = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-center mb-8 font-bold text-2xl leading-3xl ">
          Real Estate-Focused Digital Mastery
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 lg:mr-4 mb-4 lg:mb-0">
            <img src={landingImage} alt="cuate" className="w-96 h-auto" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-center lg:text-left mb-4 text-2xl font-bold ">
              Unlock the Potential of Digital Real Estate Excellence
            </h2>
            <h5 className="text-center lg:text-left  font-signature font-normal text-base ">
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand's success in the ever-evolving
              digital property market.
            </h5>
            <button className="rounded-[32px] px-[64px] py-[16.5px] lg:py-[16.5px] lg:px-[64px] gap-[4px] bg-blue-600 text-white mt-4 hover:shadow-blue transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
