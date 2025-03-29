import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom'; // For navigation links

// Samsung categories
const categories = [
  {
    name: 'Samsung Phones (Nigeria Warranty)',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Explore Samsung phones with Nigeria warranty for reliable local support.',
    route: '/samsungnigeriawarranty',
  },
  {
    name: 'Brand New Samsung (International Warranty)',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Discover brand-new Samsung phones with international warranty for global coverage.',
    route: '/samsunginternationalwarranty',
  },
  {
    name: 'UK Used Samsung Phones',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Affordable and reliable UK Used Samsung phones at great prices.',
    route: '/ukusedsamsung',
  },
];

const SamsungCategories = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen mt-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">Samsung Categories Showcase</h1>
        <h2 className="text-lg text-gray-700 mb-4">Find the best Samsung deals on AZTBStores!</h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg bg-white"
          >
            <img
              src={category.image}
              alt={`Image of ${category.name}`}
              className="w-full h-40 object-cover"
            />
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

export default SamsungCategories;