// ReviewsList.js
import React from "react";

function ReviewsList({ reviews }) {
  return (
    <div className="mt-8 max-w-lg">
      <h3 className="text-2xl font-bold text-blue-900 mb-4">Reviews</h3>
      {reviews.map((rev, index) => (
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
              {"★".repeat(rev.rating || 0)}{" "}
              <span className="text-gray-400">{"★".repeat(5 - (rev.rating || 0))}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewsList;
