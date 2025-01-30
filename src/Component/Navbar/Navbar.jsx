import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

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
      url: "https://www.varmalla.com/wp-content/uploads/2023/09/second-slide-banner-img-scaled.webp",
      text1: "WHERE DREAMS TURN INTO REALITY ",
      heading:
        "  CRAFTING RESPLENDENT WEDDING MEMORIES THAT WILL LAST A LIFETIME",
    },
    {
      url: "https://www.varmalla.com/wp-content/uploads/2023/09/first-slide-banner-img.webp",
      text1: "ITC GRAND BHARAT, DELHI-NCR",
      heading:
        "  GET THE BEST DEALS ON THE WORLD'S ELITE DESTINATION WEDDING HOTELS WITH NAMRATA FOOD",
    },
    {
      url: "https://www.varmalla.com/wp-content/uploads/2023/09/forth-slide-banner-img.webp",
      text1: "ATLANTIS, THE PALM, DUBAI ",
      heading: "  ULTRA-LUXURY WEDDING EXPERIENCES IN LUXURIOUS DESTINATIONS",
    },
    {
      url: "https://www.varmalla.com/wp-content/uploads/2023/09/raffles-udaipur-1-6513fde017884-scaled.webp",
      text1: "RAFFLES UDAIPUR ",
      heading: "  UNIQUE LUXURY HOTELS THAT REFLECT YOUR CLASS",
    },
    {
      url: "https://www.varmalla.com/wp-content/uploads/2023/09/jai-mahal-palace-1-652827993b517.webp",
      text1: "ATLANTIS, THE PALM, DUBAI ",
      heading:
        " GET THE BEST DEALS ON THE WORLD'S ELITE DESTINATION WEDDING HOTELS WITH NAMRATA FOOD",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 2 seconds

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
      <div className="absolute bottom-7 left-5 md:left-10 flex flex-col md:flex-row items-start md:items-center justify-center w-[90vw] md:w-[140vh] h-auto md:h-64 py-5 rounded">
        <div className="text-white px-5 md:px-10">
          <span className="text-lg md:text-xl font-semibold tracking-wider">
            {images[currentImageIndex].text1}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold my-2 tracking-wider">
            {images[currentImageIndex].heading}
          </h1>
          <p className="text-md font-serif md:text-base text-white my-2 tracking-wider">
            Destination Wedding Specialists | Exclusive Wedding Hotel Network |
            Luxury Weddings | Unlock Insider Pricing
          </p>
          <button className="py-2 px-6 md:py-3 md:px-10 bg-[#a9804e] rounded-lg uppercase text-white tracking-wider hover:bg-white hover:text-[#a9804e] hover:border-[#a9804e] transition-all duration-300 ">
            Plan My Wedding
          </button>
        </div>
      </div>

      <nav
        className={`sticky top-0 w-full z-20 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-[#a9804e] shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4 py-5">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <img
                className="h-12 w-12 rounded-full"
                src="https://i.imgur.com/SMEFxXy.jpeg"
                alt="Profile"
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
              <ul className="flex gap-10 text-lg font-semibold uppercase ">
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
                <li>
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

                {/* Indian Dropdown */}
                <li
                  className="relative cursor-pointer tracking-wide"
                  onMouseEnter={() => handleDropdown("indian")}
                  onMouseLeave={() => handleDropdown("")}
                >
                  <NavLink
                    to="/resume"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-black"
                        : "hover:border-b-2 hover:border-black"
                    }
                  >
                    Indian
                  </NavLink>
                  {dropdownOpen === "indian" && (
                    <div className="absolute top-7 left-0 bg-white text-[#a9804e] shadow-lg py-2 w-56 rounded-md z-10">
                      <NavLink
                        to="/mumbai"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        Mumbai
                      </NavLink>
                      <NavLink
                        to="/kolkata"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        Kolkata
                      </NavLink>
                      <NavLink
                        to="/bengaluru"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        Bengaluru
                      </NavLink>
                      <NavLink
                        to="/chennai"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        Chennai
                      </NavLink>
                      <NavLink
                        to="/hyderabad"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        Hyderabad
                      </NavLink>
                      <NavLink
                        to="/goa"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        Goa
                      </NavLink>
                      <NavLink
                        to="/udaipur"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        Udaipur
                      </NavLink>
                      <NavLink
                        to="/jaipur"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        Jaipur
                      </NavLink>
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
                    to="/projects"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 border-black"
                        : "hover:border-b-2 hover:border-black"
                    }
                  >
                    International
                  </NavLink>
                  {dropdownOpen === "international" && (
                    <div className="absolute top-7 left-0 bg-white shadow-lg py-2 w-56 rounded-md z-10">
                      <NavLink
                        to="/intl1"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        Duabi
                      </NavLink>
                      <NavLink
                        to="/intl2"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        International 2
                      </NavLink>
                      <NavLink
                        to="/uae"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        UAE
                      </NavLink>
                      <NavLink
                        to="/turkey"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        Turkey
                      </NavLink>
                      <NavLink
                        to="/thailand"
                        className="block px-4 py-2 text-[#a9804e] hover:bg-gray-200 hover:pl-8 duration-300"
                      >
                        Thailand
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
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <button className="flex items-center justify-center gap-2 py-3 px-10 text-white text-center bg-[#a9804e] rounded-lg uppercase hover:bg-[#8a6a3c] transition-colors">
              <FaWhatsapp className="text-lg" />
              Chat Now
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute bg-white text-[#a9804e] w-80  right-0 md:hidden">
            <ul className="flex flex-col items-center gap-3 py-3 text-lg font-thin">
              <li className="cursor-pointer tracking-wide uppercase">
                <NavLink to="/about" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer tracking-wide uppercase">
                <NavLink to="/about" onClick={toggleMenu}>
                  About
                </NavLink>
              </li>
              <li className="cursor-pointer tracking-wide uppercase">
                <div
                  onClick={() => handleDropdown("indian")}
                  className="flex items-center gap-2"
                >
                  <span>Indian</span>
                </div>
                {dropdownOpen === "indian" && (
                  <div className="flex flex-col gap-2 mt-2">
                    <NavLink
                      to="/mumbai"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      Mumbai
                    </NavLink>
                    <NavLink
                      to="/kolkata"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      Kolkata
                    </NavLink>
                    <NavLink
                      to="/bengaluru"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      Bengaluru
                    </NavLink>
                    <NavLink
                      to="/chennai"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      Chennai
                    </NavLink>
                    <NavLink
                      to="/hyderabad"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      Hyderabad
                    </NavLink>
                    <NavLink
                      to="/goa"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      Goa
                    </NavLink>
                    <NavLink
                      to="/udaipur"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      Udaipur
                    </NavLink>
                    <NavLink
                      to="/jaipur"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      Jaipur
                    </NavLink>
                  </div>
                )}
              </li>

              <li className="cursor-pointer tracking-wide uppercase">
                <div
                  onClick={() => handleDropdown("international")}
                  className="flex items-center gap-2"
                >
                  <span>International</span>
                </div>
                {dropdownOpen === "international" && (
                  <div className="flex flex-col gap-2 mt-2">
                    <NavLink
                      to="/intl1"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      International 1
                    </NavLink>
                    <NavLink
                      to="/intl2"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      International 2
                    </NavLink>
                    <NavLink
                      to="/uae"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      UAE
                    </NavLink>
                    <NavLink
                      to="/turkey"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      Turkey
                    </NavLink>
                    <NavLink
                      to="/thailand"
                      onClick={toggleMenu}
                      className="text-[#a9804e] hover:underline"
                    >
                      Thailand
                    </NavLink>
                  </div>
                )}
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
