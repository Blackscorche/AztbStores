import React from 'react';
import { motion } from 'framer-motion';
import laptop from '../assets/Macbook.png';
import phone from '../assets/iphone16.png';
import tablet from '../assets/ipad.jpg';

function Products() {
  const products = [
    { id: 1, title: 'MacBook Pro', price: '$1,200', image: laptop },
    { id: 2, title: 'iPhone 14 Pro', price: '$999', image: phone },
    { id: 3, title: 'iPad Air', price: '$600', image: tablet },
    { id: 4, title: 'MacBook Air', price: '$1,000', image: laptop },
    { id: 5, title: 'iPhone SE', price: '$400', image: phone },
    { id: 6, title: 'iPad Pro', price: '$1,100', image: tablet },
  ];

  return (
    <section className="min-h-screen p-8 flex flex-col items-center mt-8">
      <motion.h3
        className="text-blue-600 font-bold text-4xl mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tech Product Gallery
      </motion.h3>
      <motion.p
        className="text-gray-600 text-lg mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Discover our range of top-notch tech products.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <motion.a
            key={product.id}
            href="#"
            className="relative group bg-gradient-to-tr from-white to-gray-100 shadow-xl rounded-xl overflow-hidden hover:scale-105 transform transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover rounded-t-lg group-hover:opacity-90"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <motion.h4
                className="text-2xl font-bold text-gray-800 mb-2"
                whileHover={{ scale: 1.05 }}
              >
                {product.title}
              </motion.h4>
              <p className="text-lg text-green-500 font-semibold">{product.price}</p>
            </div>
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-transparent to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
              whileHover={{ opacity: 0.3 }}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Products;
