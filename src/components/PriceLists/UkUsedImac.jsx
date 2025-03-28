import React, { useState } from 'react';

const UkUsedImac = () => {
  const [showAllIMacs, setShowAllIMacs] = useState(false);

  const iMacPriceList = [
    {
      model: 'Late 2012/2013 iMac 21.5inches',
      specs: '2.7GHz Core i5 Quad Core / 8GB DDR4 RAM / 1TB Drive / 1080p FHD Display / Wired Apple Keyboard + Mouse',
      price: '340k',
    },
    {
      model: 'Late 2012/2013 iMac 21.5inches',
      specs: '2.7GHz Core i5 Quad Core / 8GB DDR4 RAM / 256GB SSD / 1080p FHD Display / Wired Apple Keyboard + Mouse',
      price: '360k',
    },
    {
      model: 'Late 2013/2014 iMac 21.5inches',
      specs: '2.7GHz Core i5 Quad Core / 8GB DDR4 RAM / 1TB Drive / 1080p FHD Display / Wired Apple Keyboard + Mouse',
      price: '400k',
    },
    {
      model: 'Late 2013/2014 iMac 21.5inches',
      specs: '2.7GHz Core i5 Quad Core / 8GB DDR4 RAM / 256GB SSD / 1080p FHD Display / Wired Apple Keyboard + Mouse',
      price: '420k',
    },
    {
      model: 'Late 2012/2013 27inches iMac',
      specs: '3.5GHz Core i7 Quad Core / 32GB RAM / 1TB Drive / 2GB Nvidia Graphics / 3K QHD Display / Wired Apple Keyboard + Mouse',
      price: '720k',
    },
    {
      model: 'Late 2013/2014 27inches iMac',
      specs: '3.2GHz Core i5 Quad Core / 32GB RAM / 1TB Drive / 1GB Nvidia Graphics / 3K QHD Display / Wired Apple Keyboard + Mouse',
      price: '660k',
    },
    {
      model: 'Late 2013/2014 27inches iMac',
      specs: '3.5GHz Core i7 Quad Core / 32GB RAM / 3.12TB Fusion Drive / 4GB Nvidia Graphics / 3K QHD Display / Wired Keyboard + Mouse',
      price: '660k',
    },
  ];

  const toggleIMacs = () => setShowAllIMacs(!showAllIMacs);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">UK Used iMac Price List</h1>
      <p className="text-center text-sm text-gray-600 mb-4">Prices may vary based on stock and condition</p>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {(showAllIMacs ? iMacPriceList : iMacPriceList.slice(0, 3)).map((imac, index) => (
            <li key={index} className="p-4 hover:bg-gray-50 transition-all duration-300">
              <p className="text-gray-800 font-semibold">{imac.model}</p>
              <p className="text-gray-600 text-sm mt-1">{imac.specs}</p>
              <p className="text-lg font-bold text-green-600 mt-2">{imac.price}</p>
            </li>
          ))}
        </ul>
        <div className="w-full flex items-center p-2">
          <button
            onClick={toggleIMacs}
            className="m-auto bg-blue-600 text-white p-3 hover:bg-blue-700 transition-all duration-300 rounded-xl outline-0"
          >
            {showAllIMacs ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UkUsedImac;
