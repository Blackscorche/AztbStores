import React, { useState } from 'react';

const UkUsedSamsung = () => {
  const [itemsToShow, setItemsToShow] = useState(10); // Start by showing 10 items

  const samsungPhones = [
    { model: "S10e 128GB", price: "₦195,000" },
    { model: "S10 128GB", price: "₦250,000" },
    { model: "S10 Plus 128GB", price: "₦325,000" },
    { model: "S20 128GB", price: "₦320,000" },
    { model: "S20 Plus 128GB", price: "₦335,000" },
    { model: "S20 Ultra 128GB", price: "₦370,000" },
    { model: "S20 Ultra 256GB", price: "₦385,000" },
    { model: "S21 128GB", price: "₦345,000" },
    { model: "S21 256GB", price: "₦390,000" },
    { model: "S21 Plus 128GB", price: "₦390,000" },
    { model: "S21 Ultra 128GB", price: "₦515,000" },
    { model: "S22 128GB", price: "₦465,000" },
    { model: "S22 256GB", price: "₦510,000" },
    { model: "S22 Plus Single + E-SIM 128GB", price: "₦515,000" },
    { model: "S22 Plus Single + E-SIM 256GB", price: "₦610,000" },
    { model: "S22 Ultra Single + E-SIM 128GB", price: "₦710,000" },
    { model: "S22 Ultra Single + E-SIM 256GB", price: "₦760,000" },
    { model: "S22 Ultra Single + E-SIM 512GB", price: "₦830,000" },
    { model: "S23 128GB", price: "₦660,000" },
    { model: "S23 256GB", price: "₦760,000" },
    { model: "Note 8", price: "₦200,000" },
    { model: "Note 9 128GB", price: "₦240,000" },
    { model: "Note 10 256GB", price: "₦325,000" },
    { model: "Note 10+ 256GB", price: "₦395,000" },
    { model: "Note 20 128GB", price: "₦340,000" },
    { model: "Note 20 256GB", price: "₦350,000" },
    { model: "Note 20 Ultra 128GB", price: "₦500,000" },
    { model: "Flip 3 128GB", price: "₦425,000" },
    { model: "Flip 3 256GB", price: "₦445,000" },
    { model: "Flip 4 128GB", price: "₦530,000" },
    { model: "Flip 4 256GB", price: "₦560,000" },
    { model: "Flip 4 512GB", price: "₦590,000" },
    { model: "Flip 5 256GB", price: "₦655,000" },
    { model: "Fold 3 256GB", price: "₦700,000" },
    { model: "Fold 4 256GB", price: "₦890,000" },
    { model: "Fold 5 256GB", price: "₦1,300,000" },
  ];

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 10); // Increase the number of items to show by 10
  };

  const handleShowLess = () => {
    setItemsToShow((prev) => (prev > 10 ? prev - 10 : 10)); // Decrease the number of items to show by 10, but not below 10
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">UK Used Samsung Phones</h1>

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

export default UkUsedSamsung;