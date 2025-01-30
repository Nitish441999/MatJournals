import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function DestinationWeddingPlanner() {
  const [selectedDestination, setSelectedDestination] = useState("Indian");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Destination data
  const destinations = {
    Indian: [
      {
        image:
          "https://www.varmalla.com/wp-content/uploads/2023/09/jai-mahal-palace-1-652827993b517.webp",
        titel: "Leela Palace",
        text: "Your wedding at Leela Palace Udaipur promises to be an enchanting blend of luxury and love, etching beautiful memories that will last a lifetime.",
      },
      {
        image:
          "https://www.varmalla.com/wp-content/uploads/2023/09/first-slide-banner-img.webp",
        titel: "Taj Lake Palace",
        text: "Your wedding at Taj Lake Palace promises to be an enchanting blend of luxury and love, etching beautiful memories.",
      },
      {
        image:
          "https://www.varmalla.com/wp-content/uploads/2023/09/forth-slide-banner-img.webp",
        titel: "Oberoi Udaivilas",
        text: "Your wedding at Oberoi Udaivilas promises to be an enchanting blend of luxury and love, etching beautiful memories.",
      },
      {
        image:
          "https://www.varmalla.com/wp-content/uploads/2023/09/raffles-udaipur-1-6513fde017884-scaled.webp",
        titel: "Raffles Udaipur",
        text: "Your wedding at Raffles Udaipur promises to be an enchanting blend of luxury and love, etching beautiful memories.",
      },
      {
        image:
          "https://www.varmalla.com/wp-content/uploads/2023/09/jai-mahal-palace-1-652827993b517.webp",
        titel: "Jai Mahal Palace",
        text: "Your wedding at Jai Mahal Palace promises to be an enchanting blend of luxury and love, etching beautiful memories.",
      },
    ],
    UAE: [
      {
        image:
          "https://www.varmalla.com/wp-content/uploads/2023/04/burj-al-pg-img.webp",
        titel: "Desert Mirage",
        text: "The Burj Al Arab Jumeirah’s status as an iconic landmark in Dubai and its world-class amenities make it an unparalleled destination wedding hotel for couples looking to celebrate their love in the most exceptional way.",
      },
      {
        image:
          "https://www.varmalla.com/wp-content/uploads/2023/04/raffels-palm-dubai-pg-img.webp",
        titel: "Modern Elegance",
        text: "Raffles Palm Dubai offers a regal space with a majestic outlook for couples looking to celebrate their destination wedding in style.",
      },
    ],
    Thailand: [
      {
        image:
          "https://www.varmalla.com/wp-content/uploads/2023/10/jw-marriott-phuket-resort-spa-1-6532d1f244f02.webp",
        titel: "Beach Paradise",
        text: "The perfect destination to celebrate your love in a truly remarkable way with a beachfront wedding with stunning views in Phuket.",
      },
      {
        image:
          "https://www.varmalla.com/wp-content/uploads/2023/10/angsana-laguna-6532d79a7d355.webp",
        titel: "Cultural Charm",
        text: "With picturesque views, beautiful white sands, and a wide selection of dining options, Angsana Laguna Phuket provides an idyllic beachfront venue for your wedding. ",
      },
    ],
    Dubai: [
      {
        image:
          "https://www.varmalla.com/wp-content/uploads/2023/10/titanic-mardan-palace-6532c7d413a42.webp",
        titel: "Luxury Venues",
        text: "Stunning architecture, luxurious accommodations, and extensive facilities make the Titanic Mardan Palace an exceptional choice for couples looking to host a lavish and unforgettable destination wedding in Antalya, Turkey. .",
      },
      {
        image:
          "https://www.varmalla.com/wp-content/uploads/2023/10/ng-phaselis-bay-6532c7c87301b.webp",
        titel: "Iconic Locations",
        text: "Stunning architecture, luxurious accommodations, and extensive facilities make the Titanic Mardan Palace an exceptional choice for couples looking to host a lavish and unforgettable destination wedding in Antalya, Turkey..",
      },
    ],
  };

  // Effect to cycle through images every 3 seconds
  useEffect(() => {
    AOS.init(); // Initialize AOS

    if (selectedDestination) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) =>
            (prevIndex + 1) % destinations[selectedDestination].length
        );
      }, 3000);

      return () => clearInterval(interval); // Cleanup interval on destination change or unmount
    }
  }, [selectedDestination, destinations]);

  return (
    <div>
      <section className="text-center w-[90%] mx-auto pb-10">
        <h3
          className="text-4xl font-semibold tracking-wider text-[#a9804e] uppercase py-7"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Destination Wedding Planner
        </h3>
        <p className="text-xl font-thin" data-aos="fade-up" data-aos-duration="1500">
          Indulge in the pinnacle of opulence and sophistication with an
          unforgettable luxury destination wedding venue. Our destination
          wedding planner will guide you through the process of selecting a
          stunning location and shortlisting the right wedding hotel with
          Namrata’s special insider pricing.
        </p>

        <div>
          <ul className="flex justify-center gap-10 uppercase text-xl cursor-pointer mt-8">
            {Object.keys(destinations).map((destination) => (
              <li
                key={destination}
                className={`hover:text-[#a9804e] transition-colors ${
                  selectedDestination === destination
                    ? "text-[#a9804e] font-semibold"
                    : ""
                }`}
                onClick={() => {
                  setSelectedDestination(destination);
                  setCurrentImageIndex(0);
                }}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {destination}
              </li>
            ))}
          </ul>
        </div>

        {selectedDestination && (
          <motion.div
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg h-[70vh]">
              <img
                src={destinations[selectedDestination][currentImageIndex].image}
                alt={selectedDestination}
                className="w-full h-full object-cover rounded-lg"
                data-aos="fade-up"
                data-aos-duration="3000"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[50%] bg-black bg-opacity-40 rounded-xl shadow-lg py-6 px-4 flex flex-col">
                <div className="text-left">
                  <h1
                    className="text-xl md:text-2xl uppercase font-bold tracking-wide text-white"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    {destinations[selectedDestination][currentImageIndex].titel}
                  </h1>
                  <p
                    className="text-md font-serif md:text-base text-white tracking-wider mt-2"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    {destinations[selectedDestination][currentImageIndex].text}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-5">
                  <button className="bg-[#a9804e] text-white px-6 py-3 tracking-wide md:px-10 rounded-md shadow-md hover:bg-[#8a6a3c] uppercase">
                    View Details
                  </button>
                  <button className="bg-white text-gray-700 uppercase px-6 tracking-wide py-3 md:px-10 rounded-md border-[4px] border-[#a9804e] shadow-md hover:bg-[#a9804e] hover:text-white">
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}

export default DestinationWeddingPlanner;
