import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import samsungtab from '../../assets/samsungtab.png'; // Import Samsung tablet image
import xiaomitab from '../../assets/redmitab.png'; // Import Xiaomi tablet image
import appletab from '../../assets/appletab.png'; // Import Apple tablet image
import infinixtab from '../../assets/InfinixTabBanner.png'; // Import Infinix tablet image
const tabletCategories = [
  {
    name: 'Samsung Tablets',
    image: samsungtab,
    description: 'Explore high-performance Samsung tablets for work and entertainment.',
    route: '/samsungtabs',
  },
  {
    name: 'Xiaomi Tablets',
    image: xiaomitab,
    description: 'Affordable and powerful Xiaomi tablets for everyone.',
    route: '/xiaomitabs',
  },
  {
    name: 'Apple Tablets',
    image: appletab,
    description: 'Discover the latest Apple iPads with advanced features and sleek designs.',
    route: '/appletablets',
  },

  {
    name: 'Infinix Tablets',
    image: infinixtab,
    description: 'Discover the latest Infinix Tablets with advanced features and sleek designs.',
    route: '/infinixtablets',
  },
];

const TabletsCategories = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen mt-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">Tablet Categories</h1>
        <h2 className="text-lg text-gray-700 mb-4">Find the best tablets for your needs!</h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
        {tabletCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg bg-white"
          >
            <div className="w-full h-48 flex items-center justify-center bg-gray-100">
              <img
                src={category.image}
                alt={`Image of ${category.name}`}
                className="max-w-full max-h-full object-contain" // Ensures the image fits within the container
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

export default TabletsCategories;