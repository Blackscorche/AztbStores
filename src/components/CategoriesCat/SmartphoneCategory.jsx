import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom'; // For navigation links

// Smartphone and Accessories Categories
const categories = [
  {
    name: 'Iphone',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f9992f0d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Explore the latest iPhones with advanced features and sleek designs.',
    route: '/iphonecategories',
  },
  {
    name: 'Samsung',
    image: 'https://images.unsplash.com/photo-1580910051070-7c9b7c6d9b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Discover Samsung smartphones with cutting-edge technology.',
    route: '/samsungcategories',
  },
  {
    name: 'Redmi',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Affordable and powerful Redmi smartphones for everyone.',
    route: '/redmi',
  },
  {
    name: 'Tecno',
    image: 'https://images.unsplash.com/photo-1598327102040-5d4d6c3b9b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Stylish and budget-friendly Tecno smartphones.',
    route: '/tecno',
  },
  {
    name: 'Infinix',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'High-performance Infinix smartphones at great prices.',
    route: '/infinix',
  },
  {
    name: 'Oppo',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Experience innovation with Oppo smartphones.',
    route: '/oppo',
  },
  {
    name: 'Google Pixel',
    image: 'https://images.unsplash.com/photo-1587202372775-51c3a0b2ce41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Capture stunning photos with Google Pixel phones.',
    route: '/googlepixel',
  },
  {
    name: 'AirPods',
    image: 'https://images.unsplash.com/photo-1593642632823-4b8f2c0e1a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Wireless and immersive sound with AirPods.',
    route: '/airpods',
  },
  {
    name: 'Keyboard',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f9992f0d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Enhance your productivity with high-quality keyboards.',
    route: '/keyboard',
  },
  {
    name: 'Pencil',
    image: 'https://images.unsplash.com/photo-1580910051070-7c9b7c6d9b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    description: 'Unleash your creativity with the Apple Pencil.',
    route: '/pencil',
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
            <img
              src={category.image}
              alt={`Image of ${category.name}`}
              className="w-full h-40 object-cover"
            />
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