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
    <footer className="bg-blue-700 w-full text-white py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b py-2">
        {/* Company Info */}
        <div>
          <img
            src="https://matjournals.com/img/mat.jpg"
            alt="MAT Journal Logo"
            loading="lazy"
            className="mb-4 rounded-lg "
          />
          <p className="text-sm">
            MAT Journal is a leading platform providing high-quality scientific
            content for academia, research institutions, and corporate R&D
            departments. We offer innovative information, products, and services
            to enhance knowledge sharing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-white">
            {[
              "Journals",
              "Subscribers",
              "Indexing",
              "Career",
              "DOI",
              "Contact",
              "Publication Ethics",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b uppercase tracking-wide border-gray-600 pb-2">
            Subscribers
          </h3>
          <ul className="space-y-2 text-white">
            {["Payments", "Mat Journamls catalogue/price List"].map((item) => (
              <li
                key={item}
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
            CONTACT US
          </h3>
          <p className="text-white text-sm">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@Namrata.com" className="hover:text-gray-300">
              info@matjournals.com, matjournals@gmail.com
            </a>
          </p>
          <p className="text-white text-sm mt-2">
            <strong>Call:</strong>{" "}
            <a href="tel:+918083888688" className="hover:text-gray-300">
              +91-8506060024, +91-8506060041, 0120-4289321, 0120-4289322
            </a>
          </p>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="w-[90%] mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-white text-sm">
        <p className="text-center md:text-left">
          © MAT Journals Pvt. Ltd. | All Rights Reserved
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {[
            { Icon: FaFacebookF, link: "https://facebook.com" },
            { Icon: FaInstagram, link: "https://instagram.com" },
            { Icon: FaLinkedinIn, link: "https://linkedin.com" },
            { Icon: FaPinterestP, link: "https://pinterest.com" },
            { Icon: FaTwitter, link: "https://twitter.com" },
            { Icon: FaYoutube, link: "https://youtube.com" },
          ].map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="text-xl hover:text-gray-300 transition-colors cursor-pointer" />
            </a>
          ))}
        </div>

        <p className="text-white text-xs uppercase tracking-wide text-center md:text-right">
          Website Architect by Nitish Yadav
        </p>
      </div>
    </footer>
  );
}

export default Footer;
