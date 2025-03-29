import React, { useState } from 'react';

const BrandNewIphone = () => {
  const [itemsToShow, setItemsToShow] = useState(10); // Start by showing 10 items

  const brandNewIphones = [
    { model: "16 128GB", price: "₦1,200,000" },
    { model: "16 256GB", price: "₦1,400,000" },
    { model: "16 Plus 128GB", price: "₦1,420,000" },
    { model: "16 Plus 256GB", price: "₦1,560,000" },
    { model: "16 Plus 512GB", price: "₦1,990,000" },
    { model: "16 Pro 128GB", price: "₦1,660,000" },
    { model: "16 Pro 256GB", price: "₦1,790,000" },
    { model: "16 Pro 256GB ESIM", price: "₦1,740,000" },
    { model: "16 Pro Max 256GB", price: "₦1,940,000" },
    { model: "16 Pro Max 512GB", price: "₦2,320,000" },
    { model: "16 Pro Max 1TB", price: "₦2,630,000" },
    { model: "15 128GB Physical SIM", price: "₦1,150,000" },
    { model: "15 128GB E-SIM", price: "₦1,060,000" },
    { model: "15 256GB Physical SIM", price: "₦1,340,000" },
    { model: "15 256GB E-SIM", price: "₦1,230,000" },
    { model: "15 Plus 128GB Physical SIM", price: "₦1,310,000" },
    { model: "15 Plus 256GB Physical SIM", price: "₦1,410,000" },
    { model: "15 Plus 512GB Physical SIM", price: "₦1,650,000" },
    { model: "15 Pro 128GB Physical SIM", price: "₦1,460,000" },
    { model: "15 Pro 128GB E-SIM", price: "₦1,350,000" },
    { model: "15 Pro 256GB Physical SIM", price: "₦1,550,000" },
    { model: "15 Pro 256GB E-SIM", price: "₦1,420,000" },
    { model: "15 Pro 512GB Physical SIM", price: "₦1,890,000" },
    { model: "15 Pro 1TB Physical SIM", price: "₦1,990,000" },
    { model: "15 Pro Max 256GB Physical SIM", price: "₦1,860,000" },
    { model: "15 Pro Max 256GB E-SIM", price: "₦1,650,000" },
    { model: "15 Pro Max 512GB Physical SIM", price: "₦2,150,000" },
    { model: "15 Pro Max 512GB E-SIM", price: "₦1,880,000" },
    { model: "15 Pro Max 1TB Physical SIM", price: "₦2,300,000" },
    { model: "13 128GB", price: "₦790,000" },
  ];

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 10); // Increase the number of items to show by 10
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Brand New iPhones</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">iPhone Models</h2>
        <ul className="divide-y divide-gray-200">
          {brandNewIphones.slice(0, itemsToShow).map((iphone, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{iphone.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{iphone.price}</p>
            </li>
          ))}
        </ul>

        {itemsToShow < brandNewIphones.length && (
          <div className="w-full flex flex-col items-center p-2">
            <button
              onClick={handleShowMore}
              className="rounded-xl bg-blue-600 text-white p-3 hover:bg-blue-700 transition-all duration-300"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandNewIphone;