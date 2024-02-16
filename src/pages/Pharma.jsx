import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import video from "../images/Video.png";
import avatar from "../images/avatar.png";
import symbol from "../images/Symbol.png";

const Pharma = () => {
  return (
    <div className="container mx-auto text-center mb-8 px-4">
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-4">
          What Our Pharma Partners Say
        </h1>
        <h4 className="text-3xl font-signature">
          Driving Transformations, One Brand at a Time
        </h4>
      </div>
      <div className="w-[1117px] h-[564px] bg-white rounded-lg shadow-lg p-50 pb-50 pl-44 pr-44 flex items-center relative">
        {/* Video Image */}
        <img src={video} alt="" className="w-[600px] h-[400px] rounded-md" />
        {/* Testimonial Details */}
        <div className="ml-8 mt-16">
          <div className="flex items-center ">
            <div className="flex items-center justify-center gap-4">
              <img src={avatar} alt="" />
              <h5 className="font-semibold">Tabish khan</h5>
            </div>
            <img src={symbol} alt="" className="ml-20 py-5" />
          </div>

          <h5 className="text-2xl text-gray-800 mt-6 h-[180px] w-[397px] p-2">
            Osumare's expertise in pharma marketing is unparalleled. Their
            strategies helped us navigate complex regulations while driving
            remarkable growth.
          </h5>
        </div>
        {/* Front and Back icons */}
      </div>
      <div className="mt-5">
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="text-3xl text-blue-600 mr-4 cursor-pointer hover:text-black transition-colors duration-300 "
        />
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="text-3xl text-blue-600 cursor-pointer hover:text-black transition-colors duration-300"
        />
      </div>
    </div>
  );
};

export default Pharma;
