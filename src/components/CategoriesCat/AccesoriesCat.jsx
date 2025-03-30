import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import earbudsbanner from '../../assets/earbudsbanner.jpg'; // Import earbuds image
import penbanner from '../../assets/penbanner.png'; // Import pen image
import keyboardbanner from '../../assets/keyboardbanner.png'; // Import keyboard image

const accessoriesCategories = [
  {
    name: 'Earbuds',
    image: earbudsbanner,
    description: 'Wireless and immersive sound with our variety of Earbuds.',
    route: '/earbuds',
  },
  {
    name: 'Keyboard',
    image: penbanner,
    description: 'Enhance your productivity with high-quality keyboards.',
    route: '/keyboard',
  },
  {
    name: 'Pencil',
    image: keyboardbanner,
    description: 'Unleash your creativity with the Apple Pencil.',
    route: '/pencil',
  },
];

const AccesoriesCat = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen mt-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">Accessories Categories</h1>
        <h2 className="text-lg text-gray-700 mb-4">Explore the best accessories for your devices!</h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
        {accessoriesCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg bg-white"
          >
            <div className="w-full h-48 bg-gray-100">
              <img
                src={category.image}
                alt={`Image of ${category.name}`}
                className="w-full h-full object-cover" // Ensures the image fills the container without extra space
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{category.description}</p>
              <Link
                to={category.route}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
              >
                View Price Listing
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AccesoriesCat;