import React, { useState } from 'react';

const OppoPriceList = () => {
  const [itemsToShow, setItemsToShow] = useState(10); // Start by showing 10 items

  const oppoPhones = [
    { model: "A18 4+64GB", price: "₦170,000" },
    { model: "A18 4+128GB", price: "₦190,000" },
    { model: "A38 6+128GB", price: "₦235,000" },
    { model: "A58 6+128GB", price: "₦245,000" },
    { model: "A60 256GB", price: "₦305,000" },
    { model: "Reno 8T 8+256GB", price: "₦370,000" },
    { model: "Reno 8T 5G 8+256GB", price: "₦610,000" },
    { model: "Reno 11F 12+256GB", price: "₦465,000" },
    { model: "Reno 11 12+256GB", price: "₦620,000" },
    { model: "Reno 12F 12/256GB", price: "₦540,000" },
    { model: "Reno 12 12/512GB", price: "₦640,000" },
  ];

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 10); // Increase the number of items to show by 10
  };

  const handleShowLess = () => {
    setItemsToShow((prev) => (prev > 10 ? prev - 10 : 10)); // Decrease the number of items to show by 10, but not below 10
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Oppo Phones Price List</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Oppo Models</h2>
        <ul className="divide-y divide-gray-200">
          {oppoPhones.slice(0, itemsToShow).map((phone, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{phone.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{phone.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center p-2">
          {itemsToShow < oppoPhones.length && (
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

export default OppoPriceList;