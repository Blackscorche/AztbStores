import React, { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore"; // Firestore functions
import { auth, provider, db } from "../firebase"; // Importing db
import { AlertCircle, LogOut, UserPlus } from "lucide-react";

function ReviewForm({ onAddReview }) {
  const [user, setUser] = useState(null);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(3); // Limit initially shown reviews

  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
    fetchReviews(); // Fetch reviews on component mount
  }, []);

  const fetchReviews = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      const reviewsData = querySnapshot.docs.map((doc) => doc.data());
      const sortedReviews = reviewsData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Newest first
      setReviews(sortedReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please log in to leave a review.");
      return;
    }

    if (review.trim() === "" || rating === 0) {
      alert("Please fill in the review and rating.");
      return;
    }

    try {
      const newReview = {
        userName: user.displayName || "Anonymous",
        userPhoto: user.photoURL || "",
        review: review,
        rating: rating,
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, "reviews"), newReview);

      setReview("");
      setRating(0);
      setSuccessMessage("Review submitted successfully!");
      onAddReview(newReview);
      setReviews((prevReviews) => [newReview, ...prevReviews]);

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const handleViewMore = () => {
    setVisibleReviews((prevVisible) => prevVisible + 3); // Show 3 more reviews each time
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white-50 mt-10">
      {!user ? (
        <div className="bg-white rounded-xl p-6 shadow-md text-center max-w-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Create or Log in to Your Account</h3>
          <p className="mb-4 text-gray-600">You need to log in to leave a review and share your feedback!</p>
          <button
            onClick={handleLogin}
            disabled={loading}
            className="flex items-center justify-center bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-transform duration-300"
          >
            {loading ? "Logging in..." : <><UserPlus className="mr-2" /> Log in with Google</>}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-lg border border-blue-200 mb-6">
          <div className="flex items-center justify-between bg-green-100 text-green-800 p-3 rounded-lg mb-4">
            <span>Welcome, {user.displayName}!</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:ring-4 focus:ring-red-300"
            >
              <LogOut className="inline-block mr-1" /> Logout
            </button>
          </div>

          <div className="mb-4">
            <label className="text-sm font-semibold mb-2 block">Rating:</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full h-28 border border-blue-200 rounded-lg p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
            placeholder="Share your thoughts..."
            required
          />

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform duration-300"
          >
            Submit Review
          </button>

          {successMessage && <p className="mt-3 text-green-600 text-center font-semibold">{successMessage}</p>}
        </form>
      )}

      <div className="mt-8 max-w-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Reviews</h3>
        {reviews.slice(0, visibleReviews).map((rev, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg mb-4 flex items-center">
            <img
              src={rev.userPhoto || `https://ui-avatars.com/api/?name=${(rev.userName && rev.userName[0]) || 'U'}`}
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h4 className="font-semibold">{rev.userName || "Anonymous User"}</h4>
              <p className="text-gray-600">{rev.review || "No review provided"}</p>
              <div className="text-yellow-500">
                {"★".repeat(rev.rating || 0)} <span className="text-gray-400">{"★".repeat(5 - (rev.rating || 0))}</span>
              </div>
            </div>
          </div>
        ))}
        {visibleReviews < reviews.length && (
          <div className="flex justify-center mt-4 mb-3">
            <button onClick={handleViewMore} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
              View More
            </button>
          </div>
        )}


      </div>
    </div>
  );
}

export default ReviewForm;
