import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function OurBlogs() {
  useEffect(() => {
    AOS.init();
  }, []);

  const blogData = [
    {
      img: "https://matjournals.com/img/Dr%20Amit%20Kumar.jpg",
      title: "Dr. Amit Kumar",
      subTitle: "Assistant Professor",
      desc: "The future of computer science is Artificial Intelligence (AI). AI has become an integral part of our lives, making daily tasks easier and turning science fiction into reality.",
    },
    {
      img: "https://matjournals.com/img/Binu%20Joe.jpg",
      title: "Binu Joe",
      subTitle: "Principal",
      desc: "Nursing, which means to nurture and care, is the mother of all sciences. The demand for qualified and competent nurses is at an all-time high, from family setups to institutional levels.",
    },
    {
      img: "https://matjournals.com/img/rupali.jpg",
      title: "Rupali M. Patil",
      subTitle: "Assistant Professor",
      desc: "Mechanical Engineering unites the human world with technology. From ancient innovations to modern advancements, it plays a crucial role in everyday life.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-10 overflow-hidden ">
      <section className="text-center w-[90%] mx-auto">
        <h3
          className="text-4xl font-semibold tracking-wider text-blue-600 uppercase py-7"
          data-aos="fade-up"
        >
          Editorial Blogs
        </h3>
        <p className="text-xl font-thin text-gray-600 mb-10" data-aos="fade-up">
          Stay updated with the latest blogs on various topics from experts.
        </p>
        <Slider {...settings} className=" overflow-hidden">
          {blogData.map((blog, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={index} className="flex justify-center gap-4">
                {/* Added gap here */}
                <div className="flex flex-col md:flex-row bg-white w-full shadow-md rounded-lg overflow-hidden">
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Text Content */}
                  <div
                    className={`w-full md:w-1/2 p-5 transition-all duration-300 ${
                      isExpanded ? "w-[60%]" : "w-[50%]"
                    }`}
                  >
                    <h1 className="text-xl font-semibold text-gray-800">
                      {blog.title}
                    </h1>
                    <p className="text-blue-600 font-medium">{blog.subTitle}</p>
                    <p className="text-gray-600 text-sm mt-2 text-justify">
                      {isExpanded
                        ? blog.desc
                        : blog.desc.length > 60
                        ? blog.desc.slice(0, 60) + "..."
                        : blog.desc}
                    </p>
                    {/* Button always appears at the bottom */}
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-blue-600 font-semibold mt-2 hover:underline"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>

                    {/* Social Icons */}
                    <div className="flex space-x-4 justify-center mt-4">
                      <a href="#" className="text-blue-600 text-xl">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-blue-400 text-xl">
                        <FaTwitter />
                      </a>
                      <a href="#" className="text-blue-700 text-xl">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </div>
  );
}

export default OurBlogs;
