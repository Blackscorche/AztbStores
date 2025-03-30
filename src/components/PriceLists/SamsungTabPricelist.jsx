import React, { useState } from 'react';

const SamsungTabPricelist = () => {
  const [showAll, setShowAll] = useState(false);

  const samsungTabs = [
    { model: "Tab A9 64GB", price: "₦270,000" },
    { model: "Tab A9 128GB", price: "₦335,000" },
    { model: "Tab A9+ 5G 64GB", price: "₦420,000" },
    { model: "Tab A9+ 5G 128GB", price: "₦460,000" },
    { model: "Tab S10+ 256GB", price: "₦1,730,000" },
    { model: "Tab S10+ 256GB with Keyboard", price: "₦2,150,000" },
    { model: "Tab S10 Ultra 256GB", price: "₦2,090,000" },
    { model: "Tab S10 Ultra 512GB", price: "₦2,200,000" },
    { model: "Tab S10 Ultra 256GB with Keyboard", price: "₦2,650,000" },
    { model: "Tab S10 Ultra 512GB with Keyboard", price: "₦2,700,000" },
    { model: "Tab A9 Plus 64GB", price: "₦375,000" },
    { model: "Tab A9 Plus 128GB", price: "₦415,000" },
    { model: "Tab A9 64GB", price: "₦235,000" },
    { model: "Tab A9 128GB", price: "₦285,000" },
    { model: "Tab S9 Ultra 5G 12/256GB", price: "₦1,740,000" },
  ];

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Samsung Tab Price List</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Samsung Tabs</h2>
        <ul className="divide-y divide-gray-200">
          {(showAll ? samsungTabs : samsungTabs.slice(0, 3)).map((tab, index) => (
            <li
              key={index}
              className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300"
            >
              <div>
                <p className="text-gray-700 font-medium">{tab.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{tab.price}</p>
            </li>
          ))}
        </ul>

        <div className="w-full flex justify-center p-2">
          <button
            onClick={toggleShowAll}
            className="rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-all duration-300"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SamsungTabPricelist;