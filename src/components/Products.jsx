import React from 'react';
import { motion } from 'framer-motion';
import laptop from '../assets/Macbook.png';
import phone from '../assets/iphone14pro.jpg';
import ipadpro from '../assets/ipadpro.jpg';
import iphonese from '../assets/iphonese.jpg';
import tablet from '../assets/ipad.jpg';
import macbookpro from '../assets/macbookspro.jpg'; // Import MacBook Pro image
import macbookair from '../assets/macbookair.jpg'; // Import MacBook Air image

function Products() {
  const products = [
    { id: 1, title: 'MacBook Pro', image: macbookpro, link: '/laptopcategory' },
    { id: 2, title: 'iPhone 14 Pro', image: phone, link: '/iphonecategories' },
    { id: 3, title: 'iPad Air', image: tablet, link: '/appletablets' },
    { id: 4, title: 'MacBook Air', image: macbookair, link: '/laptopcategory' },
    { id: 5, title: 'iPhone SE', image: iphonese, link: '/iphonecategories' },
    { id: 6, title: 'iPad Pro', image: ipadpro, link: '/appletablets' },
  ];

  return (
    <section className="min-h-screen p-8 flex flex-col items-center mt-8">
      <motion.h3
        className="text-blue-600 font-bold text-4xl mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      Product Gallery
      </motion.h3>
      <motion.p
        className="text-gray-600 text-lg mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Discover our range of top-notch tech products.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <motion.a
            key={product.id}
            href={product.link} // Use the link property here
            className="relative group bg-gradient-to-tr from-white to-gray-100 shadow-xl rounded-xl overflow-hidden hover:scale-105 transform transition-transform duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover group-hover:opacity-90"
              loading="lazy" // Lazy loading for better performance
            />
            <div className="p-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                {product.title}
              </h4>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 via-transparent to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-200" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Products;