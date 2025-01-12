import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  // Fetch data from the public folder
  useEffect(() => {
    fetch("/Data/interest.json")
      .then((response) => response.json())
      .then((data) => setData(data.data.results)) // Set results as the data state
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  // Handle loading state
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
      {/* Background Gradient and Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br"
          style={{
            background: "linear-gradient(135deg,rgba(15, 15, 15, 0.97)40%,rgb(15, 15, 15) 60%)",
          }}
        ></div>
        <div className="absolute top-0 right-52 w-[350px] h-[150px] bg-[rgba(255,240,0,1)]/100  rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-60 w-[350px] h-[100px] bg-[rgba(255,240,0,1)]/100 rounded-full blur-[150px]"></div>
      </div>

      {/* Glass Effect Container */}
      <div
        className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 bg-transparent rounded-[20px] p-8 shadow-lg text-center max-w-md"
        style={{ width: "352px", height: "450px", overflowY: "auto" }}
      >
        {/* Content inside the scrollable area */}
        <div className="w-full h-full">
          {data.map((category) => (
            <div key={category.id}>
              {/* Main Card */}
              <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-start mb-4">
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-14 h-14 rounded-full mr-4" // Increased icon size for clarity
                />
                <h1 className="text-sm font-bold text-left overflow-hidden">{category.title}</h1> {/* Ensure full name is visible */}
              </div>

              {/* Interests List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-2">
                {category.interests.map((interest) => (
                  <div
                    key={interest.id}
                    className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
                  >
                    <div className="flex items-center justify-center text-center">
                      <span className={`mdi mdi-${interest.icon} text-2xl mr-3`}></span> {/* Larger icon size */}
                      <p className="text-sm font-semibold">{interest.name}</p> {/* Ensure full name is visible */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
