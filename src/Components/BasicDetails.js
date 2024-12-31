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
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 ">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg w-80 text-center">
        <h1 className="text-2xl font-bold text-yellow-300 mb-4">Basic Details</h1>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="input-style"
          value={details.fullName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="input-style"
          value={details.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="input-style"
          value={details.email}
          onChange={handleInputChange}
        />
        <select
          name="gender"
          className="input-style mb-3 mr-80"
          value={details.gender}
          onChange={handleInputChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="date"
          name="dob"
          className="input-style"
          value={details.dob}
          onChange={handleInputChange}
        />
        <div className="flex flex-col items-center mt-9">
          <button onClick={handleContinue} className="btn-primary">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
