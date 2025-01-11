import React, { useState, useEffect } from "react";

const Interests = () => {
  const [data, setData] = useState(null);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/Data/interest.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((err) => setError(err.message));
  }, []);

  const toggleInterest = (interestId) => {
    if (selectedInterests.includes(interestId)) {
      setSelectedInterests((prev) => prev.filter((id) => id !== interestId));
    } else {
      setSelectedInterests((prev) => [...prev, interestId]);
    }
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {data.categories.map((category) => (
        <div key={category.id} className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {category.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.interests.map((interest) => (
              <div
                key={interest.id}
                className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                  selectedInterests.includes(interest.id)
                    ? "bg-blue-100 border-blue-500"
                    : "bg-white border-gray-300"
                }`}
                onClick={() => toggleInterest(interest.id)}
              >
                <div className="flex items-center space-x-4">
                  <span className="material-icons text-lg text-blue-500">
                    {interest.icon}
                  </span>
                  <span className="text-gray-700 font-medium">
                    {interest.name}
                  </span>
                </div>
                {selectedInterests.includes(interest.id) && (
                  <span className="material-icons text-green-500">check</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-6">
        <h3 className="text-xl font-bold">Selected Interests:</h3>
        <ul className="list-disc pl-6">
          {selectedInterests.map((interestId) => {
            const interest = data.categories
              .flatMap((cat) => cat.interests)
              .find((i) => i.id === interestId);
            return <li key={interestId}>{interest.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Interests;
