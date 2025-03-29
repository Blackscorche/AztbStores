import React, { useState } from 'react';

const BrandNewSamsungs = () => {
  const [itemsToShow, setItemsToShow] = useState(10); // Start by showing 10 items

  const samsungPhones = [
    { model: "S25 128GB", price: "₦1,320,000" },
    { model: "S25 256GB", price: "₦1,500,000" },
    { model: "S25 Plus 256GB", price: "₦1,550,000" },
    { model: "S25 Plus 512GB", price: "₦1,700,000" },
    { model: "S25 Ultra 256GB", price: "₦1,780,000" },
    { model: "S25 Ultra 512GB", price: "₦1,980,000" },
    { model: "Fold 6 12/256GB Physical + E-SIM", price: "₦1,850,000" },
    { model: "Fold 6 12/256GB Dual", price: "₦2,090,000" },
    { model: "Fold 6 12/512GB Physical + E-SIM", price: "₦2,050,000" },
    { model: "Fold 6 12/512GB Dual", price: "₦2,250,000" },
    { model: "Fold 6 12/1TB Dual", price: "₦2,860,000" },
    { model: "Flip 6 8/256GB Single + E-SIM", price: "₦1,230,000" },
    { model: "Flip 6 8/512GB Single + E-SIM", price: "₦1,440,000" },
    { model: "S24 Ultra Dual 12/256GB", price: "₦1,530,000" },
    { model: "S24 Ultra Physical + E-SIM 12/256GB", price: "₦1,400,000" },
    { model: "S24 Ultra Dual 12/512GB", price: "₦1,700,000" },
    { model: "S24 Ultra Physical + E-SIM 12/512GB", price: "₦1,550,000" },
    { model: "S24 Ultra Dual 12/1TB", price: "₦2,050,000" },
    { model: "S24 Plus Dual 12/256GB", price: "₦1,340,000" },
    { model: "S24 Plus Physical + E-SIM 12/256GB", price: "₦1,190,000" },
    { model: "S24 8/256GB Dual", price: "₦1,100,000" },
    { model: "S24 8/256GB Single + E-SIM", price: "₦970,000" },
    { model: "Fold 5 12/256GB Single + E-SIM", price: "₦1,280,000" },
    { model: "Fold 5 12/512GB Single + E-SIM", price: "₦1,400,000" },
    { model: "Fold 5 12/256GB Dual", price: "₦1,500,000" },
    { model: "Fold 5 12/512GB Dual", price: "₦1,550,000" },
    { model: "Flip 5 8/256GB Single + E-SIM", price: "₦870,000" },
    { model: "Flip 5 8/512GB Single + E-SIM", price: "₦950,000" },
    { model: "A05 (4+64)", price: "₦140,000" },
    { model: "A05s (4+64)", price: "₦200,000" },
    { model: "A05s (4+128)", price: "₦210,000" },
    { model: "A06 (4+64)", price: "₦160,000" },
    { model: "A06 (4+128)", price: "₦190,000" },
    { model: "A15 (8+256)", price: "₦330,000" },
    { model: "A16 4G (4+128)", price: "₦245,000" },
    { model: "A16 4G (6+128)", price: "₦265,000" },
    { model: "A16 4G (8+256)", price: "₦320,000" },
    { model: "A16 5G (4+128)", price: "₦275,000" },
    { model: "A25 5G (6+128)", price: "₦420,000" },
    { model: "A25 5G (8+256)", price: "₦480,000" },
    { model: "A35 5G (6+128)", price: "₦510,000" },
    { model: "A35 5G (8+256)", price: "₦570,000" },
    { model: "A55 5G (8+128)", price: "₦625,000" },
    { model: "A55 5G (8+256)", price: "₦670,000" },
    { model: "A54 5G (8+128)", price: "₦505,000" },
  ];

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + 10); // Increase the number of items to show by 10
  };

  const handleShowLess = () => {
    setItemsToShow((prev) => (prev > 10 ? prev - 10 : 10)); // Decrease the number of items to show by 10, but not below 10
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-5 mt-20">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Samsung Phones</h1>

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

export default BrandNewSamsungs;