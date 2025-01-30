import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for the animations
      once: true, // Animation triggers once
    });
  }, []);

  return (
    <section className="text-center w-[90%] mx-auto py-10">
      <h1
        className="text-4xl font-semibold uppercase tracking-wider text-[#a9804e] mb-8"
        data-aos="fade-up"
      >
        About Us
      </h1>

      <p
        className="text-xl font-thin tracking-wider text-gray-700 mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        From selecting the most prestigious venues to curating sumptuous menus,
        Namrata’s unparalleled expertise in wedding management guarantees a
        seamless and enchanting experience. We are passionate about bringing
        your dreams to life, and it all starts with a conversation. Contact us
        to unveil destination wedding packages and cost.
      </p>

      <div
        className="flex flex-col md:flex-row h-auto md:h-[70vh] px-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Left Side - Image */}
        <div className="md:w-1/2 overflow-hidden mb-6 md:mb-0">
          <img
            src="https://www.Varmalla.com/wp-content/uploads/2023/05/About-Us2.jpg"
            alt="Wedding Experts"
            className="w-full h-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side - Text & Button */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-4xl tracking-wider font-semibold text-[#a9804e] mb-4 uppercase">
            Connect With Our Wedding Experts
          </h1>
          <p className="text-gray-700 mb-6 text-xl font-thin tracking-wider">
            Namrata proudly stands as the epitome of opulence and grandeur
            worldwide in wedding and hospitality management. As a collective of
            passionate dream-weavers, we are driven by a singular vision to
            curate extraordinary and lavish affairs that etch everlasting
            memories. Our repertoire of services encompasses the finest in
            Destination Weddings, Exquisite Hospitality, Luxurious Residential
            Celebrations, and beyond. With an unwavering commitment to
            excellence, affordability, and creating moments that exude sheer
            magnificence, we redefine the essence of luxury weddings.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <button className="bg-[#a9804e] text-white px-8 py-3 rounded-lg uppercase shadow-md hover:bg-white hover:text-[#a9804e] hover:border-[#a9804e]">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row py-16"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="md:w-1/2">
          <h3 className="text-4xl uppercase tracking-wider font-semibold text-[#a9804e] mb-3">
            Why Namrata
          </h3>
          <p className="text-lg font-thin tracking-wider mb-6">
            We’re the unique pioneers in the wedding industry with a focus on
            planning your big day and also for life beyond it. We help you all
            the way from finding the perfect wedding venues to weaving the best
            inspirations for your big moment.
          </p>
          <div className="mt-3 space-y-3">
            {/* Progress bar list */}
            <div>
              <span className="flex justify-between mb-2">
                <h3 className="text-xl font-thin tracking-wide">
                  End-to-End Wedding Solutions
                </h3>
                <span>100%</span>
              </span>
              <div className="border p-2 rounded-full mb-4">
                <p className="bg-[#a9804e] w-full h-1 rounded-full"></p>
              </div>
            </div>
            <div>
              <span className="flex justify-between mb-2">
                <h3 className="text-xl font-thin tracking-wide">
                  Hassle-free Guests Management
                </h3>
                <span>100%</span>
              </span>
              <div className="border p-2 rounded-full mb-4">
                <p className="bg-[#a9804e] w-full h-1 rounded-full"></p>
              </div>
            </div>
            <div>
              <span className="flex justify-between mb-2">
                <h3 className="text-xl font-thin tracking-wide">
                  Exclusive access to premium Destination Wedding Locations
                </h3>
                <span>100%</span>
              </span>
              <div className="border p-2 rounded-full mb-4">
                <p className="bg-[#a9804e] w-full h-1 rounded-full"></p>
              </div>
            </div>
            <div>
              <span className="flex justify-between mb-2">
                <h3 className="text-xl font-thin tracking-wide">
                  Promise of Quality
                </h3>
                <span>100%</span>
              </span>
              <div className="border p-2 rounded-full mb-4">
                <p className="bg-[#a9804e] w-full h-1 rounded-full"></p>
              </div>
            </div>
            <div>
              <span className="flex justify-between mb-2">
                <h3 className="text-xl font-thin tracking-wide">
                  Exquisite Moments to Cherish Forever
                </h3>
                <span>100%</span>
              </span>
              <div className="border p-2 rounded-full mb-4">
                <p className="bg-[#a9804e] w-full h-1 rounded-full"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-6 overflow-hidden flex items-center">
          {/* Added margin-left for larger screens */}
          <img
            src="https://www.Varmalla.com/wp-content/uploads/2023/05/About-Us3.jpg"
            alt="Wedding Team"
            className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            data-aos="fade-left"
          />
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

export default About;
