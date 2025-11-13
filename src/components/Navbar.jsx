import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(StoreContext);
  
  return (
    <nav className="sticky top-0 z-50 glass shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/"} className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={assets.logo} 
                alt="Blotter Logo" 
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold">
                <span className="gradient-text">Blotter</span>
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Share Your Story</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
              >
                Blotters
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                to={"/dashboard"}
                className="px-6 py-2.5 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-modern"
              >
                Dashboard
              </Link>
              <button
                onClick={logoutUser}
                className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="px-8 py-2.5 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-modern"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;