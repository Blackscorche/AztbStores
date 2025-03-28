import React, { useState } from 'react';

const UkUsedMacBooks = () => {
  const [showAllPro, setShowAllPro] = useState(false);
  const [showAllAir, setShowAllAir] = useState(false);

  const ukUsedMacBooks = {
    macBookPro: [
      { model: "MacBook Pro 2018, 13\", Touch Bar, Intel Core i7, 8GB RAM, 256GB SSD, 2.70GHz", price: "₦700,000" },
      { model: "MacBook Pro 2018, 13\", Touch Bar, Intel Core i7, 16GB RAM, 256GB SSD, 2.70GHz", price: "₦740,000" },
      { model: "MacBook Pro 2019, 13\", Touch Bar, Intel Core i7, 16GB RAM, 512GB SSD, 2.80GHz", price: "₦820,000" },
      { model: "MacBook Pro 2020, M1 Chip, 13\", 8GB RAM, 256GB SSD, 8C CPU / 8C GPU, Space Grey", price: "₦990,000" },
      { model: "MacBook Pro 2020, 13\", Touch Bar, Intel Core i7, 16GB RAM, 512GB SSD, 2.30GHz", price: "₦940,000" },
    ],
    macBookAir: [
      { model: "MacBook Air 2013, Core i5, 4GB RAM, 128GB SSD, 11\"", price: "₦260,000" },
      { model: "MacBook Air 2015, Core i5, 8GB RAM, 128GB SSD, 13\"", price: "₦320,000" },
      { model: "MacBook Air 2015, Core i7, 8GB RAM, 256GB SSD, 13\"", price: "₦350,000" },
      { model: "MacBook Air 2015, Core i7, 8GB RAM, 512GB SSD, 13\"", price: "₦380,000" },
    ],
  };

  const togglePro = () => setShowAllPro(!showAllPro);
  const toggleAir = () => setShowAllAir(!showAllAir);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">UK Used MacBooks</h1>

      {/* MacBook Pro Section */}
      <div className="mb-8 bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">MacBook Pro Models</h2>
        <ul className="divide-y divide-gray-200">
          {(showAllPro ? ukUsedMacBooks.macBookPro : ukUsedMacBooks.macBookPro.slice(0, 3)).map((mac, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{mac.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{mac.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center p-2">
          <button
            onClick={togglePro}
            className=" bg-blue-600 text-white p-3 hover:bg-blue-700 transition-all duration-300 rounded-xl cursor-pointer"
          >
            {showAllPro ? "View Less" : "View More"}
          </button>

        </div>

      </div>

      {/* MacBook Air Section */}
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">MacBook Air Models</h2>
        <ul className="divide-y divide-gray-200">
          {(showAllAir ? ukUsedMacBooks.macBookAir : ukUsedMacBooks.macBookAir.slice(0, 3)).map((mac, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300 ">
              <div>
                <p className="text-gray-700 font-medium">{mac.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{mac.price}</p>
            </li>
          ))}
        </ul>
        <div className="w-full flex flex-col items-center p-2">
          <button
            onClick={toggleAir}
            className="m-auto bg-blue-600 text-white p-3 hover:bg-blue-700 transition-all duration-300 rounded-xl cursor-pointer"
          >
            {showAllAir ? "View Less" : "View More"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default UkUsedMacBooks;
