import React, { useState } from 'react';

const RedmiPriceList = () => {
  const [itemsToShow, setItemsToShow] = useState(10); // Start by showing 10 items

  const redmiPhones = [
    { model: "Redmi 13 6/128GB", price: "₦167,000" },
    { model: "Redmi 13 8/128GB", price: "₦187,000" },
    { model: "Redmi A3x 3/64GB", price: "₦105,000" },
    { model: "Redmi A3x 4/128GB", price: "₦119,500" },
    { model: "Redmi A3 Pro (4/128)", price: "₦126,000" },
    { model: "Redmi 14C 4/128GB", price: "₦130,500" },
    { model: "Redmi 14C 6/128GB", price: "₦146,000" },
    { model: "Redmi 14C 8/256GB", price: "₦161,500" },
    { model: "Note 13 (6/128)", price: "₦250,000" },
    { model: "Note 13 (512GB)", price: "₦311,000" },
    { model: "Note 14 (6/128)", price: "₦240,000" },
    { model: "Note 14 (8/128)", price: "₦258,000" },
    { model: "Note 14 (8/256)", price: "₦277,000" },
    { model: "Note 14 Pro 256GB", price: "₦383,000" },
    { model: "Note 14 Pro 512GB", price: "₦456,000" },
    { model: "Note 14 Pro Plus 5G (8/256)", price: "₦595,000" },
    { model: "Note 14 Pro Plus 5G 512GB", price: "₦672,000" },
    { model: "Xiaomi 14T (12/512)", price: "₦690,000" },
  ];

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 10); // Increase the number of items to show by 10
  };

  const handleShowLess = () => {
    setItemsToShow((prev) => (prev > 10 ? prev - 10 : 10)); // Decrease the number of items to show by 10, but not below 10
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Brand New Redmi Phones</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Redmi Models</h2>
        <ul className="divide-y divide-gray-200">
          {redmiPhones.slice(0, itemsToShow).map((phone, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{phone.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{phone.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center p-2">
          {itemsToShow < redmiPhones.length && (
            <button
              onClick={handleShowMore}
              className="rounded-xl bg-blue-600 text-white p-3 hover:bg-blue-700 transition-all duration-300 mb-2"
            >
              View More
            </button>
          )}
          {itemsToShow > 10 && (
            <button
              onClick={handleShowLess}
              className="rounded-xl bg-red-600 text-white p-3 hover:bg-red-700 transition-all duration-300"
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RedmiPriceList;