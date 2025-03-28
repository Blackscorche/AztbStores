import React, { useState } from 'react';

const BrandNewIpads = () => {
  const [showAll, setShowAll] = useState(false);

  const brandNewIPads = [
    { model: "2024 iPad Pro M4 Chip 13 inches 256GB WiFi Only", price: "₦1,700,000" },
    { model: "2024 iPad Pro M4 Chip 13 inches 256GB WiFi LTE", price: "₦1,900,000" },
    { model: "2024 iPad Pro M4 Chip 13 inches 512GB WiFi Only", price: "₦2,040,000" },
    { model: "2024 iPad Pro M4 Chip 13 inches 512GB WiFi LTE", price: "₦2,150,000" },
    { model: "2024 iPad Pro M4 Chip 13 inches 1TB WiFi LTE", price: "₦2,580,000" },
    { model: "2024 iPad Pro M4 Chip 11 inches 256GB WiFi Only", price: "₦1,550,000" },
    { model: "2024 iPad Pro M4 Chip 11 inches 256GB WiFi & LTE", price: "₦1,800,000" },
    { model: "2024 iPad Pro M4 Chip 11 inches 512GB WiFi Only", price: "₦1,740,000" },
    { model: "2024 iPad Pro M4 Chip 11 inches 1TB WiFi LTE", price: "₦1,900,000" },
  ];

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Brand New iPads</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">2024 iPad Pro Models</h2>
        <ul className="divide-y divide-gray-200">
          {(showAll ? brandNewIPads : brandNewIPads.slice(0, 5)).map((ipad, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{ipad.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{ipad.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center p-2">
          <button
            onClick={toggleShowAll}
            className="rounded-xl bg-blue-600 text-white p-3 hover:bg-blue-700 transition-all duration-300"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandNewIpads;