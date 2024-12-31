import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Interests = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const navigate = useNavigate();

  const interests = ["Music", "Sports", "Technology", "Art", "Travel", "Food"];

  const handleToggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleContinue = () => {
    // Add validation logic if needed
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black ">
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg w-80 text-center">
      <h1 className="text-2xl font-bold text-yellow-400 mb-4">Select Interests</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {interests.map((interest) => (
          <button
            key={interest}
            onClick={() => handleToggleInterest(interest)}
            className={`px-4 py-2 rounded-full ${
              selectedInterests.includes(interest)
                ? "bg-yellow-400 text-gray-800"
                : "bg-gray-700 text-white"
            }`}
          >
            {interest}
          </button>
        ))}
      </div>
      <button onClick={handleContinue} className="btn-primary w-full mt-4">
        Continue
      </button>
    </div>
    </div>
  );
};

export default Interests;
