import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-[90%] mx-auto py-10 overflow-hidden">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-center text-blue-600 mb-10 uppercase tracking-wider">
        Get In Touch With Us
      </h1>

      <div className="flex flex-col md:flex-row w-full">
        {/* Left Side - Contact Info */}
        <div data-aos="fade-right" className="w-full md:w-1/2 space-y-6">
          <div>
            <h3 className="text-3xl font-semibold text-blue-600 tracking-wider uppercase">
              Postal Address
            </h3>
            <h4 className="text-xl font-semibold tracking-wider uppercase mt-2 mx-4">
              MAT JOURNALS PVT. LTD.
            </h4>
            <p className="text-xl my-2 mx-4">
              Office No-301, 2nd Floor, Plot No:CS-4, Gyan Khand-2, Indirapuram,
              Ghaziabad, Uttar Pradesh, India, Pin 201014
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-blue-600 tracking-wider uppercase flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600 text-3xl " />
              Phone Number
            </h3>
            <div className="flex items-center gap-2 text-xl">
              <p>
                +91-8506060024, +91-8506060041, <br />
                0120-4289321, 0120-4289322
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-blue-600 tracking-wider uppercase flex gap-3 items-center">
              <FaEnvelope /> Email
            </h3>
            <div className="flex items-center gap-2 text-xl">
              {/* <FaEnvelope className="text-blue-600 text-3xl m-2" /> */}
              <p>
                info@matjournals.com,
                <br /> matjournals@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form & Content */}
        <div data-aos="fade-left" className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl font-semibold text-blue-600 mb-4 uppercase tracking-wider">
            Connect With Our Wedding Experts
          </h2>

          {/* Contact Form */}
          <form className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="w-full p-2 border-b border-gray-400 outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="w-full p-2 border-b border-gray-400 outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              className="w-full p-2 border-b border-gray-400 outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              placeholder="Message*"
              className="w-full p-2 border-b border-gray-400 outline-none focus:border-blue-500 h-24"
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-20 py-3 text-lg rounded-md shadow-md hover:bg-white hover:text-blue-600 hover:border-blue-600 border transition-all duration-300 uppercase"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
