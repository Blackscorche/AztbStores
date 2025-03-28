import React, { useState } from 'react';

const BrandNewSmartwatches = () => {
  const [showAll, setShowAll] = useState(false);

  const brandNewSmartwatches = [
    { model: "Apple Watch Ultra 2024 Black Titanium", price: "₦1,260,000" },
    { model: "Apple Watch Ultra 2023 2nd Gen", price: "₦1,180,000" },
    { model: "Apple Watch Ultra 1st Gen 49mm", price: "₦920,000" },
    { model: "Series 10 46mm GPS + Cellular", price: "₦800,000" },
    { model: "Series 10 46mm GPS Only", price: "₦720,000" },
    { model: "Series 10 42mm GPS + Cellular", price: "₦740,000" },
    { model: "Series 10 42mm GPS Only", price: "₦660,000" },
    { model: "Series 9 45mm GPS + Cellular", price: "₦680,000" },
    { model: "Series 9 45mm GPS Only", price: "₦630,000" },
    { model: "Series 9 41mm GPS + Cellular", price: "₦570,000" },
    { model: "Series 9 41mm GPS Only", price: "₦520,000" },
  ];

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Brand New Smartwatches</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Apple Watch Models</h2>
        <ul className="divide-y divide-gray-200">
          {(showAll ? brandNewSmartwatches : brandNewSmartwatches.slice(0, 5)).map((watch, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{watch.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{watch.price}</p>
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

export default BrandNewSmartwatches;