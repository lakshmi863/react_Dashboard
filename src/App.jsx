import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Rewards from "./pages/Rewards";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Explore from "./pages/Explore";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16"> {/* pt-16 = offset for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route te path="/shop" element={<Shop />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
       
      </div>
    </Router>
  );
}
