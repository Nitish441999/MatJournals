import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(""); // Tracks which dropdown is open
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Image index for animation

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (menu) => {
    setDropdownOpen((prev) => (prev === menu ? "" : menu));
  };

  // Detect scroll and update `isScrolled`
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Image rotation effect
  const images = [
    {
      url: "https://matjournals.com/img/intro-carousel/1.jpg",
    },
    {
      url: "https://matjournals.com/img/intro-carousel/4.jpg",
    },
    {
      url: "https://matjournals.com/img/intro-carousel/5.jpg",
    },
    // {
    //   url: "https://img.freepik.com/premium-photo/coronavirus-covid19-photo-set-banner-concept-medical-treatment_31965-14126.jpg?w=1380",
    // },
    // {
    //   url: "https://img.freepik.com/free-photo/banquet-table-with-sweets_8353-34.jpg?t=st=1738325054~exp=1738328654~hmac=57d0b75c6d272c59b3d264e194b464c2d90c4412e7a1bc577b37ae0710f2b5b0&w=996",
    // },
    // {
    //   url: "https://img.freepik.com/free-photo/cheese-plate-wooden-board-side-view_141793-2336.jpg?t=st=1738320816~exp=1738324416~hmac=6638e505ed1528515922c3dfb63225a07c3b4452836cf5ab566627d81597d53e&w=996",
    // },
  ];
  // const textOverlay = {
  //   text1: "WHERE DREAMS TURN INTO REALITY ",
  //   heading: "CRAFTING RESPLENDENT WEDDING MEMORIES THAT WILL LAST A LIFETIME",
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="h-[110vh] w-full bg-cover bg-center transition-all duration-1000 relative"
      style={{
        backgroundImage: `url(${images[currentImageIndex].url})`,
      }}
    >
      {/* Overlay Text */}
      {/* <div className="absolute bottom-7 left-5 md:left-10 flex flex-col md:flex-row items-start md:items-center justify-center w-[90vw] md:w-[140vh] h-auto md:h-64 py-5 rounded bg-black bg-opacity-30">
        <div className="text-white px-5 md:px-10">
          <span className="text-lg md:text-xl font-semibold tracking-wider">
            {textOverlay.text1}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold my-2 tracking-wider">
            {textOverlay.heading}
          </h1>
          <p className="text-md font-serif md:text-base text-white my-2 tracking-wider">
            Destination Wedding Specialists | Exclusive Wedding Hotel Network |
            Luxury Weddings | Unlock Insider Pricing
          </p>
          <button className="py-2 px-6 md:py-3 md:px-10 bg-[#a9804e] rounded-lg uppercase text-white tracking-wider hover:bg-white hover:text-blue-600 hover:border-[#a9804e] transition-all duration-300">
            Plan My Wedding
          </button>
        </div>
      </div> */}

      <nav
        className={`sticky top-0 w-full z-20 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-blue-600 shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4 py-1">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <img
                className=" h-20 w-40 rounded-md"
                src="https://matjournals.com/img/mat.jpg"
                alt="Logo"
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className=" text-2xl">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex mt-4 md:mt-0">
              <ul className="flex gap-5 text-lg font-semibold uppercase ">
                <li className="cursor-pointer tracking-wide">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-black"
                        : "hover:border-b-2 hover:border-black"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                {/* <li>
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
                </li> */}

                {/* Indian Dropdown */}
                <li
                  className="relative cursor-pointer tracking-wide"
                  onMouseEnter={() => handleDropdown("indian")}
                  onMouseLeave={() => handleDropdown("")}
                >
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-black"
                        : "hover:border-b-2 hover:border-black"
                    }
                  >
                    Journals
                  </NavLink>
                  {dropdownOpen === "indian" && (
                    <div className="absolute top-7 left-0 bg-white text-blue-600 shadow-lg py-2 w-56 rounded-md z-10">
                      <div className="group relative">
                        <NavLink
                          to="/engineering"
                          className="flex items-center justify-between px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                        >
                          Engineering
                          <span className="transform transition-transform duration-300 group-hover:rotate-180">
                            ▼
                          </span>
                        </NavLink>
                        <div className="absolute left-56 top-0 bg-white shadow-lg py-2 w-48 rounded-md z-20 hidden group-hover:block">
                          <NavLink
                            to="/engineering/undergraduate"
                            className="block px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                          >
                            Undergraduate
                          </NavLink>
                          <NavLink
                            to="/engineering/postgraduate"
                            className="block px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                          >
                            Postgraduate
                          </NavLink>
                        </div>
                      </div>

                      <div className="group relative">
                        <NavLink
                          to="/mumbai"
                          className="flex items-center justify-between px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                        >
                          Management
                          <span className="transform transition-transform duration-300 group-hover:rotate-180">
                            ▼
                          </span>
                        </NavLink>
                        <div className="absolute left-56 top-0 bg-white shadow-lg py-2 w-48 rounded-md z-20 hidden group-hover:block">
                          <NavLink
                            to="/mumbai/undergraduate"
                            className="block px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                          >
                            Undergraduate
                          </NavLink>
                          <NavLink
                            to="/mumbai/postgraduate"
                            className="block px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                          >
                            Postgraduate
                          </NavLink>
                        </div>
                      </div>

                      <div className="group relative">
                        <NavLink
                          to="/kolkata"
                          className="flex items-center justify-between px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                        >
                          Pharmacy
                          <span className="transform transition-transform duration-300 group-hover:rotate-180">
                            ▼
                          </span>
                        </NavLink>
                        <div className="absolute left-56 top-0 bg-white shadow-lg py-2 w-48 rounded-md z-20 hidden group-hover:block">
                          <NavLink
                            to="/kolkata/undergraduate"
                            className="block px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                          >
                            Undergraduate
                          </NavLink>
                          <NavLink
                            to="/kolkata/postgraduate"
                            className="block px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                          >
                            Postgraduate
                          </NavLink>
                        </div>
                      </div>

                      <div className="group relative">
                        <NavLink
                          to="/bengaluru"
                          className="flex items-center justify-between px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                        >
                          Nursing
                          <span className="transform transition-transform duration-300 group-hover:rotate-180">
                            ▼
                          </span>
                        </NavLink>
                        <div className="absolute left-56 top-0 bg-white shadow-lg py-2 w-48 rounded-md z-20 hidden group-hover:block">
                          <NavLink
                            to="/bengaluru/undergraduate"
                            className="block px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                          >
                            Undergraduate
                          </NavLink>
                          <NavLink
                            to="/bengaluru/postgraduate"
                            className="block px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                          >
                            Postgraduate
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                {/* International Dropdown */}
                <li
                  className="relative cursor-pointer tracking-wide"
                  onMouseEnter={() => handleDropdown("international")}
                  onMouseLeave={() => handleDropdown("")}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-black"
                        : "hover:border-b-2 hover:border-black"
                    }
                  >
                    Subscribers
                  </NavLink>
                  {dropdownOpen === "international" && (
                    <div className="absolute top-7 left-0 bg-white shadow-lg py-2 w-64 rounded-md z-10">
                      <NavLink
                        to="/intl1"
                        className="block px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        Payments
                      </NavLink>
                      <NavLink
                        to="/intl2"
                        className="block px-4 py-2 text-blue-600 hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        MAT JOURNALS catalogue/price List
                      </NavLink>
                    </div>
                  )}
                </li>

                <li className="cursor-pointer tracking-wide">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-black"
                        : "hover:border-b-2 hover:border-black"
                    }
                  >
                    Indexing
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
                  >
                    DOI
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
                  >
                    Publication Ethics
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
                  >
                    Career
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
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute bg-white text-blue-600 w-80 right-0 md:hidden">
            <ul className="flex flex-col px-5 gap-3 py-3 text-lg font-thin">
              <li className="cursor-pointer tracking-wide uppercase">
                <NavLink to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>

              {/* Indian Dropdown */}
              <li className="cursor-pointer tracking-wide uppercase">
                <div
                  onClick={() => handleDropdown("indian")}
                  className="flex items-center gap-2"
                >
                  <span>Journals</span>
                </div>
                {dropdownOpen === "indian" && (
                  <div className="flex flex-col gap-2 mt-2">
                    <NavLink
                      to="/engineering"
                      onClick={toggleMenu}
                      className="text-blue-600 hover:underline"
                    >
                      Engineering
                    </NavLink>
                    <NavLink
                      to="/mumbai"
                      onClick={toggleMenu}
                      className="text-blue-600 hover:underline"
                    >
                      Management
                    </NavLink>
                    <NavLink
                      to="/kolkata"
                      onClick={toggleMenu}
                      className="text-blue-600 hover:underline"
                    >
                      Pharmacy
                    </NavLink>
                    <NavLink
                      to="/bengaluru"
                      onClick={toggleMenu}
                      className="text-blue-600 hover:underline"
                    >
                      Nursing
                    </NavLink>
                  </div>
                )}
              </li>

              {/* International Dropdown */}
              <li className="cursor-pointer tracking-wide uppercase">
                <div
                  onClick={() => handleDropdown("international")}
                  className="flex items-center gap-2"
                >
                  <span>Subscribers</span>
                </div>
                {dropdownOpen === "international" && (
                  <div className="flex flex-col gap-2 mt-2">
                    <NavLink
                      to="/intl1"
                      onClick={toggleMenu}
                      className="text-blue-600 hover:underline"
                    >
                      Payments
                    </NavLink>
                    <NavLink
                      to="/intl2"
                      onClick={toggleMenu}
                      className="text-blue-600 hover:underline"
                    >
                      MAT JOURNALS catalogue/price List
                    </NavLink>
                  </div>
                )}
              </li>

              <li className="cursor-pointer tracking-wide uppercase">
                <NavLink to="/contact" onClick={toggleMenu}>
                  Indexing
                </NavLink>
              </li>
              <li className="cursor-pointer tracking-wide uppercase">
                <NavLink to="/contact" onClick={toggleMenu}>
                  DOI
                </NavLink>
              </li>
              <li className="cursor-pointer tracking-wide uppercase">
                <NavLink to="/contact" onClick={toggleMenu}>
                  Publication Ethics
                </NavLink>
              </li>
              <li className="cursor-pointer tracking-wide uppercase">
                <NavLink to="/contact" onClick={toggleMenu}>
                  Career
                </NavLink>
              </li>
              <li className="cursor-pointer tracking-wide uppercase">
                <NavLink to="/contact" onClick={toggleMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
