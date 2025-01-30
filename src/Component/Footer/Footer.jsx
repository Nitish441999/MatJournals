import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#a9804e] text-white py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-white">
            {["About", "Blogs", "FAQs", "Contact", "Consultancy"].map(
              (item) => (
                <li key={item} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
            DESTINATIONS
          </h3>
          <ul className="space-y-2 text-white">
            {["India", "UAE", "Turkey", "Thailand"].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Our Locations */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
            OUR LOCATIONS
          </h3>
          <ul className="text-white space-y-3 text-sm">
            <li>
              <strong>DELHI / NCR:</strong> 1st Floor, Landmark Cyber Park,
              Gurugram, Haryana
            </li>
            <li>
              <strong>AHMEDABAD:</strong> Regus, Earth Arise, 11th floor, SG
              Highway
            </li>
            <li>
              <strong>MUMBAI:</strong> Regus Level 4, Dynasty Business Park,
              Andheri
            </li>
            <li>
              <strong>HYDERABAD:</strong> SLN Terminus, Gachibowli
            </li>
            <li>
              <strong>BANGALORE:</strong> The Estate, Dickenson Road
            </li>
            <li>
              <strong>KOLKATA:</strong> RDB Boulevard, Sector-V, Salt Lake
            </li>
            <li>
              <strong>DUBAI, UAE:</strong> Sheikh Rashid Tower, DWTC
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
            CONTACT US
          </h3>
          <p className="text-white text-sm">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@Namrata.com" className="hover:text-white">
              info@Namrata.com
            </a>
          </p>
          <p className="text-white text-sm mt-2">
            <strong>Call:</strong>{" "}
            <a href="tel:+918083888688" className="hover:text-white">
              +91 80838 88688
            </a>
          </p>
        </div>
      </div>

      {/* Destination Wedding Locations */}
      <div className="w-[90%] mx-auto mt-10">
        <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
          India Destination Wedding Hotels
        </h3>
        <ul className="flex flex-wrap gap-4 text-white text-sm">
          {[
            "Udaipur",
            "Jaipur",
            "Mussoorie",
            "Lonavala",
            "Goa",
            "Karjat",
            "Agra",
          ].map((city) => (
            <li key={city} className="hover:text-white cursor-pointer">
              Destination Wedding Hotels {city}
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media & Copyright */}
      <div className="w-[90%] mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-white text-sm">
        <p>© Namrata Hospitality Pvt. Ltd. | All Rights Reserved</p>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {[
            FaFacebookF,
            FaInstagram,
            FaLinkedinIn,
            FaPinterestP,
            FaTwitter,
            FaYoutube,
          ].map((Icon, index) => (
            <Icon
              key={index}
              className="text-xl hover:text-white cursor-pointer"
            />
          ))}
        </div>

        <p className="text-white text-xs uppercase tracking-wide">
          Website Architect by Nitish Yadav
        </p>
      </div>
    </footer>
  );
}

export default Footer;
