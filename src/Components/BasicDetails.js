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
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
      {/* Full-Screen Glass Background */}
      <div className="absolute inset-0 ">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br"
          style={{
            background: "linear-gradient(135deg,rgba(15, 15, 15, 0.97)40%,rgb(15, 15, 15) 60%)",
          }}
        ></div>

        {/* Subtle Yellow Glow */}
        <div className="absolute top-0 right-52 w-[350px] h-[150px] bg-[rgba(255,240,0,1)]/100  rounded-full blur-[150px]"></div>

        <div className="absolute bottom-0 left-60 w-[350px] h-[100px] bg-[rgba(255,240,0,1)]/100 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 bg-transparent rounded-[20px] p-8 shadow-lg text-center max-w-md" style={{ width: "352px" }}>
        <h1 className="text-4xl font-bold text-[rgba(255,240,0,1)] mb-14 mt-7">Basic Details</h1>

        {/* Full Name Input */}
        <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full border-b border-gray-300 text-white bg-transparent focus:outline-none  mb-7 placeholder-white mb-7"
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
          className="w-full border-b border-gray-300 text-white bg-transparent focus:outline-none  placeholder-white  mt-3"
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
          className="w-full border-b border-gray-300 text-white bg-transparent focus:outline-none  placeholder-white  mb-5 mt-9"
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
    className=" border-b border-gray-300 bg-transparent py-1 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-0 ml-14  "
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


  

  
  


        

<div className="relative mt-6 flex items-center">
  {/* Placeholder text styled like a label */}
  {!details.dob && (
    <div className="absolute text-white left-0 top-1 pointer-events-none">
      Date of Birth
    </div>
  )}

  {/* Date Input */}
  <input
    type="date"
    name="dob"
    className="w-32 border-b border-gray-300 bg-transparent py-1 text-lg text-white appearance-none focus:outline-none focus:border-white focus:ring-0"
    value={details.dob}
    onChange={handleInputChange}
  />

  {/* Calendar Icon */}
  <button
    className="ml-3 text-white focus:outline-none"
    onClick={() => {
      // Focus the input field on button click
      document.querySelector('input[name="dob"]').focus();
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10m-8 4h6M3 7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
      />
    </svg>
  </button>
</div>




        {/* Continue Button */}
        <div className="flex flex-col items-center mt-12">
          <button onClick={handleContinue} className="bg-gradient-to-r from-[rgba(255,240,0,1)] to-red-300 text-black text-xl py-2 px-4 transition w-full rounded-full  border-black  mt-3 mb-11">
            Continue
          </button> 
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
