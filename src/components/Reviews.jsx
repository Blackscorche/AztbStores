import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase"; // Firebase imports
import { collection, getDocs, query, where } from "firebase/firestore"; // Firestore functions
import { onAuthStateChanged } from "firebase/auth";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [userReview, setUserReview] = useState(null); // Track logged-in user's review
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [user, setUser] = useState(null); // Track auth state

  useEffect(() => {
    const fetchUser = () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    };

    fetchUser();
  }, []);

  // Fetch all reviews and the logged-in user's review
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const snapshot = await getDocs(collection(db, "reviews"));
        const allReviews = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Filter the user's review if they are logged in
        if (user) {
          const userSpecificQuery = query(
            collection(db, "reviews"),
            where("email", "==", user.email) // Assuming reviews have an "email" field
          );
          const userSnapshot = await getDocs(userSpecificQuery);
          const userReviewData = userSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))[0];

          setUserReview(userReviewData);
        }

        setReviews(allReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [user]); // Refetch reviews when user state changes

  const handleViewMore = () => {
    setVisibleReviews((prevVisible) => prevVisible + 3);
  };

  return (
    <section id="reviews" className="flex flex-col items-center min-h-screen bg-blue-50 mt-10">
      <h3 className="text-blue-500 font-bold text-3xl mb-6">Customer Reviews</h3>

      {/* Display the logged-in user's review first */}
      {userReview && (
        <div className="bg-green-50 shadow-lg rounded-2xl p-6 mb-6 w-full">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Your Review</h4>
          <p className="text-gray-600">{userReview.review}</p>
          <p className="text-yellow-400">
            {"★".repeat(userReview.rating || 0)}{" "}
            {"☆".repeat(5 - (userReview.rating || 0))}
          </p>
        </div>
      )}

      {/* Display other reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full">
        {reviews.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="bg-white shadow-lg rounded-2xl p-6 w-full">
            <div className="flex items-center mb-4">
              <img
                src={review.avatar || `https://via.placeholder.com/100?text=${review.name?.charAt(0)}`}
                alt={review.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="text-xl font-bold text-gray-800">{review.name}</h4>
                <p className="text-yellow-400">
                  {"★".repeat(review.rating || 0)}{" "}
                  {"☆".repeat(5 - (review.rating || 0))}
                </p>
              </div>
            </div>
            <p className="text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>

      {visibleReviews < reviews.length && (
        <button
          onClick={handleViewMore}
          className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          View More Reviews
        </button>
      )}
    </section>
  );
}

export default Reviews;
