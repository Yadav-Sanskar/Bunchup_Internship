import React, { useState } from "react";
import interestData from "../Data/interest.json"; // Ensure this path is correct

const Interests = () => {
  const interests = interestData.data.results;

  // Group interests by categories based on the icon or some other attribute you want (e.g., gaming, sports)
  const categories = {
    "Sports & Gaming": ["Football", "Cricket", "Chess", "Boxing", "Bowling", "E-Sports", "Basketball", "Baseball", "Badminton", "Athletics"],
    "Skill Building": ["Hackathons", "Writing", "Design", "Poetry", "Content creation"],
    "Nature & Sceneries": ["Sunrise", "Sunset", "Staycations", "Spa Weekends", "Hiking Trips", "Fishing Trips", "Exploring new cities", "Camping", "Beaches", "Road Trips", "Trekking"],
    "Music": ["Song Premier", "Karaoke", "Concert", "Live music"],
    "Movies": ["Sci-fi", "Comedy", "Horror", "Action", "Romance", "Crime/Thriller"],
    "Arts": ["Martial Arts", "Gym", "Cycling", "Aerobic", "Meditation", "Gymnastics", "Running", "Yoga"],
    "Clubbing": ["College fest", "Amusements park", "Open mike", "Escape room", "Bounce", "Standup comedy", "DJ night", "Launch events", "Pubs", "Bar", "Club", "Arcade cafe", "Dog cafe", "Cat cafe", "Tea mates", "Coffee mates"]
  };

  // State to hold selected category
  const [selectedCategory, setSelectedCategory] = useState("Sports & Gaming");

  // Filtered interests based on category
  const filteredInterests = interests.filter(interest => categories[selectedCategory].includes(interest.name));

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Select Your Interests</h1>
      <div className="flex justify-center mb-6">
        {/* Category Selector */}
        <div className="space-x-4">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">{selectedCategory}</h2>
        <div className="grid grid-cols-2 gap-4">
          {filteredInterests.map((interest, index) => (
            <div key={index} className="flex items-center space-x-2">
              <i className={`material-icons text-2xl`}>{interest.icon}</i>
              <label htmlFor={interest.name} className="text-lg">{interest.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interests;
