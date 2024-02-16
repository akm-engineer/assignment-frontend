import React from "react";
import ellipse from "../images/ellipse.png";
import home from "../images/head.png";
import "../App.css";

const WelcomeNote = () => {
  return (
    <div className="maindeck flex justify-center items-center flex-col mt-32 ">
      <div className="flex justify-center items-center flex-col ">
        <div className="">
          <h1 className="font-bold text-4xl leading-72 text-center">
            Elevate <span className="text-blue-700">Real Estate Success</span>{" "}
            with
          </h1>
          <h1 className="font-bold text-4xl leading-72 text-center mt-4 ">
            Osumare's Digital Expertise
          </h1>
        </div>
        <div className="color-container" id="spot1"></div>
        <div>
          <p className="font-normal text-xl leading-36 text-center mt-4">
            Tailored Solutions for Thriving in the Digital Real Estate Landscape
          </p>
        </div>
        <button className="bg-blue-600 text-white rounded-full mt-4 px-24 py-2 font-semibold hover:shadow-blue transition duration-300">
          Get Started
        </button>
      </div>
      <img src={home} alt="home-iage" id="home-image" />
    </div>
  );
};

export default WelcomeNote;
