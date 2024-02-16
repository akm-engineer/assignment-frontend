import React from "react";
import house from "../images/house-searching.png";

const Inquiry = () => {
  return (
    <div className="container mx-auto text-center mb-8 px-4 mt-15">
      {" "}
      {/* Adjusted margin-top */}
      <h1 className="text-3xl font-bold mb-4">
        Driving Property Inquiries to Conversions
      </h1>
      <h4 className="text-lg font-signature">
        Streamlined Strategies for Real Estate Success
      </h4>
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-10">
        <div className="lg:w-2/5 lg:h-400 mb-4 lg:mb-0">
          <img src={house} alt="house" className="w-full h-auto lg:w-auto" />
        </div>
        <div className="lg:w-3/5 lg:h-373 lg:ml-32">
          <h2 className="text-center lg:text-left mb-4 text-2xl font-bold">
            Optimized Path to Property Purchase
          </h2>
          <h5 className="text-center lg:text-left font-signature font-normal text-base">
            In the dynamic realm of real estate, the journey from a property
            inquiry to a successful conversion demands a well-crafted approach.
            At Osumare, we specialize in guiding potential buyers through this
            journey seamlessly, maximizing inquiries-turned-conversions with
            expert strategies.
          </h5>
          <div className="flex justify-start">
            <button className="rounded-[32px] px-[64px] py-[16.5px] lg:py-[16.5px] lg:px-[64px] gap-[4px] bg-blue-600 text-white mt-10 hover:shadow-blue transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
