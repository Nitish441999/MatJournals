import React from "react";
import OurWeddings from "../OurWeddings/OurWeddings";
import DestinationWeddingPlanner from "../DestinationWeddingPlanner/DestinationWeddingPlanner";
import NamrataExports from "../NamrataExports/NamrataExports";
import OurBlogs from "../OurBlogs/OurBlogs";
import HotelBrands from "../HotelBrands/HotelBrands";

function Home() {
  return (
    <div>
      <OurWeddings />
      <DestinationWeddingPlanner />
      <HotelBrands />
      <NamrataExports />
      <OurBlogs />
    </div>
  );
}

export default Home;
