import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import collegesData from "../Data/colleges.json";
import SearchIcon from './SearchIcon';

const AdditionalDetails = () => {
  const [details, setDetails] = useState({
    bio: "",
    college: "",
    smoke: false,
    drink: false,
    weed: false,
  });
  const [filteredColleges, setFilteredColleges] = useState(collegesData.data.results);
  const [searchTerm, setSearchTerm] = useState("");
  const [isNotInCollege, setIsNotInCollege] = useState(false); // Track the checkbox state
  const navigate = useNavigate();

  const handleToggle = (field) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [field]: !prevDetails[field],
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDetails({
      ...details,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = collegesData.data.results.filter((college) =>
      college.collegeName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredColleges(filtered);
  };

  const handleSelectCollege = (collegeName) => {
    setDetails({ ...details, college: collegeName });
    setSearchTerm(collegeName);
    setFilteredColleges([]);
  };

  const handleContinue = () => {
    navigate("/add-profile-picture", { state: { ...details } });
  };
  

  const handleNotInCollegeChange = (e) => {
    setIsNotInCollege(e.target.checked); // Toggle checkbox state
    if (e.target.checked) {
      setDetails({ ...details, college: "" }); // Clear college field when 'Not in college' is checked
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br"
          style={{
            background: "linear-gradient(135deg,rgba(15, 15, 15, 0.97)40%,rgb(15, 15, 15) 60%)",
          }}
        ></div>
        <div className="absolute top-0 left-52 w-[300px] h-[150px] bg-[rgba(255,240,0,1)]/100  rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-60 w-[350px] h-[100px] bg-[rgba(255,240,0,1)]/100 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 bg-transparent rounded-[20px] p-8 shadow-lg text-center max-w-md" style={{ width: "352px" }}>
        <h1 className="text-4xl font-bold bg-gradient-to-b from-[rgba(255,240,0,1)] to-[rgba(253,246,132,1)] bg-clip-text text-transparent ">Tell us more about you</h1>
        
        <div className="relative mt-4">
          <div className="mr-auto flex mb-3">
            <label htmlFor="bio" className="absolute text-white text-xl top-2 font-bold ">Bio</label>
          </div>
          <input
            type="text"
            name="bio"
            placeholder="Write about yourself"
            value={details.bio}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 bg-transparent my-0 text-sm text-white placeholder-gray focus:outline-none focus:border-white focus:ring-0 border-t-0 border-l-0 border-r-0 mt-8 py-1"
          />
          <div className="flex">
            <p className="text-yellow-200 text-xs">Maximum 50 Characters</p>
          </div>
        </div>

        {/* Conditionally Render College Selection Only */}
        {!isNotInCollege && (
  <div className="relative mt-4">
    <p className="text-white text-xl flex mb-1 font-bold">Select College</p>

    <div className="relative">
      {/* Check if a college is selected */}
      {details.college ? (
        // Show the selected college name instead of the search box
        <div className="flex items-center justify-between bg-[rgba(255,240,0,1)] text-black font-bold  rounded-md">
          <span className="text-sm">{details.college}</span>
          <button
            onClick={() => {
              setDetails({ ...details, college: "" }); // Reset the selected college
              setSearchTerm(""); // Clear the search term
            }}
            className="text-2xl font-bold text-black mr-1"
          >
            &#10005; {/* Cross Icon */}
          </button>
        </div>
      ) : (
        // Show the search box when no college is selected
        <>
          <SearchIcon
            size={20}
            color="white"
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <input
            type="text"
            name="college"
            placeholder="Search for a college"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-12 py-2 text-3sm placeholder-white focus:outline-none focus:ring-0 rounded-full h-10 bg-[rgba(255,255,255,0.1)] text-white"
          />
          {searchTerm && filteredColleges.length > 0 && (
            <div className="absolute w-full max-h-60 bg-[rgba(44,44,39,1)] border border-gray-600 mt-1 rounded-lg shadow-lg overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent z-10 scrollbar-thumb-[40px]">
              {filteredColleges.slice(0, 10).map((college) => (
                <div
                  key={college.id} // Unique key for React (internal use, not displayed)
                  className="px-4 py-3 text-sm text-gray-200 bg-black-300 cursor-pointer hover:bg-[rgba(255,240,0,1)] hover:text-black transition-all duration-150 rounded-md mx-2"
                  onClick={() => handleSelectCollege(college.collegeName)}
                >
                  <p className="text-wrap">{college.collegeName}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>

    <p className="text-gray-400 text-xs block mb-0 mt-1">
      Select your college to know what's happening <br />
    </p>
    <span className="text-gray-400 text-xs mr-40 mt-0">at your college</span>
  </div>
)}



        {/* Checkbox to indicate "Not in college" */}
        <div className="flex mt-5 gap-2 items-center">
          <div>
            <input
              type="checkbox"
              id="not-in-college"
              className="peer hidden"
              onChange={handleNotInCollegeChange} // Toggle checkbox state
            />
            <label
              htmlFor="not-in-college"
              className="w-3 h-3 border-2 border-yellow-300 rounded-sm flex items-center justify-center cursor-pointer peer-checked:bg-[rgba(255,240,0,1)]"
            >
              <span className="hidden peer-checked:inline-block text-black font-bold">&#10003;</span>
            </label>
          </div>
          <div>
            <label htmlFor="not-in-college" className="text-white text-sm cursor-pointer">
              Not in college
            </label>
          </div>
        </div>

        {/* Smoke, Drink, Weed Options */}
        <div className="mt-7">
          <h2 className="text-white mb-2 flex text-lg font-bold">Select if you.....</h2>
          <div className="flex justify-between items-center mr-24">
            <div
              className={`flex flex-col items-center cursor-pointer p-2 rounded-lg border-[0.5px] ${details.smoke ? "border-[rgba(255,240,0,1)]" : "border-transparent"}`}
              onClick={() => handleToggle("smoke")}
            >
              <img src={require("../Image/Smoking.png")} alt="Smoke" className="h-8 w-8" />
              <span className="text-white text-sm">Smoke</span>
            </div>

            <div
              className={`flex flex-col items-center cursor-pointer p-2 rounded-lg border-[0.5px] ${details.drink ? "border-[rgba(255,240,0,1)]" : "border-transparent"}`}
              onClick={() => handleToggle("drink")}
            >
              <img src={require("../Image/Wine Bar.png")} alt="Drink" className="h-8 w-8" />
              <span className="text-white text-sm">Drink</span>
            </div>

            <div
              className={`flex flex-col items-center cursor-pointer p-2 rounded-lg border-[0.5px] ${details.weed ? "border-[rgba(255,240,0,1)]" : "border-transparent"}`}
              onClick={() => handleToggle("weed")}
            >
              <img src={require("../Image/Cannabis.png")} alt="Weed" className="h-8 w-8" />
              <span className="text-white text-sm">Weed</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="text-black font-bold py-2 px-4 transition w-full rounded-full mt-10 mb-3"
          style={{
            background: `
              radial-gradient(92.58% 3558.8% at 7.42% 100%, #FFF000 0%, #FF8A00 100%)
            `,
            backgroundBlendMode: "overlay",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AdditionalDetails;
