import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-20 rounded-t-2xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="font-bold text-lg mb-4">AZTB Store</h4>
          <p>Your one-stop shop for top-quality products that cater to your needs.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul>
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <p>Stay connected with us on social media:</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com/aztbstore" className="hover:text-blue-500">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/aztbstore" className="hover:text-blue-400">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/aztbstore" className="hover:text-pink-500">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} AZTB Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
