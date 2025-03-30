import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom'; // For navigation links
import iphone16 from '../../assets/iphone16.png'; // Import iPhone image
import samsung25 from '../../assets/samsung25.png'; // Import Samsung image
import redmi from '../../assets/redmibanner.png'; // Import Redmi image
import tecnobanner from '../../assets/tecnobanner.png'; // Import Tecno image
import infinixbanner from '../../assets/infinixbanner.png'; // Import Infinix image
import oppobanner from '../../assets/oppobanner.png'; // Import Oppo image
import googlepixelbanner from '../../assets/pixelbanner.png'; // Import Google Pixel image

const categories = [
  {
    name: 'Iphone',
    image: iphone16,
    description: 'Explore the latest iPhones with advanced features and sleek designs.',
    route: '/iphonecategories',
  },
  {
    name: 'Samsung',
    image: samsung25,
    description: 'Discover Samsung smartphones with cutting-edge technology.',
    route: '/samsungcategories',
  },
  {
    name: 'Redmi',
    image: redmi,
    description: 'Affordable and powerful Redmi smartphones for everyone.',
    route: '/redmi',
  },
  {
    name: 'Tecno',
    image: tecnobanner,
    description: 'Stylish and budget-friendly Tecno smartphones.',
    route: '/tecno',
  },
  {
    name: 'Infinix',
    image: infinixbanner,
    description: 'High-performance Infinix smartphones at great prices.',
    route: '/infinix',
  },
  {
    name: 'Oppo',
    image: oppobanner,
    description: 'Experience innovation with Oppo smartphones.',
    route: '/oppo',
  },
  {
    name: 'Google Pixel',
    image: googlepixelbanner,
    description: 'Capture stunning photos with Google Pixel phones.',
    route: '/googlepixel',
  },
];

function SmartphoneCategory() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen mt-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-2">Smartphone & Accessories Categories</h1>
        <h2 className="text-lg text-gray-700 mb-4">Explore the best smartphones and accessories on AZTBStores!</h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-md bg-white"
          >
            <div className="w-full h-48 flex items-center justify-center bg-gray-100">
              <img
                src={category.image}
                alt={`Image of ${category.name}`}
                className="max-w-full max-h-full object-contain" // Ensures the image fits within the container
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{category.description}</p>
              <Link
                to={category.route}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SmartphoneCategory;