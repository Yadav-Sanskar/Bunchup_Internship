import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BasicDetails = () => {
  const [details, setDetails] = useState({
    fullName: "",
    username: "",
    email: "",
    gender: "",
    dob: null,
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
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br"
          style={{
            background: "linear-gradient(135deg,rgba(15, 15, 15, 0.97)40%,rgb(15, 15, 15) 60%)",
          }}
        ></div>

        {/* Subtle Yellow Glow */}
        <div className="absolute top-0 right-52 w-[350px] h-[150px] bg-[rgba(255,240,0,1)]/100 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-60 w-[350px] h-[100px] bg-[rgba(255,240,0,1)]/100 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 bg-transparent rounded-[20px] p-8 shadow-lg text-center max-w-md" style={{ width: "352px" }}>
        <h1 className="text-4xl font-bold text-[rgba(255,240,0,1)] mb-14 mt-7">Basic Details</h1>

        {/* Full Name Input */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full border-b border-gray-300 text-white bg-transparent focus:outline-none mb-7 placeholder-white"
          value={details.fullName}
          onChange={handleInputChange}
        />

        {/* Username Input */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full border-b border-gray-300 text-white bg-transparent focus:outline-none placeholder-white mt-3"
          value={details.username}
          onChange={handleInputChange}
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border-b border-gray-300 text-white bg-transparent focus:outline-none placeholder-white mb-5 mt-9"
          value={details.email}
          onChange={handleInputChange}
        />

        {/* Gender Selection */}
        <div className="flex items-center gap-4 mt-4">
          <select
            name="gender"
            className="border-b border-gray-300 bg-transparent py-1 text-lg text-white focus:outline-none focus:border-white focus:ring-0"
            value={details.gender}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Gender
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

        {/* Date Picker */}
        <div className="relative mt-6 flex items-center">
          {!details.dob && (
            <div className="absolute text-white left-0 top-1 pointer-events-none">
              Date of Birth
            </div>
          )}
          <ReactDatePicker
            selected={details.dob}
            onChange={(date) => setDetails({ ...details, dob: date })}
            dateFormat="MM/dd/yyyy"
            placeholderText=""
            className="w-32 border-b border-gray-300 bg-transparent py-1 text-lg text-white focus:outline-none focus:border-white focus:ring-0"
          />
        </div>

        {/* Continue Button */}
        <div className="flex flex-col items-center mt-12">
          <button
            onClick={handleContinue}
            className="bg-gradient-to-r from-[rgba(255,240,0,1)] to-red-300 text-black text-xl py-2 px-4 transition w-full rounded-full border-black mt-3 mb-11"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
