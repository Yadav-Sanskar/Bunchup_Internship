import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BasicDetails = () => {
  const [details, setDetails] = useState({
    fullName: "",
    username: "",
    email: "",
    gender: "",
    dob: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleContinue = () => {
    // Add validation logic if needed
    navigate("/additional-details");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-black">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg w-80 text-center">
        <h1 className="text-4xl font-bold text-yellow-300 mb-14 mt-7">Basic Details</h1>

        {/* Full Name Input */}
        <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full border-b border-gray-300 bg-transparent py-0 text-lg text-white placeholder-white focus:outline-none focus:border-white focus:ring-0 mb-7"
            value={details.fullName}
            onChange={handleInputChange}
            style={{
              borderTopWidth: "0",
              borderLeftWidth: "0",
              borderRightWidth: "0",
              borderBottomWidth: "1px",
            }}
          />


        {/* Username Input */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full border-b border-gray-300 bg-transparent py-0 text-lg text-white placeholder-white focus:outline-none focus:border-white focus:ring-0  mt-3"
          value={details.username}
          onChange={handleInputChange}
          style={{
            borderTopWidth: "0",
            borderLeftWidth: "0",
            borderRightWidth: "0",
            borderBottomWidth: "1px",
          }}
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border-b border-gray-300 bg-transparent py-0 text-lg text-white placeholder-white focus:outline-none focus:border-white focus:ring-0  mb-5 mt-6"
          value={details.email}
          onChange={handleInputChange}
          style={{
            borderTopWidth: "0",
            borderLeftWidth: "0",
            borderRightWidth: "0",
            borderBottomWidth: "1px",
          }}
        />

<div className="flex items-center gap-4 mt-4">

  {/* Dynamically Update Selected Value */}
  <div
    className="p-2 py-1 border border-gray-300 rounded text-lg text-white bg-gray-800  text-center bg-transparent "
    style={{
      borderTopWidth: "0",
      borderLeftWidth: "0",
      borderRightWidth: "0",
      borderBottomWidth: "1px",
    }}
  >
    {details.gender ? `${details.gender}` :"Select Gender"}
  </div>

  {/* Gender Dropdown */}
  <select
    name="gender"
    className=" border-b border-gray-300 bg-transparent py-2 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-0 ml-8 py-1  "
    value={details.gender}
    onChange={handleInputChange}
    style={{
      borderTopWidth: "1px",
      borderLeftWidth: "1px",
      borderRightWidth: "1px",
      borderBottomWidth: "1px",
      borderRadius: "8px"
    }}
  >
    <option value="" disabled className="text-gray-500 bg-transparent ">
      Gender
    </option>
    <option value="Male" className="text-black bg-transparent">
      Male
    </option>
    <option value="Female" className="text-black bg-transparent">
      Female
    </option>
    <option value="Other" className="text-black bg-transparent">
      Other
    </option>
  </select>
</div>


  

  
  


        

<div className="relative mt-6">
  {/* Placeholder text styled like a label */}
  <div
    className={`absolute left-2 mt-2 text-white ${
      details.dob ? "hidden" : ""
    }`}
  >
    Date of Birth
  </div>

  {/* Date Input */}
  <input
    // type="date"
    name="dob"
    className="w-32 border-b border-gray-300 bg-transparent py-1 text-lg text-white focus:outline-none focus:border-white focus:ring-0 flex"
    value={details.dob}
    onChange={handleInputChange}
    style={{
      borderTopWidth: "0",
      borderLeftWidth: "0",
      borderRightWidth: "0",
      borderBottomWidth: "1px",
    }}
  />
</div>


        {/* Continue Button */}
        <div className="flex flex-col items-center mt-12">
          <button onClick={handleContinue} className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-bold py-2 px-4 transition w-full rounded-full border mt-3 mb-11">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
