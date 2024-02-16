import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/logo.png";
import {
  faHome,
  faBlog,
  faAddressCard,
  faBriefcase,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faFacebook,
  faPinterest,
  faWhatsapp, // Added Whatsapp icon
  faInstagram, // Added Instagram icon
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Importing faPhone and faEnvelope

const Footer = () => {
  return (
    <div className="bg-white p-8">
      <footer
        className="bg-gradient-to-r from-blue-400 to-blue-200 text-white py-8"
        style={{ width: "1280px", height: "657px", borderRadius: "32px" }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row justify-center px-4 h-full ">
          {/* Part 1 */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <img src={logo} alt="Logo" className="w-[124.2px] h-[72px] mb-2" />
            <h4 className="text-lg font-semibold mb-4 w-[365px]">
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </h4>

            <div className="w-[196px] h-[131px] mb-9">
              <h5 className="text-lg font-semibold mb-2">Address</h5>
              <div className="flex items-center mb-2">
                <p>
                  Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                  Pune-14, Maharastra, India.
                </p>
              </div>
            </div>

            <div className="w-[192px] h-[124px] mb-9">
              <h5 className="text-lg font-semibold mb-6">Contact</h5>
              <div className="w-[192px] h-[64px]">
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  <p>Phone: +1234567890</p>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 2 */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Menu</h2>
            <ul>
              <li className="mb-4">
                <Link to="/" className="flex items-center">
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/work" className="flex items-center">
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                  Work
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/blog" className="flex items-center">
                  <FontAwesomeIcon icon={faBlog} className="mr-2" />
                  Blog
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/about" className="flex items-center">
                  <FontAwesomeIcon icon={faAddressCard} className="mr-2" />
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/career" className="flex items-center">
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                  Career
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/services" className="flex items-center">
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Part 3 */}
          <div className="lg:w-1/3 flex flex-col ">
            <h2 className="text-lg font-semibold mb-4">Socials</h2>
            <div className="flex">
              <a href="#" className="mr-4">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="#" className="mr-4">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="#" className="mr-4">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="#" className="mr-4">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="mr-4">
                <FontAwesomeIcon icon={faPinterest} size="2x" />
              </a>
              <a href="#" className="mr-4">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />{" "}
                {/* Added Whatsapp icon */}
              </a>
              <a href="#" className="mr-4">
                <FontAwesomeIcon icon={faInstagram} size="2x" />{" "}
                {/* Added Instagram icon */}
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center mt-8">
        <p className="text-lg font-semibold">
          © 2024 Your Company. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
