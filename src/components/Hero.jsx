import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">Share Your Story</span>
                <br />
                <span className="text-gray-800">With the World</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover amazing stories, share your thoughts, and connect with a community of writers and readers on Blotter.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/blogs"
                className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-modern"
              >
                Explore Blotters
              </Link>
              <Link
                to="/register"
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-300"
              >
                Start Writing
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-purple-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <img 
                src={assets.hero} 
                alt="Hero" 
                className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Hero;