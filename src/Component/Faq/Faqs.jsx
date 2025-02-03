import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question:
      "How can I choose my destination wedding location or a hotel from here?",
    answer:
      "Our dedicated team of destination experts will guide you through a curated collection of exclusive venues, ensuring a seamless process tailored to your unique vision. From exotic beachfront retreats to majestic countryside estates, each location represents the epitome of luxury and sophistication.",
  },
  {
    question:
      "Can I get a personal wedding assistant for managing my wedding ceremonies?",
    answer:
      "Absolutely! At Varmalla, we take pride in providing a personalized and tailored experience for each of our esteemed clients. When you choose us as your luxury wedding management company, you will be assigned a dedicated personal wedding assistant who will be your trusted partner throughout the entire journey.",
  },
  {
    question:
      "How can Varmalla help me to choose a luxury hotel for my wedding?",
    answer:
      "With our extensive network of prestigious hotel partnerships, we have privileged access to exclusive properties around the world. We meticulously assess each hotel based on their exceptional service, stunning aesthetics, and ability to cater to your specific requirements.",
  },
  {
    question: "Can you do my wedding decorations according to my requirements?",
    answer:
      "From the grandeur of luxurious floral arrangements to the intricate details of table settings, we meticulously curate every element of your wedding decorations with unrivaled artistry and precision.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000,  });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] mx-auto flex items-center justify-center p-6 max-md:p-4 max-sm:p-2">
      <div
        className="w-full bg-white p-6 rounded-lg shadow-md"
        data-aos="fade-up"
      >
        <h2
          className="text-3xl max-sm:text-2xl text-center font-semibold text-[#8a6a3c] uppercase tracking-wider mb-4"
          data-aos="fade-down"
        >
          Let Us Answer Your Questions
        </h2>
        <p
          className="text-lg max-sm:text-base font-thin tracking-wider text-[#8a6a3c] mb-6 text-center"
          data-aos="fade-up"
        >
          Have questions about our services or what we can do? We’re here to
          answer them and make your dreams come true.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
              data-aos="fade-up"
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg max-sm:text-base font-medium text-[#8a6a3c] tracking-wider focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mt-2 text-md max-sm:text-sm text-gray-600 overflow-hidden"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
