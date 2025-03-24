import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import laptop from '../assets/Macbook.png';

function Products() {
  const products = [
    { id: 1, title: 'Product 1', price: '$20', image: laptop },
    { id: 2, title: 'Product 2', price: '$30', image: laptop },
    { id: 3, title: 'Product 3', price: '$40', image: laptop },
  ];

  return (
    <section id="products" className="flex flex-col items-center min-h-screen p-8 bg-gray-100 mt-10">
      <h3 className="text-blue-500 font-bold text-3xl mb-6">View Our Products</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-[500px]"
            initial={{ opacity: 0, y: 100 }} // Start from below with opacity 0
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            viewport={{ once: false, margin: '-100px' }} // Trigger reveal before fully in view, and animate on every scroll
            transition={{ duration: 0.6, delay: index * 0.2 }} // Add stagger effect
          >
            <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded-md mb-4" />
            <h4 className="text-2xl font-bold text-gray-800">{product.title}</h4>
            <p className="text-lg text-green-500 font-semibold mb-4">{product.price}</p>
            <button className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              View Details
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Products;
