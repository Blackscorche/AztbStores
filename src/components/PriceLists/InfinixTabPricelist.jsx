import React, { useState } from 'react';

const InfinixTabPriceList = () => {
  const [showAll, setShowAll] = useState(false);

  const infinixTabs = [
    { model: "XPAD WiFi (4+256)", price: "₦260,000" },
    { model: "XPAD 4G (4+128)", price: "₦255,000" },
    { model: "XPAD 4G (8+256)", price: "₦285,000" },
  ];

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Infinix Tablet Price List</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Infinix Tablets</h2>
        <ul className="divide-y divide-gray-200">
          {(showAll ? infinixTabs : infinixTabs.slice(0, 3)).map((tab, index) => (
            <li
              key={index}
              className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300"
            >
              <div>
                <p className="text-gray-700 font-medium">{tab.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{tab.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex justify-center p-2">
          <button
            onClick={toggleShowAll}
            className="rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-all duration-300"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfinixTabPriceList;