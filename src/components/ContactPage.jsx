// src/pages/ContactPage.jsx

import React from "react";
import { Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-6">
          We're here to help! Reach us through any of the options below.
        </p>

        <ul className="space-y-4">
          <li>
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-3 p-3 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
            >
              <Phone className="text-blue-500" />
              <span>+123 456 7890</span>
            </a>
          </li>

          <li>
            <a
              href="mailto:contact@aztbstores.com"
              className="flex items-center space-x-3 p-3 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
            >
              <Mail className="text-blue-500" />
              <span>contact@aztbstores.com</span>
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
            >
              <MessageCircle className="text-blue-500" />
              <span>WhatsApp Us</span>
            </a>
          </li>

          <li>
            <a
              href="https://instagram.com/aztbstores"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
            >
              <Instagram className="text-blue-500" />
              <span>@aztbstores</span>
            </a>
          </li>

          <li>
            <a
              href="https://facebook.com/aztbstores"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
            >
              <Facebook className="text-blue-500" />
              <span>AztbStores</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
