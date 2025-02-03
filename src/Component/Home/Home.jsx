import React from "react";

import NamrataExports from "../NamrataExports/NamrataExports";
import OurBlogs from "../OurBlogs/OurBlogs";
import HotelBrands from "../HotelBrands/HotelBrands";
import Faqs from "../Faq/Faqs";
import Journals from "../Journals/Journals";
import About from "../About/About";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <div>
      <Journals />
      <About />
      <HotelBrands />

      <OurBlogs />
      <Contact />
      {/* <Faqs /> */}
    </div>
  );
}

export default Home;
