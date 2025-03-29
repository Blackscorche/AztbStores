import React, { useState } from 'react';

const BrandNewInfinix = () => {
  const [itemsToShow, setItemsToShow] = useState(10); // Start by showing 10 items

  const infinixPhones = [
    { model: "Smart8 (2+64)", price: "₦125,000" },
    { model: "Smart8 (3+64)", price: "₦135,000" },
    { model: "Smart9 HD (3+64)", price: "₦136,000" },
    { model: "Smart9 HD (4+64)", price: "₦163,000" },
    { model: "Smart9 (3+128)", price: "₦155,000" },
    { model: "Hot50i (4+128)", price: "₦165,009" },
    { model: "Hot50i (4+256)", price: "₦195,000" },
    { model: "Hot50 (8+128)", price: "₦235,000" },
    { model: "Hot50 (8+256)", price: "₦245,000" },
    { model: "Hot50 Pro+ (8+128)", price: "₦275,000" },
    { model: "Hot50 Pro+ (8+256)", price: "₦310,000" },
    { model: "Note40 (8+256)", price: "₦335,000" },
    { model: "Note40 Pro (8+256)", price: "₦400,000" },
    { model: "Note40 Pro+ 5G (12+256)", price: "₦525,000" },
    { model: "GT20 Pro (12+256)", price: "₦575,000" },
    { model: "XPAD WiFi (4+256)", price: "₦260,000" },
    { model: "XPAD 4G (4+128)", price: "₦255,000" },
    { model: "XPAD 4G (8+256)", price: "₦285,000" },
  ];

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 10); // Increase the number of items to show by 10
  };

  const handleShowLess = () => {
    setItemsToShow((prev) => (prev > 10 ? prev - 10 : 10)); // Decrease the number of items to show by 10, but not below 10
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Brand New Infinix Phones</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Infinix Models</h2>
        <ul className="divide-y divide-gray-200">
          {infinixPhones.slice(0, itemsToShow).map((phone, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{phone.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{phone.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center p-2">
          {itemsToShow < infinixPhones.length && (
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

export default BrandNewInfinix;