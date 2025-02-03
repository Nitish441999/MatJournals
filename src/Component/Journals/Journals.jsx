import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS CSS

function Journals() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      easing: "ease-in-out", // Animation easing
      //   once: true, // Run animation only once when the element comes into view
    });
  }, []);

  // Example data for each journal item
  const items = [
    {
      bg: "https://img.freepik.com/free-photo/stethoscope-hugging-earth-blue-background_23-2148115639.jpg?t=st=1738398914~exp=1738402514~hmac=b61ede0029c01876ba8486ccc3752db85d2365eed87b40ed6e0bdd77d358af38&w=996",
      heading: "Engineering",
      text: "We believe in empowering excellence, for which we provide 50+ peer- reviewed, indexed Journals in various categories of Engineering.",
    },
    {
      bg: "https://img.freepik.com/free-photo/stethoscope-hugging-earth-blue-background_23-2148115639.jpg?t=st=1738398914~exp=1738402514~hmac=b61ede0029c01876ba8486ccc3752db85d2365eed87b40ed6e0bdd77d358af38&w=996",
      heading: "Nursing",
      text: "To keep our audience up to date regarding recent advances in health sciences we avail 12 National and 6 International peer- reviewed, indexed Journals.",
    },
    {
      bg: "https://img.freepik.com/free-photo/stethoscope-hugging-earth-blue-background_23-2148115639.jpg?t=st=1738398914~exp=1738402514~hmac=b61ede0029c01876ba8486ccc3752db85d2365eed87b40ed6e0bdd77d358af38&w=996",
      heading: "Pharmacy",
      text: "We provide platform by sharing quality content in pharmacy domain through 12 peer- reviewed, indexed Journals.",
    },
    {
      bg: "https://img.freepik.com/free-photo/stethoscope-hugging-earth-blue-background_23-2148115639.jpg?t=st=1738398914~exp=1738402514~hmac=b61ede0029c01876ba8486ccc3752db85d2365eed87b40ed6e0bdd77d358af38&w=996",
      heading: "Management",
      text: "We committed to publish online and print peer reviewed journals. We accept case study / Research / Review article in all field of Management.",
    },
  ];

  return (
    <div className="w-[90%] mx-auto py-10">
      {/* Top Heading */}
      <h1
        className="text-3xl md:text-5xl font-semibold text-blue-600 mb-10 uppercase tracking-wider text-center"
        data-aos="fade-up"
      >
        Our Journals
      </h1>
      <p className="text-gray-600 mb-6 text-xl font-thin tracking-wider text-center">
        MAT Journals Pvt. Ltd. publishes 90+ Peer reviewed, indexed Journals in
        various domains of Engineering, Pharmacy, Nursing and Management. We are
        bound to provide a quality content solution to students, Researchers,
        Academicians, Faculties, Scientists and stakeholders.
      </p>

      {/* Journals List (All in one horizontal row) */}
      <div className="flex justify-center gap-7 flex-wrap">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group flex w-full sm:w-1/2 md:w-80 h-64 rounded-lg overflow-hidden transform transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`} // Stagger the animations
          >
            {/* Left Side: Image */}
            <div
              className="w-2/5 bg-cover bg-center transition-all duration-300 group-hover:w-0 group-hover:opacity-0"
              style={{ backgroundImage: `url(${item.bg})` }}
            ></div>

            {/* Right Side: Text */}
            <div className="w-3/5 bg-black bg-opacity-30 flex flex-col items-center justify-center p-4 group-hover:w-full transition-all duration-300">
              <h2 className="text-blue-500 uppercase text-xl tracking-wider font-bold">
                {item.heading}
              </h2>
              <p className="text-white mt-2 text-sm hover:text-lg tracking-wider font-thin text-justify hover:text-center">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journals;
