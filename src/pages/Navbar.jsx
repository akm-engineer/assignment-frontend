import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link to="/">
              <img src={logo} className="w-30 h-16" alt="Logo" />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-gray-600 hover:text-gray-800"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="border border-black   rounded-3xl px-4 py-2 font-bold hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <Link
              to="/contact"
              className="py-3 text-gray-600 hover:text-gray-800"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
