import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-rose-400 sticky top-0 w-full z-20 shadow-md">
      <div className="w-7xl  mx-6">
        <div className="flex flex-wrap justify-between items-center px-4 py-5">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full"
              src="https://i.imgur.com/V1jQHWx.png"
              alt="Profile"
            />
            <NavLink
              className="text-xl font-sans font-semibold text-white"
              to="/"
              exact
            >
              Nitish Kumar
            </NavLink>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-3 text-lg font-thin text-white max-sm:ml-7 max-sm:gap-5">
              <li className="cursor-pointer">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-black"
                      : "hover:border-b-2 hover:border-black"
                  }
                >
                  About
                </NavLink>
              </li>
              <span className="hidden sm:inline mx-2">|</span>
              <li className="cursor-pointer">
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-black"
                      : "hover:border-b-2 hover:border-black"
                  }
                >
                  Experience
                </NavLink>
              </li>
              <span className="hidden sm:inline mx-2">|</span>
              <li className="cursor-pointer">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-black"
                      : "hover:border-b-2 hover:border-black"
                  }
                >
                  Project
                </NavLink>
              </li>
              <span className="hidden sm:inline mx-2">|</span>
              <li className="cursor-pointer">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-black"
                      : "hover:border-b-2 hover:border-black"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
