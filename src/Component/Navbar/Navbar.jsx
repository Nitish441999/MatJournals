import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-rose-400 sticky top-0 w-full z-20 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center px-4 py-5">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full"
              src="https://i.imgur.com/SMEFxXy.jpeg"
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
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="hidden md:flex mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-3 text-lg font-thin text-white">
              <li className="cursor-pointer tracking-wide">
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
              <li className="cursor-pointer tracking-wide">
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
              <li className="cursor-pointer tracking-wide">
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
              <li className="cursor-pointer tracking-wide">
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
      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="absolute bg-rose-400 w-full left-0 right-0 md:hidden">
          <ul className="flex flex-col items-center gap-3 py-3 text-lg font-thin text-white">
            <li className="cursor-pointer tracking-wide">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-black"
                    : "hover:border-b-2 hover:border-black"
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li className="cursor-pointer tracking-wide">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-black"
                    : "hover:border-b-2 hover:border-black"
                }
                onClick={toggleMenu}
              >
                Experience
              </NavLink>
            </li>
            <li className="cursor-pointer tracking-wide">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-black"
                    : "hover:border-b-2 hover:border-black"
                }
                onClick={toggleMenu}
              >
                Project
              </NavLink>
            </li>
            <li className="cursor-pointer tracking-wide">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-black"
                    : "hover:border-b-2 hover:border-black"
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
