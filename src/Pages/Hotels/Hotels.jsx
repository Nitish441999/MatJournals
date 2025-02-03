import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import allData from "../../Component/Data/Data"; // Import hotel data

const Hotels = () => {
  const { city } = useParams(); // Get city from URL params
  const navigate = useNavigate(); // For navigation
  const filteredHotels = allData[city?.toLowerCase()] || []; // Get hotels for the city

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto w-[90%]">
      {/* Hero Section */}
      <section className="py-5 text-center" data-aos="fade-up">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider uppercase text-[#a9804e] text-center">
          Handpicked Luxury Indian Wedding Hotels
        </h1>

        <h3
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase font-semibold tracking-wide text-[#a9804e] py-5 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Experience the World’s Best Hospitality in India’s Top 5-Star Wedding
          Hotels and Resorts.
        </h3>

        <p
          className="text-xl font-thin tracking-wider text-[#8a6a3c] mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          The majestic palaces of Rajasthan to the serene beaches of Goa, our
          hand-picked hotels are ideally suited to host your dream destination
          wedding of any scale in our exclusive hotel selection for India. See
          your majestic wedding through our selection of the top hotels in
          India.
        </p>
        <p
          className="text-xl font-thin tracking-wider text-[#8a6a3c]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Imagine exchanging vows at palaces untouched by time, recreating the
          magic of centuries old love, standing today as a testament to time and
          love. Step into India, where weddings are bedecked with expansive
          gardens, elaborate chandeliers, vintage cars and royalty served up
          with a dose of fun!
        </p>
        <button
          className="bg-[#a9804e] text-white px-10 py-3 text-lg rounded-md shadow-md hover:bg-white hover:text-[#a9804e] hover:border-[#a9804e] border transition-all duration-300 uppercase my-8"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          Check Availability
        </button>
      </section>

      {/* Hotels List */}
      <h2
        className="text-2xl font-bold text-center mb-6 capitalize"
        data-aos="fade-up"
      >
        Hotels in {city}
      </h2>

      {filteredHotels.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredHotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform transition duration-300"
              onClick={() => navigate(`/${city}/${hotel.id}`)}
              data-aos="fade-up"
              data-aos-delay={100 * index} // Staggered animation
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-3">{hotel.name}</h3>
                <button className="bg-[#a9804e] text-white px-10 w-full py-3 text-lg rounded-md shadow-md hover:bg-white hover:text-[#a9804e] hover:border-[#a9804e] border transition-all duration-300 uppercase">
                  {hotel.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600" data-aos="fade-up">
          No hotels found for {city}
        </p>
      )}
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
    </div>
  );
};

export default Hotels;
