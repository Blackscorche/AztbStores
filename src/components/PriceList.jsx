import React from 'react';

const PriceList = () => {
  const data = {
    "UK Used MacBooks": [
      { name: "MacBook Pro 2018 13\" Touch Bar", specs: "Intel Core i7, 8GB RAM, 256GB SSD, 2.70GHz", price: "₦700,000" },
      { name: "MacBook Pro 2019 13\" Touch Bar", specs: "Intel Core i7, 16GB RAM, 512GB SSD, 2.80GHz", price: "₦820,000" },
      { name: "MacBook Pro 2020 13\" Touch Bar", specs: "Intel Core i5, 16GB RAM, 512GB SSD, 2.00GHz", price: "₦860,000" },
      { name: "MacBook Pro 2020 M1 Chip", specs: "8GB RAM, 256GB SSD, 8C CPU / 8C GPU, Space Grey", price: "₦990,000" },
      { name: "MacBook Air 2015", specs: "Core i5, 4GB RAM, 128GB SSD, 13inches", price: "₦300,000" },
    ],
    "Brand New MacBooks": [
      { name: "MacBook Pro 2024 14\" M4 Pro Chip", specs: "24GB RAM, 512GB SSD", price: "₦3,220,000" },
      { name: "MacBook Pro 2023 16\" M3 Max Chip", specs: "36GB RAM, 1TB SSD", price: "₦4,500,000" },
      { name: "MacBook Air 2023 15\" M3 Chip", specs: "8GB RAM, 256GB SSD", price: "₦1,900,000" },
      { name: "MacBook Air 2022 13\" M2 Chip", specs: "8GB RAM, 256GB SSD", price: "₦1,550,000" },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Our Price List</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {Object.keys(data).map((category) => (
          <div key={category} className="border-b border-gray-200">
            <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">{category}</h2>
            <ul className="divide-y divide-gray-100">
              {data[category].map((item, index) => (
                <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50">
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
    </div>
  );
};

export default PriceList;
