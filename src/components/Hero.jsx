import React, { useState, useEffect } from "react";
import { Smartphone, Truck, Headphones } from "lucide-react";
import iphone from "../assets/iphone16.png";
import samsung from "../assets/samsung25.png";
import laptop from "../assets/Macbook.png";
import { motion } from "framer-motion";

const carouselImages = [iphone, samsung, laptop];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-gray-900 min-h-screen flex items-center justify-center font-poppins px-4 md:px-12 lg:px-20 mt-15 md:12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
          {/* Left Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="text-base md:text-lg uppercase tracking-wide text-gray-500">
              Big Gadget Deals
            </h4>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Welcome to <span className="text-blue-500">AZTBStores</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Get the latest phones, laptops, and accessories at unbeatable
              prices.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg cursor-pointer font-semibold transition duration-300">
                Explore Products
              </button>
            </div>
          </motion.div>

          {/* Right Image Section - Carousel */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center pt-10 md:pt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src={carouselImages[currentIndex]}
              alt={`Carousel ${currentIndex + 1}`}
              className={`w-[250px] md:w-[300px] lg:w-[350px] h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg drop-shadow-lg transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="p-12 bg-white">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
          What We Offer
        </h3>
        <p className="text-center text-gray-600 mb-8">
          Discover premium gadgets, seamless shopping, and top-notch customer
          service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center text-blue-500 mb-4">
              <Smartphone size={40} />
            </div>
            <h4 className="text-lg md:text-xl font-bold mb-2">
              Latest Gadgets
            </h4>
            <p className="text-gray-600">
              Stay ahead with the latest phones, tablets, and accessories.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center text-blue-500 mb-4">
              <Truck size={40} />
            </div>
            <h4 className="text-lg md:text-xl font-bold mb-2">Fast Shipping</h4>
            <p className="text-gray-600">
              Get your products delivered to your doorstep quickly and safely.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center text-blue-500 mb-4">
              <Headphones size={40} />
            </div>
            <h4 className="text-lg md:text-xl font-bold mb-2">24/7 Support</h4>
            <p className="text-gray-600">
              Our support team is always here to help, anytime you need.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
