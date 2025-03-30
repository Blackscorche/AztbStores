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

import LaptopCategory from "./components/CategoriesCat/LaptopCategory";
import UkUsedMacBooks from "./components/PriceLists/UkUsedMacBooks";
import BrandNewMacBooks from "./components/PriceLists/BrandNewMac";
import ImacCategories from "./components/CategoriesCat/ImacCategories";
import BrandNewImac from "./components/PriceLists/BrandNewImac";
import UkUsedImac from "./components/PriceLists/UkUsedImac";
import BrandNewSmartwatches from "./components/PriceLists/BrandNewSmartwatch";
import SmartwatchesCategories from "./components/CategoriesCat/SmartwatchesCategories";
import UkUsedSmartWatches from "./components/PriceLists/UkUsedSmartWatches";  
import BrandNewIpads from "./components/PriceLists/BrandNewIpads";
import SmartphoneCategory from "./components/CategoriesCat/SmartphoneCategory";
import IphoneCategory from "./components/CategoriesCat/IphoneCategory";
import BrandNewIphone from "./components/PriceLists/BrandNewIphone";
import UkUsedIphone from "./components/PriceLists/UkUsedIphone";
import BrandNewSamsungs from "./components/PriceLists/BrandNewSamsungs";
import SamsungCategories from "./components/CategoriesCat/smartphoneCat/SamsungCategories";
import SamsungInternationalWarranty from "./components/PriceLists/SamsungInternationalWarranty";
import SamsungNigeriaWarranty from "./components/PriceLists/SamsungNigeriaWarranty";
import UkUsedSamsung from "./components/PriceLists/UkUsedSamsungs";
import OppoPriceList from "./components/PriceLists/OppoPriceList";
import RedmiPriceList from "./components/PriceLists/RedmiPriceList";
import GooglePixelCategories from "./components/CategoriesCat/smartphoneCat/GooglePixelCategories";
import BrandNewGooglePixel from "./components/PriceLists/BrandNewGooglePixel";
import UkUsedGooglePixel from "./components/PriceLists/UkUsedGooglePixel";
import TecnoPriceList from "./components/PriceLists/TecnoPriceList";
import BrandNewInfinix from "./components/PriceLists/BrandNewInfinix";

import AccesoriesCat from "./components/CategoriesCat/AccesoriesCat";
import TabletCategories from "./components/CategoriesCat/TabletsCategories";
import SamsungTabCat from "./components/CategoriesCat/SamsungTabCat";
import EarbudsPriceList from "./components/PriceLists/EarbudsPricelist";
import KeyboardPricelist from "./components/PriceLists/KeyboardPricelists";
import PencilPricelist from "./components/PriceLists/PencilPricelists";
import SamsungTabPricelist from "./components/PriceLists/SamsungTabPricelist";
import XiaomiTabsPriceList from "./components/PriceLists/XiaomiTabsPricelists";
import InfinixTabPriceList from "./components/PriceLists/InfinixTabPricelist";

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
          <Route path="/pricelist" element={<ProductCategories />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/categories" element={<ProductCategories />} />

          <Route path="/laptopcategory" element={<LaptopCategory />} />
          <Route path="/ukusedmacbooks" element={<UkUsedMacBooks />} />
          <Route path="/brandnewmacbooks" element={<BrandNewMacBooks />} />
          <Route path="/brandnewimacs" element={<BrandNewImac />} />
          <Route path="/ukusedimacs" element={<UkUsedImac />} />
          <Route path="/imaccategory" element={<ImacCategories />} />
          <Route path="/smartwatchescategories" element={<SmartwatchesCategories />} />
          <Route path="/brandnewsmartwatches" element={<BrandNewSmartwatches />} />
          <Route path="/ukusedsmartwatches" element={< UkUsedSmartWatches/>} />
          <Route path="/appletablets" element={< BrandNewIpads/>} />
          <Route path="/smartphonescategories" element={<SmartphoneCategory />} />
          
          <Route path="/iphonecategories" element={<IphoneCategory />} />

          <Route path="/brandnewiphones" element={<BrandNewIphone />} />
          <Route path="/ukusediphones" element={<UkUsedIphone />} />

          <Route path="/brandnewsamsungs" element={<BrandNewSamsungs />} />

          <Route path="/samsungcategories" element={<SamsungCategories />} />
          <Route path="/samsungnigeriawarranty" element={<SamsungNigeriaWarranty/>} />
          <Route path="/samsunginternationalwarranty" element={<SamsungInternationalWarranty />} />

          <Route path="/ukusedsamsung" element={<UkUsedSamsung />} />

          <Route path="/oppo" element={<OppoPriceList/>} />
          <Route path="/redmi" element={<RedmiPriceList />} />
          <Route path="/googlepixel" element={<GooglePixelCategories />} />
          <Route path="/brandnewgooglepixel" element={<BrandNewGooglePixel />} />
          <Route path="/ukusedgooglepixel" element={<UkUsedGooglePixel />} />  

          <Route path="/tecno" element={<TecnoPriceList />} />  
          <Route path="/infinix" element={<BrandNewInfinix />} />
          <Route path="/earbuds" element={<EarbudsPriceList />} />

          <Route path="/accessories" element={<AccesoriesCat />} />

          <Route path="/tablets" element={<TabletCategories/>} />
          <Route path="/samsungtabs" element=
          {<SamsungTabPricelist />} />

          <Route path="/xiaomitabs" element={<XiaomiTabsPriceList />} />

          <Route path="/infinixtablets" element={<InfinixTabPriceList />} />

          <Route path="/keyboard" element={<KeyboardPricelist />} />

          <Route path="/pencil" element={<PencilPricelist />} />
          
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
