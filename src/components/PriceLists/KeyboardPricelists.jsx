import React, { useState } from 'react';

const KeyboardPricelist = () => {
  const [showAll, setShowAll] = useState(false);

  const keyboards = [
    { model: "Magic Keyboard 11 inches", price: "₦365,000" },
    { model: "Magic Keyboard 12.9 inches", price: "₦380,000" },
    { model: "Magic Keyboard 13 inches", price: "₦550,000" },
  ];

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Keyboard Price List</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">Magic Keyboards</h2>
        <ul className="divide-y divide-gray-200">
          {(showAll ? keyboards : keyboards.slice(0, 3)).map((keyboard, index) => (
            <li
              key={index}
              className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300"
            >
              <div>
                <p className="text-gray-700 font-medium">{keyboard.model}</p>
              </div>
              <p className="text-lg font-bold text-green-600">{keyboard.price}</p>
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

export default KeyboardPricelist;