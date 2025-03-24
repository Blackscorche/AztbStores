import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ReviewForm from "./components/ReviewForm";
import ReviewsList from "./components/ReviewsList";  // Import ReviewsList
import { Routes, Route } from "react-router-dom";
import PriceList from "./components/PriceList";

function App() {
  const [reviews, setReviews] = useState([]); // Initialize reviews as an empty array

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
                <ReviewsList reviews={reviews} /> {/* Display reviews */}
              </>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/leave-review" element={<ReviewForm onAddReview={handleAddReview} />} />
          <Route path="/reviews" element={<ReviewsList reviews={reviews} />} /> {/* Optional separate route */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
