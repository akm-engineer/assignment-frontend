import { Link } from "react-router-dom";
import logo from "../components/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 bg-white bg-opacity-50 z-50 flex justify-between ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <img src={logo} className="w-24 md:w-32" alt="" />
          </Link>

          <nav className="md:flex md:items-center md:space-x-4">
            <Link to="/contact">
              <button className="border border-black font-bold rounded-3xl px-3 py-2 md:px-4 md:py-3 hover:border-blue-600 hover:text-blue-600">
                Contact us
              </button>
            </Link>
            {/* Add additional navigation links/buttons as needed */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
