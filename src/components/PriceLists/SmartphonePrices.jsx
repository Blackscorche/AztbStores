import React, { useState } from 'react';

const laptopListings = [
  { name: "MacBook Pro 2018 13 inches Touch Bar Intel Core i7 8GB RAM 256GB SSD 2.70GHz", price: "₦700,000" },
  { name: "MacBook Pro 2018 13 inches Touch Bar Intel Core i7 16GB RAM 256GB SSD 2.70GHz", price: "₦740,000" },
  { name: "MacBook Pro 2018 13 inches Touch Bar Intel Core i7 16GB RAM 512GB SSD 2.70GHz", price: "₦780,000" },
  { name: "MacBook Pro 2019 13 inches Touch Bar Intel Core i7 16GB RAM 256GB SSD 1.70GHz", price: "₦790,000" },
  { name: "MacBook Pro 2019 13 inches Touch Bar Intel Core i7 16GB RAM 512GB SSD 2.80GHz", price: "₦820,000" },
  { name: "MacBook Pro 2020 13 inches Touch Bar Intel Core i5 16GB RAM 512GB SSD 2.00GHz", price: "₦860,000" },
  { name: "MacBook Pro 2020 13 inches Touch Bar Intel Core i5 16GB RAM 1TB SSD 2.00GHz", price: "₦900,000" },
  { name: "MacBook Pro 2020 13 inches Touch Bar Intel Core i7 16GB RAM 512GB SSD 2.30GHz", price: "₦940,000" },
  { name: "MacBook Pro 2020 13 inches Touch Bar Intel Core i7 16GB RAM 1TB SSD 2.30GHz", price: "₦990,000" },
  { name: "MacBook Pro 2020 M1 Chip 13 inches 8GB RAM 256GB SSD 8C CPU / 8C GPU", price: "₦990,000" },
  { name: "30PCS MacBook Pro 2020 M1 Chip 13 inches 8GB RAM 512GB SSD", price: "₦1,140,000" },
  { name: "MacBook Pro 2024 14\" inch M4 Pro Chip 24GB Ram 512GB SSD", price: "₦3,220,000" },
  { name: "Macbook Air 2022 13inch M2 Chip 8GB 256SSD", price: "₦1,550,000" },
  { name: "MacBook Air 2015 Corei5 128GB SSD 4GB RAM 11inches", price: "₦280,000" },
];

const INITIAL_ITEMS = 5; // Number of items to show initially

function SmartphonePrices() {
  const [visibleItems, setVisibleItems] = useState(INITIAL_ITEMS);

  const handleViewMore = () => {
    setVisibleItems((prev) => prev + INITIAL_ITEMS); // Load more items
  };

  return (
    <div className="p-8 mt-12 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">UK USED & BRAND NEW MACBOOK PRICE LIST</h2>

      <div className="space-y-4">
        {laptopListings.slice(0, visibleItems).map((laptop, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:bg-blue-50"
          >
            <h3 className="font-semibold text-lg text-gray-800">{laptop.name}</h3>
            <p className="text-blue-600 text-sm font-medium">{laptop.price}</p>
          </div>
        ))}
      </div>

      {visibleItems < laptopListings.length && ( // Show "View More" only if there are more items left
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewMore}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}

export default SmartphonePrices;
