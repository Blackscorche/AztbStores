import React, { useState } from 'react';

const UkUsedIphone = () => {
  const [itemsToShow, setItemsToShow] = useState(10); // Start by showing 10 items

  const ukUsedIphones = [
    { model: "15 128GB Physical SIM", price: "₦950,000" },
    { model: "15 256GB Physical SIM", price: "₦1,080,000" },
    { model: "15 Plus 128GB Physical SIM", price: "₦1,190,000" },
    { model: "15 Pro Max 1TB Physical SIM", price: "₦1,700,000" },
    { model: "15 Pro Max 512GB Physical SIM", price: "₦1,680,000" },
    { model: "15 Pro Max 256GB Physical SIM", price: "₦1,480,000" },
    { model: "15 Pro 256GB Physical SIM", price: "₦1,400,000" },
    { model: "15 Pro 256GB E-SIM", price: "₦1,280,000" },
    { model: "15 Pro 128GB Physical SIM", price: "₦1,290,000" },
    { model: "15 Pro 128GB E-SIM", price: "₦1,130,000" },
    { model: "14 128GB Physical SIM", price: "₦740,000" },
    { model: "14 128GB E-SIM", price: "₦680,000" },
    { model: "14 256GB Physical SIM", price: "₦800,000" },
    { model: "14 256GB E-SIM", price: "₦740,000" },
    { model: "14 Plus 128GB Physical SIM", price: "₦810,000" },
    { model: "14 Plus 256GB Physical SIM", price: "₦850,000" },
    { model: "14 Pro 128GB Physical SIM", price: "₦920,000" },
    { model: "14 Pro 128GB E-SIM", price: "₦880,000" },
    { model: "14 Pro 256GB Physical SIM", price: "₦1,010,000" },
    { model: "14 Pro 256GB E-SIM", price: "₦910,000" },
    { model: "14 Pro Max 128GB Physical SIM", price: "₦1,130,000" },
    { model: "14 Pro Max 128GB E-SIM", price: "₦1,000,000" },
    { model: "14 Pro Max 256GB Physical SIM", price: "₦1,210,000" },
    { model: "14 Pro Max 256GB E-SIM", price: "₦1,130,000" },
    { model: "13 Pro Max 128GB", price: "₦770,000" },
    { model: "13 Pro Max 256GB", price: "₦830,000" },
    { model: "13 Pro 128GB", price: "₦660,000" },
    { model: "13 Pro 256GB", price: "₦720,000" },
    { model: "13 128GB", price: "₦540,000" },
    { model: "13 256GB", price: "₦600,000" },
    { model: "13 512GB", price: "₦650,000" },
    { model: "13 Mini 128GB", price: "₦495,000" },
    { model: "12 Pro Max 128GB", price: "₦650,000" },
    { model: "12 Pro Max 256GB", price: "₦700,000" },
    { model: "12 Pro 128GB", price: "₦520,000" },
    { model: "12 Pro 256GB", price: "₦565,000" },
    { model: "12 64GB", price: "₦385,000" },
    { model: "12 128GB", price: "₦435,000" },
    { model: "12 256GB", price: "₦465,000" },
    { model: "11 Pro Max 64GB", price: "₦470,000" },
    { model: "11 Pro Max 256GB", price: "₦505,000" },
    { model: "11 Pro Max 512GB", price: "₦550,000" },
    { model: "11 Pro 64GB", price: "₦380,000" },
    { model: "11 Pro 256GB", price: "₦435,000" },
    { model: "11 64GB", price: "₦335,000" },
    { model: "11 128GB", price: "₦375,000" },
    { model: "Xs Max 64GB", price: "₦320,000" },
    { model: "Xs Max 256GB", price: "₦355,000" },
    { model: "Xs Max 512GB", price: "₦410,000" },
    { model: "Xr 64GB", price: "₦255,000" },
    { model: "Xr 128GB", price: "₦280,000" },
    { model: "Xs 64GB", price: "₦245,000" },
    { model: "Xs 256GB", price: "₦290,000" },
    { model: "X 64GB", price: "₦225,000" },
    { model: "X 256GB", price: "₦244,000" },
  ];

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 10); // Increase the number of items to show by 10
  };

  const handleShowLess = () => {
    setItemsToShow((prev) => (prev > 10 ? prev - 10 : 10)); // Decrease the number of items to show by 10, but not below 10
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">UK Used iPhones</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">iPhone Models</h2>
        <ul className="divide-y divide-gray-200">
          {ukUsedIphones.slice(0, itemsToShow).map((iphone, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{iphone.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{iphone.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center p-2">
          {itemsToShow < ukUsedIphones.length && (
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

export default UkUsedIphone;