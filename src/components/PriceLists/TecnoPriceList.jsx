import React, { useState } from 'react';

const TecnoPriceList = () => {
  const [itemsToShow, setItemsToShow] = useState(10); // Start by showing 10 items

  const tecnoPhones = [
    { model: "Phantom V Fold 12GB 256GB", price: "₦1,180,000" },
    { model: "Phantom V Fold 12GB 512GB", price: "₦1,340,000" },
    { model: "Phantom V Fold 2 12GB 512GB", price: "₦1,670,000" },
    { model: "Phantom V Flip 2 8GB 256GB", price: "₦970,000" },
    { model: "Phantom V Flip 8GB 256GB", price: "₦780,000" },
    { model: "Pop8 (2+64)", price: "₦115,000" },
    { model: "Pop9 (3+64)", price: "₦120,000" },
    { model: "Pop9 (3+128)", price: "₦135,000" },
    { model: "Pop9 (4+128)", price: "₦140,000" },
    { model: "Spark30C (4+128)", price: "₦145,000" },
    { model: "Spark30C (6+128)", price: "₦170,000" },
    { model: "Spark30 Pro (8+128)", price: "₦236,000" },
    { model: "Spark30 Pro (8+256)", price: "₦265,000" },
    { model: "Pova 6 Neo (8+128)", price: "₦240,000" },
    { model: "Pova 6 Neo (8+256)", price: "₦260,000" },
    { model: "Camon 30S (6+128)", price: "₦275,000" },
    { model: "Camon 30S Pro (8+256)", price: "₦365,000" },
    { model: "Camon 30 5G (8+512)", price: "₦520,000" },
    { model: "Camon 30 Pro 5G (12+512)", price: "₦625,000" },
    { model: "Camon30 (8+256)", price: "₦310,000" },
    { model: "Camon30 (12+256)", price: "₦370,000" },
    { model: "Camon30 Premier 5G (12+512)", price: "₦710,000" },
    { model: "Megapad 10 (4+128)", price: "₦220,000" },
  ];

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 10); // Increase the number of items to show by 10
  };

  const handleShowLess = () => {
    setItemsToShow((prev) => (prev > 10 ? prev - 10 : 10)); // Decrease the number of items to show by 10, but not below 10
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Tecno Phones Price List</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Tecno Models</h2>
        <ul className="divide-y divide-gray-200">
          {tecnoPhones.slice(0, itemsToShow).map((phone, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{phone.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{phone.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center p-2">
          {itemsToShow < tecnoPhones.length && (
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

export default TecnoPriceList;