import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OurWeddings() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [currentImage3, setCurrentImage3] = useState(0);

  const images1 = [
    "https://www.varmalla.com/wp-content/uploads/2023/05/oberoi-dubaiimg.jpg",
    "https://www.varmalla.com/wp-content/uploads/2023/05/Taj-Dubai-img.jpg",
    "https://www.varmalla.com/wp-content/uploads/2023/05/oberoi-dubaiimg.jpg",
    "https://www.varmalla.com/wp-content/uploads/2023/05/Taj-Dubai-img.jpg",
  ];
  const images2 = [
    "https://www.varmalla.com/wp-content/uploads/2023/05/The-Ritz-Carlton-Dubai-img2-img.jpg",
    "https://www.varmalla.com/wp-content/uploads/2023/05/Palazzo-Versace-img.jpg",
    "https://www.varmalla.com/wp-content/uploads/2023/05/The-Ritz-Carlton-Dubai-img2-img.jpg",
    "https://www.varmalla.com/wp-content/uploads/2023/05/Palazzo-Versace-img.jpg",
  ];
  const images3 = [
    "https://www.varmalla.com/wp-content/uploads/2023/05/The-Ritz-Carlton-Dubai-img.jpg",
    "https://www.varmalla.com/wp-content/uploads/2023/05/Palazzo-Versace-img-2.jpg",
    "https://www.varmalla.com/wp-content/uploads/2023/05/The-Ritz-Carlton-Dubai-img.jpg",
    "https://www.varmalla.com/wp-content/uploads/2023/05/Palazzo-Versace-img-2.jpg",
  ];

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImage1((prev) => (prev + 1) % images1.length);
    }, 3000);
    const interval2 = setInterval(() => {
      setCurrentImage2((prev) => (prev + 1) % images2.length);
    }, 4000);
    const interval3 = setInterval(() => {
      setCurrentImage3((prev) => (prev + 1) % images3.length);
    }, 5000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div>
      <div className="text-center w-[90%] mx-auto">
        <h3
          className="text-4xl font-semibold tracking-wider text-[#a9804e] uppercase py-7"
          data-aos="fade-up"
        >
          Our Weddings
        </h3>
        <p className="text-xl font-thin" data-aos="fade-up" data-aos-delay="200">
          Delve into the impeccable planning and flawless execution of some of
          the most elegant and unforgettable weddings we have had the honor of
          creating. Our curated collection showcases luxury and sophistication,
          capturing the essence of each unique couple’s vision and style.
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-6 w-full h-auto mt-5">
          <div
            className="w-full md:w-[48%] h-[40vh] md:h-[100vh] overflow-hidden rounded-lg relative"
            data-aos="fade-right"
          >
            {images1.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-1000  ${
                  currentImage1 === index ? "opacity-100" : "opacity-0"
                }`}
                alt={`Wedding ${index + 1}`}
              />
            ))}
          </div>

          <div className="w-full md:w-[48%] flex flex-col gap-6">
            <div
              className="w-full h-[40vh] md:h-[48%] overflow-hidden rounded-lg relative"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              {images2.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-1000 ${
                    currentImage2 === index ? "opacity-100" : "opacity-0"
                  }`}
                  alt={`Wedding ${index + 1}`}
                />
              ))}
            </div>
            <div
              className="w-full h-[40vh] md:h-[48%] overflow-hidden rounded-lg relative"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              {images3.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-1000 ${
                    currentImage3 === index ? "opacity-100" : "opacity-0"
                  }`}
                  alt={`Wedding ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8" data-aos="zoom-in" data-aos-delay="800">
          <button
            className="bg-[#a9804e] text-white px-14 py-3 rounded-lg text-lg font-semibold uppercase hover:bg-[#8a6c3c] transition-colors duration-300 tracking-wide"
            onClick={() => alert("Redirect to View All Weddings")}
          >
            View All our Weddings
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurWeddings;