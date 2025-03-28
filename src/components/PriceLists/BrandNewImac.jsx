import React, { useState } from 'react';

const BrandNewImac = () => {
  const [showAllIMacs, setShowAllIMacs] = useState(false);

  const iMacPriceList = [
    {
      model: "Brand New 2024 24-inch 4.5K M3 iMac",
      specs: "(8 cores CPU / 10 cores GPU), 8GB RAM, 512GB SSD, 4 Type-C ports, 2 Thunderbolt ports, AppleCare+ warranty with Accidental Damage Protection till June 2027, Silver",
      price: "₦2,750,000",
    },
    {
      model: "Brand New Sealed 2024/2025 24-inch 4.5K M4 iMac",
      specs: "(8 cores CPU / 8 cores GPU), 16GB RAM, 256GB SSD, 2 Thunderbolt Type-C Ports",
      price: "₦3,450,000",
    },
    {
      model: "Brand New Sealed 2020/2021 iMac 27-inch 5K Retina Display",
      specs: "3.8GHz Core i7 Octa Core (16 processor threads), 16GB DDR4 RAM (32GB upgrade available), 1TB SSD, 16GB Dedicated Radeon Pro 5700XT Graphics, Magic Mouse 2 and Magic Keyboard 2",
      price: "₦4,300,000",
    },
    {
      model: "Brand New Sealed 2020/2021 iMac 27-inch 5K Retina Display",
      specs: "3.8GHz Core i7 Octa Core (16 processor threads), 16GB DDR4 RAM (64GB upgrade available), 1TB SSD, 16GB Dedicated Radeon Pro 5700XT Graphics, Magic Mouse 2 and Magic Keyboard 2",
      price: "₦4,500,000",
    },
  ];

  const toggleIMacs = () => setShowAllIMacs(!showAllIMacs);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Apple iMac Price List</h1>
      <p className="text-center text-sm text-gray-600 mb-4">Prices are subject to change</p>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {(showAllIMacs ? iMacPriceList : iMacPriceList.slice(0, 2)).map((imac, index) => (
            <li key={index} className="p-4 hover:bg-gray-50 transition-all duration-300">
              <p className="text-gray-800 font-semibold">{imac.model}</p>
              <p className="text-gray-600 text-sm mt-1">{imac.specs}</p>
              <p className="text-lg font-bold text-green-600 mt-2">{imac.price}</p>
            </li>
          ))}
        </ul>
        <div className="w-full flex flex-col items-center p-2">
          <button
            onClick={toggleIMacs}
            className="rounded-xl bg-blue-600 text-white p-3 hover:bg-blue-700 transition-all duration-300"
          >
            {showAllIMacs ? "View Less" : "View More"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default BrandNewImac;