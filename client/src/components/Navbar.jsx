import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0f0f0f]  text-white px-4 py-6 shadow-sm border-b border-gray-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold tracking-tight">Url Shortner</span>
          </div>
          <div className="hidden md:flex items-center space-x-7 text-sm font-medium">
            <a href="#" className="hover:text-gray-300">Community</a>
            <a href="#" className="hover:text-gray-300">Teams</a>
            <a href="#" className="hover:text-gray-300">Learn</a>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-1.5 rounded-md bg-[#2a2a2a] hover:bg-[#333] text-sm font-medium">
            Log in
          </button>
          <button className="px-4 py-1.5 rounded-md bg-white text-black text-sm font-medium hover:bg-gray-100">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
