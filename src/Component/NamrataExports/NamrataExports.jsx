import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function NamrataExports() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-5">
      <div className="text-center w-[90%] mx-auto flex flex-col md:flex-row items-center gap-6 bg-gray-50 rounded-r-lg">
        <div
          className="md:w-1/2 overflow-hidden"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src="https://www.varmalla.com/wp-content/uploads/2023/05/meeting-img-1.webp"
            alt="Wedding Experts"
            className="w-full h-auto object-cover rounded-l-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div
          className="md:w-1/2 text-center md:text-left"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-[#a9804e] mb-4">
            Get Exclusive Access To Namrata Wedding Experts
          </h1>
          <p className="text-gray-600 mb-6 text-xl font-thin">
            Step into the world of Luxury Wedding Planning with a click. Our
            Wedding Experts are now available over a pre-scheduled call or
            virtual meet. This powerful interaction will instantly put you on
            the right trajectory for your wedding planning.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <button className="bg-[#a9804e] text-white px-8 py-3 rounded-lg shadow-md hover:bg-white hover:text-[#a9804e] hover:border-[#a9804e]">
              INTERACT WITH US
            </button>
            <button className="border border-[#a9804e] text-[#a9804e] px-8 py-3 rounded-lg shadow-md hover:bg-[#a9804e] hover:text-white">
              TALK TO US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NamrataExports;
