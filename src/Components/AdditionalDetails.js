import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import collegesData from "../Data/colleges.json"; // Update this path to your actual file

const AdditionalDetails = () => {
  const [details, setDetails] = useState({
    bio: "",
    college: "",
    smoke: false,
    drink: false,
    weed: false,
  }); // Updated state to include smoke, drink, and weed
  const [filteredColleges, setFilteredColleges] = useState(collegesData.data.results); // Keep all colleges initially
  const [searchTerm, setSearchTerm] = useState(""); // Track the search term for filtering
  const navigate = useNavigate();

  const handleToggle = (field) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [field]: !prevDetails[field],
    }));
  };

  // Handle changes to form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDetails({
      ...details,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox values
    });
  };

  // Handle changes in the college search box
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter colleges based on the search term
    const filtered = collegesData.data.results.filter((college) =>
      college.collegeName.toLowerCase().includes(value.toLowerCase()) // Case-insensitive search
    );

    setFilteredColleges(filtered); // Update the filtered colleges list
  };

  // Select a college from the filtered list
  const handleSelectCollege = (collegeName) => {
    setDetails({ ...details, college: collegeName }); // Set the selected college
    setSearchTerm(collegeName); // Update the search term with the selected college
    setFilteredColleges([]); // Clear the filtered list after selection (this hides the suggestions)
  };

  // Handle continue button click (validation can be added here)
  const handleContinue = () => {
    if (details.college && details.bio) {
      // If college is selected and bio is filled, proceed with the navigation
      navigate("/add-profile-picture", { state: { ...details } });
    } else {
      // If no college or bio is selected, show an alert or handle validation
      alert("Please fill in the bio and select a college");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black ">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg w-80 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Tell us more about you</h1>

        <div className="relative mt-4 ">
        <div className="mr-auto flex mb-3">
        <label htmlFor="bio" className="absolute text-gray-400 text-xl top-2 ">Bio</label>
        </div>
        <input
  type="text"
  name="bio"
  placeholder="Write about yourself"
  value={details.bio}
  onChange={handleChange}
  className="w-full border-b-2 border-gray-300 bg-transparent my-0 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-0 border-t-0 border-l-0 border-r-0  mt-8"
/>

            
            {/* Instruction below the textarea */}
            <p className="text-gray-400 text-sm mt-0 mr-24">Maximum 50 Characters </p>
          </div>





  

          
<div className="relative mt-4">
<p className="text-white text-xl flex">Select College</p>
  <input
    type="text"
    name="college"
    placeholder="🔍  Search for a college"
    value={searchTerm}
    onChange={handleSearchChange}
    className="input-style w-full border-b-2 border-gray-300 bg-transparent py-2 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-0 rounded-full "
  />

  {/* Show filtered college suggestions only if there are results */}
  {searchTerm && filteredColleges.length > 0 && (
    <div className="absolute w-full bg-white border border-gray-300 mt-1 rounded-lg max-h-60 overflow-auto">
      {filteredColleges.map((college) => (
        <div
          key={college.id}
          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
          onClick={() => handleSelectCollege(college.collegeName)} // Handle selection
        >
          {college.collegeName}
        </div>
      ))}
    </div>
  )}
 <p className="text-gray-400 text-xs block">
  Select your college to know what's happening at your college
</p>


</div>



  <div className="flex  mt-5 ">
  <input
    type="checkbox"
    id="not-in-college"
    
    className="mr-60" 
    // checked={details.college === "Not in college"}
    // onChange={(e) => {
    //   setDetails({
    //     ...details,
    //     college: e.target.checked ? "Not in college" : "",
    //   });
    // }}
  />
  
</div>





        <div className="mt-7">
          <h2 className="text-white mb-2 flex">Select if you...</h2>
          <div className="flex justify-between items-center space-x-4">
            <div
              className={`flex flex-col items-center space-y-2 cursor-pointer  ${
                details.smoke ? "bg-gray-300 p-2 rounded-lg" : ""
              }`}
              onClick={() => handleToggle("smoke")}
            >
              <img src={require('../Image/Smoking.png')} alt="Smoke" className="h-12 w-12" />
              <span className="text-white">Smoke</span>
            </div>

            <div
              className={`flex flex-col items-center space-y-2 cursor-pointer ${
                details.drink ? "bg-yellow-300 p-2 rounded-lg" : ""
              }`}
              onClick={() => handleToggle("drink")}
            >
              <img src={require('../Image/Wine Bar.png')} alt="Drink" className="h-12 w-12" />
              <span className="text-white">Drink</span>
            </div>

            <div
              className={`flex flex-col items-center space-y-2 cursor-pointer ${
                details.weed ? "bg-yellow-300 p-2 rounded-lg" : ""
              }`}
              onClick={() => handleToggle("weed")}
            >
              <img src={require('../Image/Cannabis.png')} alt="Weed" className="h-12 w-12" />
              <span className="text-white">Weed</span>
            </div>
          </div>
        </div>

        <button onClick={handleContinue} className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-bold py-2 px-4 transition w-full rounded-full border mt-3">
          Continue
        </button>
      </div>
    </div>
  );
};

export default AdditionalDetails;
