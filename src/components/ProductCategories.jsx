import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom'; // For navigation links

// Updated categories with relevant routes and images
const categories = [
    {
        name: 'Smartphones',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        description: 'Discover the latest smartphones with advanced features.',
        route: '/smartphonescategory',
    },
    {
        name: 'Laptops',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        description: 'High-performance laptops for work, gaming, and creativity.',
        route: '/laptopcategory',
    },
    {
        name: 'Smartwatches',
        image: 'https://images.unsplash.com/photo-1531384443288-cd81ab6d6e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        description: 'Stay connected and track your fitness on the go.',
        route: '/smartwatchescategories',
    },
    {
        name: 'IMacs',
        image: 'https://images.unsplash.com/photo-1587202372775-51c3a0b2ce41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        description: 'Experience power and elegance with the latest iMacs.',
        route: '/imaccategory',
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
                            className="w-full h-40 object-cover"
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
