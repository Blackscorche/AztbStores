import React, { useState } from 'react';

const BrandNewMacBooks = () => {
  const [showAllPro, setShowAllPro] = useState(false);
  const [showAllAir, setShowAllAir] = useState(false);

  const brandNewMacBooks = {
    macBookPro: [
      { model: "MacBook Pro 2024, 14\", M4 Pro Chip, 24GB RAM, 512GB SSD", price: "₦3,220,000" },
      { model: "MacBook Pro 2024, 14\", M4 Max Chip, 32GB RAM, 1TB SSD", price: "₦5,100,000" },
      { model: "MacBook Pro 2023, 14\", M3 Chip, 8GB RAM, 512GB SSD", price: "₦2,390,000" },
      { model: "MacBook Pro 2023, 14\", M3 Pro Chip, 8GB RAM, 512GB SSD", price: "₦2,500,000" },
      { model: "MacBook Pro 2023, 14\", M3 Max Chip, 96GB RAM, 1TB SSD", price: "₦6,900,000" },
      { model: "MacBook Pro 2023, 16\", M3 Max Chip, 48GB RAM, 1TB SSD", price: "₦4,750,000" },
    ],
    macBookAir: [
      { model: "MacBook Air 2023, 13\", M3 Chip, 8GB RAM, 256GB SSD", price: "₦1,800,000" },
      { model: "MacBook Air 2023, 13\", M3 Chip, 8GB RAM, 512GB SSD", price: "₦1,990,000" },
      { model: "MacBook Air 2023, 15\", M3 Chip, 8GB RAM, 256GB SSD", price: "₦1,900,000" },
      { model: "MacBook Air 2023, 15\", M3 Chip, 8GB RAM, 512GB SSD", price: "₦2,050,000" },
      { model: "MacBook Air 2022, 13\", M2 Chip, 16GB RAM, 512GB SSD", price: "₦1,930,000" },
    ],
  };

  const togglePro = () => setShowAllPro(!showAllPro);
  const toggleAir = () => setShowAllAir(!showAllAir);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Brand New MacBooks</h1>

      {/* MacBook Pro Section */}
      <div className="mb-8 bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">MacBook Pro Models</h2>
        <ul className="divide-y divide-gray-200">
          {(showAllPro ? brandNewMacBooks.macBookPro : brandNewMacBooks.macBookPro.slice(0, 3)).map((mac, index) => (
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
            className="rounded-xl bg-blue-600 text-white p-3 hover:bg-blue-700 transition-all duration-300"
          >
            {showAllPro ? "View Less" : "View More"}
          </button>
        </div>

      </div>

      {/* MacBook Air Section */}
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">MacBook Air Models</h2>
        <ul className="divide-y divide-gray-200">
          {(showAllAir ? brandNewMacBooks.macBookAir : brandNewMacBooks.macBookAir.slice(0, 3)).map((mac, index) => (
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
            onClick={toggleAir}
            className=" bg-blue-600 text-white p-3 hover:bg-blue-700 transition-all duration-300 rounded-xl"
          >
            {showAllAir ? "View Less" : "View More"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default BrandNewMacBooks;
