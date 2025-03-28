import React, { useState } from 'react';

const UkUsedSmartWatches = () => {
  const [showAllSeries, setShowAllSeries] = useState(false);
  const [showAllUltra, setShowAllUltra] = useState(false);

  const ukUsedSmartWatches = {
    series: [
      { model: "Series SE 40mm GPS", price: "₦190,000" },
      { model: "Series SE 40mm GPS Cellular", price: "₦200,000" },
      { model: "Series 4 44mm GPS", price: "₦210,000" },
      { model: "Series 4 44mm GPS Cellular", price: "₦220,000" },
      { model: "Series 5 40mm GPS", price: "₦225,000" },
      { model: "Series 5 40mm GPS Cellular", price: "₦235,000" },
      { model: "Series 5 44mm GPS", price: "₦250,000" },
      { model: "Series 5 44mm GPS Cellular", price: "₦260,000" },
      { model: "Series SE 2nd Gen 40mm GPS", price: "₦260,000" },
      { model: "Series SE 2nd Gen 40mm GPS Cellular", price: "₦265,000" },
      { model: "Series SE 2nd Gen 44mm GPS", price: "₦270,000" },
      { model: "Series SE 2nd Gen 44mm GPS Cellular", price: "₦275,000" },
      { model: "Series 6 40mm GPS Only", price: "₦260,000" },
      { model: "Series 6 40mm GPS Cellular", price: "₦275,000" },
      { model: "Series 6 44mm GPS Only", price: "₦275,000" },
      { model: "Series 6 44mm GPS Cellular", price: "₦285,000" },
      { model: "Series 7 41mm GPS", price: "₦340,000" },
      { model: "Series 7 41mm GPS Cellular", price: "₦360,000" },
      { model: "Series 7 45mm GPS Only", price: "₦360,000" },
      { model: "Series 7 45mm GPS Cellular", price: "₦380,000" },
      { model: "Series 8 41mm GPS", price: "₦385,000" },
      { model: "Series 8 41mm GPS Cellular", price: "₦400,000" },
      { model: "Series 8 45mm GPS Only", price: "₦430,000" },
      { model: "Series 8 45mm GPS Cellular", price: "₦450,000" },
      { model: "Series 9 45mm GPS Only", price: "₦460,000" },
      { model: "Series 9 45mm GPS Cellular", price: "₦490,000" },
    ],
    ultra: [
      { model: "Watch Ultra 1", price: "₦700,000" },
    ],
  };

  const toggleSeries = () => setShowAllSeries(!showAllSeries);
  const toggleUltra = () => setShowAllUltra(!showAllUltra);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">UK Used Smartwatches</h1>

      {/* Series Section */}
      <div className="mb-8 bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Apple Watch Series</h2>
        <ul className="divide-y divide-gray-200">
          {(showAllSeries ? ukUsedSmartWatches.series : ukUsedSmartWatches.series.slice(0, 5)).map((watch, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{watch.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{watch.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center p-2">
          <button
            onClick={toggleSeries}
            className="bg-blue-600 text-white p-3 hover:bg-blue-700 transition-all duration-300 rounded-xl cursor-pointer"
          >
            {showAllSeries ? "View Less" : "View More"}
          </button>
        </div>
      </div>

      {/* Ultra Section */}
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Apple Watch Ultra</h2>
        <ul className="divide-y divide-gray-200">
          {(showAllUltra ? ukUsedSmartWatches.ultra : ukUsedSmartWatches.ultra.slice(0, 1)).map((watch, index) => (
            <li key={index} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300">
              <div>
                <p className="text-gray-700 font-medium">{watch.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{watch.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center p-2">
          <button
            onClick={toggleUltra}
            className="bg-blue-600 text-white p-3 hover:bg-blue-700 transition-all duration-300 rounded-xl cursor-pointer"
          >
            {showAllUltra ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UkUsedSmartWatches;