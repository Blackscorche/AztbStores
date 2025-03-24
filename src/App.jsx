import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ReviewForm from "./components/ReviewForm";
import ReviewsList from "./components/Reviews";
import { Routes, Route } from "react-router-dom";

function App() {
  const [reviews, setReviews] = useState([]); // State to hold reviews

  // Function to add a new review (passed as prop)
  const handleAddReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products />
                <ReviewsList reviews={reviews} /> {/* Pass reviews as prop */}
                <ReviewForm />
              </>
            }
          />

          {/* Products Route */}
          <Route path="/products" element={<Products />} />

          {/* Leave Review Route */}
          <Route
            path="/leave-review"
            element={<ReviewForm onAddReview={handleAddReview} />} // Pass function to handle new reviews
          />

          <Route
            path="/reviews"
            element={<ReviewsList/>} // Pass function to handle new reviews
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
