import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ReviewForm from "./components/ReviewForm";
import ReviewsList from "./components/ReviewsList";  // Import ReviewsList
import { Routes, Route } from "react-router-dom";

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
                <ReviewForm onAddReview={handleAddReview} /> {/* Handle new reviews */}
              </>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/leave-review" element={<ReviewForm onAddReview={handleAddReview} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
