import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PiBuildingOfficeThin } from "react-icons/pi";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, });
    AOS.refresh();
  }, []);

  return (
    <section className="text-center w-[90%] mx-auto py-10">
      <h1
        className="text-4xl font-semibold uppercase tracking-wider text-[#a9804e] mb-8"
        data-aos="fade-up"
      >
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Image */}
        <div
          data-aos="fade-right"
          className="w-full md:w-1/2 group overflow-hidden rounded-lg shadow-md"
        >
          <img
            src="https://www.Varmalla.com/wp-content/uploads/2023/10/Wedding.webp"
            alt="Wedding Celebration"
            className="w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Right Side - Form & Content */}
        <div data-aos="fade-left" className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl font-semibold text-[#a9804e] mb-4 uppercase tracking-wider">
            Connect With Our Wedding Experts
          </h2>
          <p className="text-xl text-gray-700 mb-6 font-thin tracking-wider">
            To embark on your exquisite wedding journey with Namrata, we invite
            you to connect with our team of dedicated wedding specialists. Our
            experts will thoughtfully attend to your desires and meticulously
            craft the ultimate celebration of your love story.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            {/* Name, Email, Phone - in one line */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                className="w-full md:w-1/3 p-2 border-b border-gray-400 outline-none focus:border-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full md:w-1/3 p-2 border-b border-gray-400 outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone*"
                className="w-full md:w-1/3 p-2 border-b border-gray-400 outline-none focus:border-blue-500"
              />
            </div>

            {/* Message Box */}
            <textarea
              name="message"
              placeholder="Message*"
              className="w-full p-2 border-b border-gray-400 outline-none focus:border-blue-500 h-24"
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#a9804e] text-white px-20 py-3 text-lg rounded-md shadow-md hover:bg-white hover:text-[#a9804e] hover:border-[#a9804e] border transition-all duration-300 uppercase"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-16">
        {/* Google Map Section */}
        <div className="w-full md:w-1/2 h-[60vh]" data-aos="zoom-in">
          <iframe
            title="Google Map"
            className="w-full h-full rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.671291198937!2d77.0345533!3d28.4232409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23d7cf99df15%3A0x8a827c9a59406c4c!2sLandmark%20Cyber%20Park!5e0!3m2!1sen!2sin!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Address Section */}
        <div
          className="w-full md:w-1/2 text-left pl-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-4xl font-semibold tracking-wider text-[#a9804e] mb-4">
            GET IN TOUCH
          </h2>
          <h3 className="text-xl font-thin tracking-wider mt-10 text-gray-700">
            <PiBuildingOfficeThin className="inline-block mr-2 text-2xl" />
            2nd Floor, Plot No.-64, Block-F, <br />
            Sector-8, Noida, Uttar Pradesh, India
          </h3>
          <h3 className="text-xl tracking-wider font-thin pt-6 text-gray-700">
            📧 info@namratauniversal.com
          </h3>
          <h3 className="text-xl tracking-wider font-thin pt-6 text-gray-700">
            📞 +918506922777, +918506944777
          </h3>
        </div>
      </div>

      <div
        className="p-6 rounded-lg mt-10"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className="flex justify-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#a9804e] mb-6 tracking-wider uppercase text-center max-w-4xl">
            SUBSCRIBE TO OUR NEWSLETTER AND NEVER MISS ANOTHER UPDATE
          </h2>
        </div>
        <p className="text-xl font-thin text-gray-700 mb-4 tracking-wider">
          Join our exclusive newsletter community today and be the first to
          receive the latest insights, trends, and tips in luxury wedding
          management. Sign up now and experience the Namrata difference for
          yourself.
        </p>
        <form className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md p-3 mb-4 rounded-md border border-gray-300"
          />
          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I accept all the Terms & Conditions by subscribing to the
              Newsletter
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#a9804e] text-white px-10 py-3 text-lg rounded-md shadow-md hover:bg-white hover:text-[#a9804e] hover:border-[#a9804e] border transition-all duration-300 uppercase"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
