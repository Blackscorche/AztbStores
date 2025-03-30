import React from 'react';
import { Link } from 'react-router-dom';

const PriceList = () => {
  const data = {
    "Laptops": [
      { name: "MacBook Pro 2018 13\" Touch Bar", specs: "Intel Core i7, 8GB RAM, 256GB SSD, 2.70GHz", price: "₦700,000" },
      { name: "MacBook Pro 2019 13\" Touch Bar", specs: "Intel Core i7, 16GB RAM, 512GB SSD, 2.80GHz", price: "₦820,000" },
      { name: "MacBook Air 2023 15\" M3 Chip", specs: "8GB RAM, 256GB SSD", price: "₦1,900,000" },
      { name: "MacBook Air 2022 13\" M2 Chip", specs: "8GB RAM, 256GB SSD", price: "₦1,550,000" },
    ],
    "SmartPhones": [
      { name: "iPhone 14 Pro Max", specs: "128GB, A16 Bionic Chip", price: "₦1,200,000" },
      { name: "Samsung Galaxy S23 Ultra", specs: "256GB, Snapdragon 8 Gen 2", price: "₦1,500,000" },
      { name: "Google Pixel 7 Pro", specs: "128GB, Tensor G2", price: "₦900,000" },
      { name: "Xiaomi 13 Pro", specs: "256GB, Snapdragon 8 Gen 2", price: "₦850,000" },
    ],
    "Earbuds": [
      { name: "AirPods Pro 2", specs: "Active Noise Cancellation, Type-C", price: "₦330,000" },
      { name: "Galaxy Buds 2 Pro", specs: "Hi-Fi Sound, ANC", price: "₦180,000" },
      { name: "Google Pixel Buds Pro", specs: "ANC, Long Battery Life", price: "₦250,000" },
      { name: "Xiaomi Buds 3 Pro", specs: "ANC, Dual Device Connection", price: "₦255,000" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Our Price List</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {Object.keys(data).map((category) => (
          <div key={category} className="border-b border-gray-200">
            <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">{category}</h2>
            <ul className="divide-y divide-gray-100">
              {data[category].slice(0, 3).map((item, index) => (
                <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
                  <div>
                    <p className="text-gray-700 font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.specs}</p>
                  </div>
                  <p className="text-lg font-bold text-green-600">{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link to="/categories">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PriceList;