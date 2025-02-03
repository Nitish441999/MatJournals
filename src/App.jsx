import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";

import Loading from "./Component/Loading/Loading";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Tracks the current route

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [location.pathname]); // Trigger effect when route changes

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/:city" element={<Hotels />} />
            <Route path="/:city/:hotelId" element={<HotelDetails />} /> */}
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
