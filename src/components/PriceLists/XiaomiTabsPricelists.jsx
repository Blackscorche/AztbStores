import React, { useState } from 'react';

const XiaomiTabPriceList = () => {
  const [showAll, setShowAll] = useState(false);

  const xiaomiTabs = [
    { model: "PAD SE 11 inches (4+128)", price: "₦205,000" },
    { model: "PAD SE 11 inches (8+256)", price: "₦245,000" },
    { model: "PAD SE 8 inches (4+64)", price: "₦140,500" },
    { model: "PAD SE 8 inches (4+128)", price: "₦159,000" },
    { model: "PAD SE 8 inches (6/128)", price: "₦180,000" },
    { model: "PAD SE 4G 8 inches (4+64)", price: "₦158,000" },
    { model: "PAD SE 4G 8 inches (4+128)", price: "₦178,000" },
    { model: "PAD SE 4G 8 inches (6+128)", price: "₦198,000" },
    { model: "PAD Pro 12 inches (6+128)", price: "₦351,000" },
    { model: "PAD Pro 12 inches (8+256)", price: "₦410,000" },
    { model: "PAD Pro 5G (6/128GB)", price: "₦428,000" },
    { model: "PAD Pro 5G (8/256)", price: "₦493,000" },
  ];

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Xiaomi Tablet Price List</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Xiaomi Tablets</h2>
        <ul className="divide-y divide-gray-200">
          {(showAll ? xiaomiTabs : xiaomiTabs.slice(0, 3)).map((tab, index) => (
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

export default XiaomiTabPriceList;