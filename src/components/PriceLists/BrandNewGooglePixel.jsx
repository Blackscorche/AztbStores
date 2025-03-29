import React, { useState } from 'react';

const BrandNewGooglePixel = () => {
  const [itemsToShow, setItemsToShow] = useState(10); // Start by showing 10 items

  const googlePixelPhones = [
    { model: "Pixel 9 Pro XL 128GB", price: "₦1,650,000" },
    { model: "Pixel 9 Pro XL 256GB", price: "₦1,850,000" },
    { model: "Pixel Pro XL 512GB", price: "₦2,170,000" },
    { model: "Pixel 9 128GB", price: "₦1,170,000" },
    { model: "Pixel 9 256GB", price: "₦1,280,000" },
    { model: "Pixel Fold 256GB", price: "₦1,670,000" },
    { model: "Pixel 8 Pro 128GB", price: "₦930,000" },
    { model: "Pixel 8 Pro 256GB", price: "₦1,120,000" },
    { model: "Pixel 8 Pro 512GB", price: "₦1,310,000" },
    { model: "Pixel 8 1TB Pro", price: "₦1,590,000" },
  ];

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 10); // Increase the number of items to show by 10
  };

  const handleShowLess = () => {
    setItemsToShow((prev) => (prev > 10 ? prev - 10 : 10)); // Decrease the number of items to show by 10, but not below 10
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Brand New Google Pixel Phones</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Google Pixel Models</h2>
        <ul className="divide-y divide-gray-200">
          {googlePixelPhones.slice(0, itemsToShow).map((phone, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{phone.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{phone.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center p-2">
          {itemsToShow < googlePixelPhones.length && (
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

export default BrandNewGooglePixel;