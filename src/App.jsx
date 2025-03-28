import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ReviewForm from "./components/ReviewForm";
import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation for route tracking
import { useEffect } from "react"; // useEffect to handle scroll reset
import PriceList from "./components/PriceList";
import ContactPage from "./components/ContactPage";
import ProductCategories from "./components/ProductCategories";
import SmartphonePrices from "./components/PriceLists/SmartphonePrices";
import LaptopCategory from "./components/CategoriesCat/LaptopCategory";
import UkUsedMacBooks from "./components/PriceLists/UkUsedMacBooks";
import BrandNewMacBooks from "./components/PriceLists/BrandNewMac";
import ImacCategories from "./components/CategoriesCat/ImacCategories";
import BrandNewImac from "./components/PriceLists/BrandNewImac";
import UkUsedImac from "./components/PriceLists/UkUsedImac";
import BrandNewSmartwatches from "./components/PriceLists/BrandNewSmartwatch";
import SmartwatchesCategories from "./components/CategoriesCat/SmartwatchesCategories";
import UkUsedSmartWatches from "./components/PriceLists/UkUsedSmartwatches";  
import BrandNewIpads from "./components/PriceLists/BrandNewIpads";
import SmartphoneCategory from "./components/CategoriesCat/SmartphoneCategory";
function App() {
  const [reviews, setReviews] = useState([]); // Initialize reviews as an empty array

  // Scroll to top on route change
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll to top whenever the route changes
  }, [location.pathname]); // Triggers every time pathname changes

  // Function to handle adding new reviews
  const handleAddReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
                <PriceList />
                <ReviewForm onAddReview={handleAddReview} /> {/* Handle new reviews */}
              </>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/pricelist" element={<PriceList />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/categories" element={<ProductCategories />} />
          <Route path="/smartphoneprices" element={<SmartphonePrices />} />
          <Route path="/laptopcategory" element={<LaptopCategory />} />
          <Route path="/ukusedmacbooks" element={<UkUsedMacBooks />} />
          
          <Route path="/brandnewmacbooks" element={<BrandNewMacBooks />} />
          <Route path="/brandnewimacs" element={<BrandNewImac />} />
          <Route path="/ukusedimacs" element={<UkUsedImac />} />
          <Route path="/imaccategory" element={<ImacCategories />} />
          
          <Route path="/smartwatchescategories" element={<SmartwatchesCategories />} />
          <Route path="/brandnewsmartwatches" element={<BrandNewSmartwatches />} />
          <Route path="/ukusedsmartwatches" element={< UkUsedSmartWatches/>} />
          <Route path="/ipads" element={< BrandNewIpads/>} />
          <Route path="/smartphonescategories" element={<SmartphoneCategory />} />
          
          
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
