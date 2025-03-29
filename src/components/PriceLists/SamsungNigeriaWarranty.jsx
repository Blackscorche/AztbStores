import React, { useState } from 'react';

const SamsungNigeriaWarranty = () => {
  const [itemsToShow, setItemsToShow] = useState(10); // Start by showing 10 items

  const samsungPhones = [
    { model: "S25 256GB", price: "₦1,400,000" },
    { model: "S25 Plus 256GB", price: "₦1,550,000" },
    { model: "S25 Plus 512GB", price: "₦1,650,000" },
    { model: "S25 Ultra 256GB", price: "₦1,890,000" },
    { model: "S25 Ultra 512GB", price: "₦2,050,000" },
    { model: "S25 Ultra 1TB", price: "₦2,380,000" },
    { model: "Fold 6 256GB", price: "₦2,550,000" },
    { model: "Fold 6 512GB", price: "₦2,770,000" },
    { model: "Fold 6 1TB", price: "₦3,150,000" },
    { model: "Flip 6 256GB", price: "₦1,580,000" },
    { model: "Flip 6 512GB", price: "₦1,770,000" },
    { model: "Flip 5 512GB", price: "₦1,280,000" },
    { model: "S24 FE (8/256GB)", price: "₦990,000" },
    { model: "S24 Ultra 256GB", price: "₦1,820,000" },
    { model: "S23 FE (128GB)", price: "₦820,000" },
    { model: "A15 8/256GB", price: "₦330,000" },
    { model: "A16 4/128GB 5G", price: "₦260,000" },
    { model: "A16 4/128GB", price: "₦230,000" },
    { model: "A16 6/128GB", price: "₦250,000" },
    { model: "A16 8/256GB", price: "₦305,000" },
    { model: "A06 (4/128GB)", price: "₦155,000" },
    { model: "A06 (4/64GB)", price: "₦152,000" },
    { model: "A05s 4/128GB", price: "₦215,000" },
    { model: "A05s 4/64GB", price: "₦205,000" },
    { model: "A05 (64/4GB)", price: "₦130,000" },
    { model: "A55 5G (8/128GB)", price: "₦580,000" },
    { model: "A55 5G (8/256GB)", price: "₦595,000" },
    { model: "A25 5G (8/256GB)", price: "₦430,000" },
    { model: "A25 5G (6/128GB)", price: "₦365,000" },
    { model: "A35 5G (6/128GB)", price: "₦450,000" },
    { model: "A35 5G (8/256GB)", price: "₦530,000" },
    { model: "A54 5G (8/128GB)", price: "₦430,000" },
  ];

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 10); // Increase the number of items to show by 10
  };

  const handleShowLess = () => {
    setItemsToShow((prev) => (prev > 10 ? prev - 10 : 10)); // Decrease the number of items to show by 10, but not below 10
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Samsung Phones (Nigeria Warranty)</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Samsung Models</h2>
        <ul className="divide-y divide-gray-200">
          {samsungPhones.slice(0, itemsToShow).map((phone, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{phone.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{phone.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center p-2">
          {itemsToShow < samsungPhones.length && (
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

export default SamsungNigeriaWarranty;