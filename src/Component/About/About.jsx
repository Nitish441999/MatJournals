import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animation duration
  }, []);

  return (
    <section className="w-[90%] mx-auto py-10 overflow-hidden">
      {/* Heading */}
      <h1
        className="text-3xl md:text-4xl uppercase tracking-wider text-blue-600 font-bold text-center mb-8"
        data-aos="fade-up"
      >
        About Us
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section with Hover Rotation */}
        <div className="w-full md:w-1/2 group" data-aos="fade-right">
          <img
            src="https://matjournals.com/img/about-img.jpg"
            alt="About MAT Journal"
            className="w-full h-auto  shadow-lg transition-transform duration-700 ease-in-out rounded-full group-hover:rotate-[360deg]"
          />
        </div>

        {/* Content Section */}
        <div
          className="w-full md:w-1/2 text-lg md:text-xl text-gray-700 leading-relaxed space-y-4"
          data-aos="fade-left"
        >
          <p>
            <strong>MAT Journal</strong> is a leading platform providing
            high-quality scientific content for academia, research institutions,
            and corporate R&D departments. We offer innovative information,
            products, and services to enhance knowledge sharing.
          </p>
          <p>
            Established in <strong>2015</strong>, MAT Journals Pvt. Ltd. has
            been dedicated to supporting the scientific community.
          </p>
          <p>
            Our core mission is to create and disseminate valuable knowledge for
            stakeholders across various industries.
          </p>
          <p>
            MAT Journals publishes over{" "}
            <strong>90+ peer-reviewed journals</strong> across multiple
            disciplines, including{" "}
            <span className="text-blue-500 font-medium">
              Engineering, Pharmacy, and Nursing
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
