import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Music2, // TikTok icon
  Ghost, // Snapchat icon
  Send, // Telegram icon
} from 'lucide-react';

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
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/pricelist" className="hover:underline">Pricelist</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/faqs" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <MapPin className="text-blue-500 w-5 h-5" />
              <span>Shop 44, No 5 Otigba Street, Computer Village, Ikeja, Lagos State</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-blue-500 w-5 h-5" />
              <a href="tel:+2348151162929" className="hover:underline">+2348151162929</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-blue-500 w-5 h-5" />
              <a href="mailto:aztbstores@yahoo.com" className="hover:underline">aztbstores@yahoo.com</a>
            </li>
            <li className="flex items-center space-x-3">
              <MessageCircle className="text-blue-500 w-5 h-5" />
              <a href="https://wa.me/+2348151162929" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp Us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="text-center mt-8">
        <h4 className="font-bold text-lg mb-4">Follow Us</h4>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com/aztbstores" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/aztbstores" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/aztbstores" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://tiktok.com/@aztbstores" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <Music2 className="w-6 h-6" />
          </a>
          <a href="https://snapchat.com/add/aztbstores" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            <Ghost className="w-6 h-6" />
          </a>
          <a href="https://t.me/aztbstores" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <Send className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} AZTB Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;