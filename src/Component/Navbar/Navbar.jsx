import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-rose-400 sticky top-0 w-full z-20 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center px-4 py-5">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full "
              src="https://i.imgur.com/V1jQHWx.png"
              alt="Profile"
            />
            <Link
              className="text-xl font-sans font-semibold text-white"
              to="/"
            >
              Nitish Kumar
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-3 text-lg font-thin text-white max-sm:ml-7 max-sm:gap-5">
              
              <li className="cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <span className="hidden sm:inline mx-2">|</span>
              <li className="cursor-pointer">
                <Link to="/resume">Experience</Link>
              </li>
              <span className="hidden sm:inline mx-2">|</span>
              <li className="cursor-pointer">
                <Link to="/projects">Project</Link>
              </li>
              <span className="hidden sm:inline mx-2">|</span>
              <li className="cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
