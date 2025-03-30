import React, { useState } from 'react';

const EarbudsPriceList = () => {
  const earbudsCategories = [
    {
      category: "Apple AirPods",
      items: [
        { model: "Airpods 2", price: "₦175,000" },
        { model: "Airpods 3", price: "₦55,000" },
        { model: "Airpods Pro 2 (Type C)", price: "₦330,000" },
        { model: "Airpods 4 (2024 Regular)", price: "₦215,000" },
        { model: "AirPods 4 (2024 ANC)", price: "₦320,000" },
        { model: "Airpods Max", price: "₦750,000" },
        { model: "Airpods Max (Type C) 2024", price: "₦870,000" },
      ],
    },
    {
      category: "Samsung Galaxy Buds",
      items: [
        { model: "Galaxy Buds FE", price: "₦130,000" },
        { model: "Galaxy Buds 2", price: "₦170,000" },
        { model: "Galaxy Buds 2 Pro", price: "₦180,000" },
        { model: "Galaxy Buds 3", price: "₦210,000" },
        { model: "Galaxy Buds 3 Pro", price: "₦295,000" },
      ],
    },
    {
      category: "Xiaomi Buds",
      items: [
        { model: "Buds 3 Pro", price: "₦255,000" },
        { model: "Buds 3", price: "₦175,000" },
        { model: "Buds FE", price: "₦110,000" },
        { model: "Redmi Buds 6 Play", price: "₦19,000" },
        { model: "Buds 6 Lite", price: "₦30,000" },
        { model: "Buds 6 Active", price: "₦25,000" },
      ],
    },
    {
      category: "Google Pixel Buds",
      items: [
        { model: "Google Pixel Buds Pro", price: "₦250,000" },
      ],
    },
  ];

  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Earbuds Price List</h1>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        {earbudsCategories.map((category, index) => (
          <div key={index} className="mb-6">
            <h2 className="bg-blue-600 text-white text-lg font-semibold p-4">{category.category}</h2>
            <ul className="divide-y divide-gray-200">
              {(expandedCategories[category.category]
                ? category.items
                : category.items.slice(0, 3)
              ).map((item, idx) => (
                <li
                  key={idx}
                  className="p-4 flex justify-between items-center hover:bg-gray-50 transition-all duration-300"
                >
                  <div>
                    <p className="text-gray-700 font-medium">{item.model}</p>
                  </div>
                  <p className="text-lg font-bold text-green-600">{item.price}</p>
                </li>
              ))}
            </ul>
            <div className="w-full flex justify-center p-2">
              <button
                onClick={() => toggleCategory(category.category)}
                className="rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-all duration-300"
              >
                {expandedCategories[category.category] ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarbudsPriceList;