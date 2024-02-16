/* eslint-disable react-hooks/exhaustive-deps */

import { Link } from "react-router-dom";
import logo from "../components/logo.png";

const Header = () => {
  return (
    <header className="">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <Link to="/">
          <img src={logo} className="w-172 h-100" alt="" />
        </Link>

        <Link to="/contact">
          <button className="border border-black font-bold rounded-3xl gap-4 p-2 pl-7 pr-7 hover:border-blue-600  hover:text-blue-600">
            Contact us
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
