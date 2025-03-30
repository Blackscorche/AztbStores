import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom'; // For navigation links
import smartphones from '../assets/smartphones.png'; // Import smartphones image
import LaptopBanner from '../assets/LaptopBanner.png';
import smartwatchesbanner from '../assets/newsmartwatches.png'; // Import smartwatches image
import TabBanner from '../assets/appletab.png'; // Import tablets image
import ImacBanner from '../assets/newimac.png'; // Import iMac image
import AccesoriesBanner from '../assets/AccesoriesBanner.jpg'; // Import accessories image
// Updated categories with relevant routes and images
const categories = [
    {
        name: 'Smartphones',
        image: smartphones, // Use the smartphones variable directly
        description: 'Discover the latest smartphones with advanced features.',
        route: '/smartphonescategories',
    },
    {
        name: 'Laptops',
        image: LaptopBanner,
        description: 'High-performance laptops for work, gaming, and creativity.',
        route: '/laptopcategory',
    },
    {
        name: 'Smartwatches',
        image: smartwatchesbanner,
        description: 'Stay connected and track your fitness on the go.',
        route: '/smartwatchescategories',
    },
    {
        name: 'IMacs',
        image: ImacBanner,
        description: 'Experience power and elegance with the latest iMacs.',
        route: '/imaccategory',
    },
    {
        name: 'Tablets',
        image: TabBanner,
        description: 'Discover versatile and powerful tablets for work, creativity, and entertainment.',
        route: '/tablets',
    },
    {
        name: 'Accessories',
        image: AccesoriesBanner,
        description: 'Explore a wide range of accessories like headphones, keyboards, and pencils.',
        route: '/accessories',
    },
];

const ProductCategories = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen mt-20">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-blue-600 mb-2">Showcase of Electronic Categories</h1>
                <h2 className="text-lg text-gray-700 mb-4">Explore the best gadgets on AZTBStores!</h2>
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
                            className="w-full h-50 object-contain my-3" // Changed from object-cover to object-contain
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
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

export default ProductCategories;