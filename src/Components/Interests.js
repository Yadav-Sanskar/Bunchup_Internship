import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState([]);
  const [expanded, setExpanded] = useState(false); // To control the "See More" functionality

  // Fetch data from the public folder
  useEffect(() => {
    fetch("/Data/interest.json")
      .then((response) => response.json())
      .then((data) => setData(data.data.results)) // Set results as the data state
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  // Toggle selected interests 
  const toggleSelect = (interest) => {
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  // Handle loading state
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
      {/* Full-Screen Glass Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br"
          style={{
            background:
              "linear-gradient(135deg, rgb(15, 15, 15) 40%, rgb(15, 15, 15) 60%)",
          }}
        ></div>

        {/* Subtle Yellow Glow */}
        <div className="absolute top-0 left-52 w-[350px] h-[150px] bg-[rgba(255,240,0,1)]/100 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-60 w-[350px] h-[100px] bg-[rgba(255,240,0,1)]/100 rounded-full blur-[150px]"></div>
      </div>

      {/* Glass Box */}
      <div
        className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-[20px] p-6 shadow-lg"
        style={{ width: "352px", height: "600px" }}
      >
        {/* Header */}
        <h1 className="text-4xl font-bold mb-1 bg-gradient-to-b from-[rgba(255,240,0,1)] to-[rgba(253,246,132,1)] bg-clip-text text-transparent text-center">
          Your Interests
        </h1>
        <p className="text-[rgba(255,255,255,1)] text-center mb-4 mt-3 text-[18px]">
          Choose at least 5 interests
        </p>

        {/* Selected Counter */}
        <div className="relative z-10 border border-white/10 rounded-[10px] shadow-lg">
          <div className="bg-[rgba(255,255,255,0.07)] text-white text-center py-2 mb-4 mt-0 rounded-t-[10px] rounded-b-none backdrop-blur-sm">
            <span style={{ color: "rgba(255, 240, 0, 1)" }}>
              {selected.length}
            </span>{" "}
            Selected
          </div>

          {/* Scrollable Content */}
          <div
            className="overflow-y-scroll h-[315px] scrollbar-hidden pr-2 pl-2"
            style={{
              scrollbarWidth: "none", // Hide scrollbar in Firefox
            }}
          >
            {data.map((category) => (
              <div key={category.id} className="mb-6">
                {/* Category Title */}
                <h2 className="text-gray-300 font-semibold text-[20px] mb-3">
                  {category.title}
                </h2>

                {/* Interests Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.interests.slice(0, expanded ? category.interests.length : 6).map((interest) => (
                    <div
                      key={interest.id}
                      className={`flex items-center justify-center p-2 rounded-full text-sm font-semibold cursor-pointer border-[1px] border-[rgba(255,255,255,0.1)]  ${
                        selected.includes(interest.name)
                          ? "bg-[rgba(255,240,0,1)] text-black"
                          : "bg-transparent text-gray-300 hover:bg-[rgba(255, 255, 255, 0.1)] hover:text-gray-100"
                      }`}
                      onClick={() => toggleSelect(interest.name)}
                    >
                      <span
                        className={`mdi mdi-${interest.icon} text-lg ${
                          selected.includes(interest.name)
                            ? "text-black"
                            : "text-white"
                        } mr-2`}
                      ></span>
                      {interest.name}
                    </div>
                  ))}
                </div>

                {/* See More */}
                {!expanded && category.interests.length > 6 && (
                  <p
                    className="text-[rgba(243,220,12,1)] text-xs mt-2 cursor-pointer hover:underline"
                    onClick={() => setExpanded(true)}
                  >
                    See more
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <button
          className="bg-gradient-to-r from-[rgba(255,240,0,1)] to-red-300 text-black text-xl py-2 px-4 transition w-full rounded-full border-black mt-6"
          disabled={selected.length < 5}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default App;
