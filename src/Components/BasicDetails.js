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
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-black ">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg w-80 text-center">
        <h1 className="text-2xl font-bold text-yellow-300 mb-4">Basic Details</h1>

        <input
  type="text"
  name="fullName"
  placeholder="Full Name"
  class="w-full border-b border-gray-300 bg-transparent py-2 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-0"
  value={details.fullName}
  onChange={handleInputChange}
  style={{ borderTopWidth: '0', borderLeftWidth: '0', borderRightWidth: '0', borderBottomWidth: '1px' }}
/>
<input
  type="text"
  name="username"
  placeholder="Username"
  class="w-full border-b border-gray-300 bg-transparent py-2 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-0"
  value={details.username}
  onChange={handleInputChange}
  style={{ borderTopWidth: '0', borderLeftWidth: '0', borderRightWidth: '0', borderBottomWidth: '1px' }}
/>
<input
  type="email"
  name="email"
  placeholder="Email Address"
  class="w-full border-b border-gray-300 bg-transparent py-2 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-0"
  value={details.email}
  onChange={handleInputChange}
  style={{ borderTopWidth: '0', borderLeftWidth: '0', borderRightWidth: '0', borderBottomWidth: '1px' }}
/>
<select
  name="gender"
  class="w-full border-b border-gray-300 bg-transparent py-2 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-0"
  value={details.gender}
  onChange={handleInputChange}
  style={{ borderTopWidth: '0', borderLeftWidth: '0', borderRightWidth: '0', borderBottomWidth: '1px' }}
>
  <option value="" class="text-gray-500 bg-transparent">Select Gender</option>
  <option value="Male" class="text-black bg-transparent">Male</option>
  <option value="Female" class="text-black bg-transparent">Female</option>
  <option value="Other" class="text-black bg-transparent">Other</option>
</select>

<input
  type="date"
  name="dob"
  
  class="w-full border-b border-gray-300 bg-transparent py-2 text-lg text-white focus:outline-none focus:border-white focus:ring-0"
  value={details.dob}
  onChange={handleInputChange}
  style={{ borderTopWidth: '0', borderLeftWidth: '0', borderRightWidth: '0', borderBottomWidth: '1px' }}
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
