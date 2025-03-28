import React from 'react'

function SmartphoneCategory() {
  return (
    <section>
        <div className="min-h-screen bg-gray-100 py-8 px-5">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Laptops Categories</h1>
            <div className="">
                <h3>Brand New Macbooks</h3>
                <p>
                    View Our Brand New Macbooks PriceLists
                </p>
                <Link to="/brandnewmacbooks" className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                    View Pricelis
                </Link>
            </div>
        </div>

        <div className="min-h-screen bg-gray-100 py-8 px-5">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Laptops Categories</h1>
            <div className="">
                <h3>Brand New Macbooks</h3>
                <p>
                    View Our Brand New Macbooks PriceLists
                </p>
                <Link to="/brandnewmacbooks" className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                    View Pricelis
                </Link>
            </div>
        </div>
    </section>
  )
}

export default SmartphoneCategory