import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import collegesData from "../Data/colleges.json";

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
    if (details.college && details.bio) {
      navigate("/add-profile-picture", { state: { ...details } });
    } else {
      alert("Please fill in the bio and select a college");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg w-80 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4 ">Tell us more about you</h1>

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
            className="w-full border-b-2 border-gray-300 bg-transparent my-0 text-sm text-white placeholder-white focus:outline-none focus:border-white focus:ring-0 border-t-0 border-l-0 border-r-0 mt-8 py-1 "
          />
          <p className="text-white text-sm mt-0 mr-24">Maximum 50 Characters</p>
        </div>

        <div className="relative mt-4">
          <p className="text-white text-xl flex mb-1 font-bold ">Select College</p>
          <input
            type="text"
            name="college"
            placeholder="🔍  Search for a college"
            value={searchTerm}
            onChange={handleSearchChange}
            className="input-style w-full border-b-2 border-gray-300 bg-transparent py-2 text-3sm text-white placeholder-white focus:outline-none focus:border-white focus:ring-0 rounded-full h-10"
          />
          {searchTerm && filteredColleges.length > 0 && (
            <div className="absolute w-full bg-white border border-gray-300 mt-1 rounded-lg max-h-45 overflow-auto">
              {filteredColleges.map((college) => (
                <div
                  key={college.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSelectCollege(college.collegeName)}
                >
                  {college.collegeName}
                </div>
              ))}
            </div>
          )}
          <p className="text-gray-400 text-xs block mb-0  ">
            Select your college to know what's happening <br />
            
          </p>
          <span className="text-gray-400 text-xs mr-40  ">at your college</span>
        </div>



        <div className="flex mt-5 gap-2 items-center">
          <div>
          <input type="checkbox" id="not-in-college" className="" />
          </div>
           <div className=" ">
            <h1 className="text-white text-sm">Not in college</h1>
          </div>
        </div>







        <div className="mt-7">
  <h2 className="text-white mb-2 flex text-lg font-bold ">Select if you.....</h2>
  <div className="flex justify-between items-center mr-24"> {/* Adjust spacing using gap */}
    <div
      className={`flex flex-col items-center cursor-pointer ${details.smoke ? "bg-gray-300 p-2 rounded-lg" : ""}`}
      onClick={() => handleToggle("smoke")}
    >
      <img src={require("../Image/Smoking.png")} alt="Smoke" className="h-10 w-8" />
      <span className="text-white text-sm">Smoke</span>
    </div>

    <div
      className={`flex flex-col items-center cursor-pointer   ${details.drink ? "bg-yellow-300 p-2 rounded-lg " : ""}`}
      onClick={() => handleToggle("drink")}
    >
      <img src={require("../Image/Wine Bar.png")} alt="Drink" className="h-10 w-8" />
      <span className="text-white text-sm">Drink</span>
    </div>

    <div
      className={`flex flex-col items-center cursor-pointer ${details.weed ? "bg-yellow-300 p-2 rounded-lg" : ""}`}
      onClick={() => handleToggle("weed")}
    >
      <img src={require("../Image/Cannabis.png")} alt="Weed" className="h-10 w-8 " />
      <span className="text-white text-sm">Weed</span>
    </div>
  </div>
</div>



        <button
          onClick={handleContinue}
          className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-bold py-2 px-4 transition w-full rounded-full border mt-10 mb-3"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AdditionalDetails;
