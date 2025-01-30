import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OurBlogs() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="py-10">
      <section className="text-center w-[90%] mx-auto">
        <h3
          className="text-4xl font-semibold tracking-wider text-[#a9804e] uppercase py-7"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          World of NAMRATA - Luxury Wedding Blogs
        </h3>
        <p
          className="text-xl font-thin text-gray-600 mb-10"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Stay on top of global luxury wedding trends with Namrata’s Wedding
          Planning Blogs. Curate your wishlist by following the most
          sought-after wedding trends. From idyllic locations, the best in hair
          and makeup, photography, stunning bridal and groom outfits, celebrity
          weddings, Namrata’s Wedding Blog is your bridge into the immersive
          world of luxury weddings.
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: "https://www.varmalla.com/wp-content/uploads/2024/02/Slide3.jpg",
              title: "Tips To Customise Your Destination Wedding Packages",
              desc: "Tying the knot beneath the veil of stars is the dream of every wedding...",
            },
            {
              img: "https://www.varmalla.com/wp-content/uploads/2024/02/Main-Image.webp",
              title:
                "Keep It Secret: Secure Best Destination Wedding Hotel Deals in Agra",
              desc: "The city that pays homage to one of the most significant mementoes of love...",
            },
            {
              img: "https://www.varmalla.com/wp-content/uploads/2023/04/weddign-in-agra-h-img.webp",
              title:
                "Exquisite Destination Wedding Hotels in Agra, The Taj City",
              desc: "If we talk about choosing a destination for your wedding, the most obvious answer...",
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-delay={index * 200}
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-60 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5 text-left">
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h1>
                <p className="text-gray-600 text-sm">{blog.desc}</p>
                <button className="mt-4 bg-[#a9804e] text-white px-6 py-2 rounded-md shadow-md hover:bg-white hover:text-[#a9804e] hover:border-[#a9804e] border transition-all duration-300 uppercase">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="mt-10">
          <button
            className="bg-[#a9804e] text-white px-10 py-3 text-lg rounded-md shadow-md hover:bg-white hover:text-[#a9804e] hover:border-[#a9804e] border transition-all duration-300 uppercase"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            View All Blogs
          </button>
        </div>
      </section>
    </div>
  );
}

export default OurBlogs;
