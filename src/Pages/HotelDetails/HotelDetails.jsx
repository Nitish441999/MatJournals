import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import allData from "../../Component/Data/Data";
import { FaBed, FaUsers, FaCogs, FaBuilding, FaGlobe } from "react-icons/fa";
import NamrataExports from "../../Component/NamrataExports/NamrataExports";
import FAQ from "../../Component/Faq/Faqs";

function HotelDetails() {
  const { city, hotelId } = useParams();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!city || !hotelId) {
    return (
      <p className="text-center text-gray-600">City or Hotel ID not found!</p>
    );
  }

  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);
  const hotels = allData[city.toLowerCase()] || [];
  const selectedHotel = hotels.find((hotel) => hotel.id === parseInt(hotelId));

  if (!selectedHotel) {
    return <p className="text-center text-gray-600">Hotel not found!</p>;
  }

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mx-auto w-[95%] sm:w-[90%] lg:w-[80%]" data-aos="fade-up">
        <h2 className="text-xl font-bold my-5 uppercase tracking-wider text-center">
          {formattedCity}
        </h2>

        <div className="p-4 rounded-lg mb-6 text-center">
          <h3
            className="text-3xl sm:text-5xl font-bold tracking-wider text-[#a9804e] uppercase text-center mb-4"
            data-aos="zoom-in"
          >
            {selectedHotel.name}
          </h3>

          {selectedHotel.details && (
            <div className="mt-4" data-aos="fade-in">
              <p className="text-[#8a6a3c] text-xl sm:text-xl tracking-wider font-thin mb-5">
                {selectedHotel.details.description1}
              </p>
              <p className="text-[#8a6a3c] text-xl sm:text-xl tracking-wider font-thin mb-10">
                {selectedHotel.details.description2}
              </p>

              <div className="gap-4 mt-2" data-aos="slide-up">
                <img
                  src={selectedHotel.details[`image${currentImage + 1}`]}
                  alt={`Image ${currentImage + 1}`}
                  className="w-full h-[50vh] md:h-[60vh] object-cover rounded transition-opacity duration-500 ease-in-out opacity-100"
                />
              </div>

              <h3
                className="text-2xl sm:text-4xl font-bold tracking-wider text-[#a9804e] uppercase text-center my-10"
                data-aos="flip-left"
              >
                {selectedHotel.name}
              </h3>

              <div className="flex flex-wrap justify-center gap-5">
                {[
                  {
                    icon: FaBed,
                    label: "Total Number Of Rooms",
                    value: selectedHotel.details.totalRooms,
                  },
                  {
                    icon: FaUsers,
                    label: "Total Guest Capacity",
                    value: selectedHotel.details.totalGuestCapacity,
                  },
                  {
                    icon: FaCogs,
                    label: "Max. Reception Capacity",
                    value: selectedHotel.details.maxReceptionCapacity,
                  },
                  {
                    icon: FaBuilding,
                    label: "Indoor Venue",
                    value: selectedHotel.details.indoorVenue,
                  },
                  {
                    icon: FaGlobe,
                    label: "Outdoor Venue",
                    value: selectedHotel.details.outdoorVenue,
                  },
                ].map((item, index) => (
                  <p
                    key={index}
                    className="flex items-center p-5 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[18%] flex-col text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  >
                    <item.icon className="text-6xl sm:text-[8vh] text-[#a9804e] mb-2" />
                    <strong className="text-md uppercase tracking-wide font-serif">
                      {item.label}:
                    </strong>
                    <span>{item.value}</span>
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <NamrataExports />
      <FAQ />
    </>
  );
}

export default HotelDetails;
