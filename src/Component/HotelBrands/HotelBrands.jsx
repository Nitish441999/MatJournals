import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function HotelBrands() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const hotelLogos = [
    {
      id: 1,
      img: "https://matjournals.com/img/clients/client-3.png",
      alt: "Burj Al Arab",
    },
    {
      id: 2,
      img: "https://matjournals.com/img/clients/client-19.png",
      alt: "Atlantis The Palm",
    },
    {
      id: 3,
      img: "https://matjournals.com/img/clients/client-5.png",
      alt: "Palazzo Versace",
    },
    {
      id: 4,
      img: "https://matjournals.com/img/clients/client-6.png",
      alt: "Jumeirah Hotels",
    },
    {
      id: 5,
      img: "https://matjournals.com/img/clients/client-7.png",
      alt: "The Oberoi Hotels",
    },
    {
      id: 6,
      img: "https://matjournals.com/img/clients/client-8.png",
      alt: "ITC Hotels",
    },
    {
      id: 7,
      img: "https://matjournals.com/img/clients/client-9.png",
      alt: "Taj Hotels",
    },
    {
      id: 8,
      img: "https://matjournals.com/img/clients/client-10.png",
      alt: "JW Marriott",
    },
    {
      id: 9,
      img: "https://matjournals.com/img/clients/client-11.png",
      alt: "JW Marriott",
    },
    {
      id: 10,
      img: "https://matjournals.com/img/clients/client-12.png",
      alt: "JW Marriott",
    },
  ];

  return (
    <div className="py-10 ">
      <h2 className="text-4xl font-semibold text-center text-blue-600 mb-6 uppercase">
        Indexing
      </h2>
      <p className="text-xl font-thin text-gray-700 mb-10 text-center w-[90%] mx-auto md:w-[70%]">
        We provide higher scientific quality by providing a service of citations
        for all published articles at various indexing sites so as to increase
        reach of articles to audience.
      </p>

      <div className="relative w-[90%] mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 text-blue-600 hover:bg-blue-700 hover:text-white transition hidden md:flex"
        >
          <FaChevronLeft size={20} />
        </button>

        <Slider ref={sliderRef} {...settings}>
          {hotelLogos.map((hotel) => (
            <div key={hotel.id} className="p-4">
              <div className="bg-gray-50 shadow-md rounded-lg p-6 flex justify-center items-center">
                <img
                  src={hotel.img}
                  alt={hotel.alt}
                  className="w-40 h-auto transition-transform hover:scale-105"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* Right Arrow */}
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3  text-blue-600 hover:bg-blue-700 hover:text-white transition hidden md:flex"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default HotelBrands;
