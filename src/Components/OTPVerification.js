import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const OTPVerification = () => {
  const [formData, setFormData] = useState({ otp: ["", "", "", ""] }); // Define formData state
  const navigate = useNavigate();

  const handleOTPChange = (index, value) => {
    const otpArr = [...formData.otp]; // Clone the current OTP array
    otpArr[index] = value.slice(0, 1); // Allow only a single character
    setFormData({ ...formData, otp: otpArr }); // Update the state
  };

  const handleContinue = () => {
    // Combine OTP digits
    const otpValue = formData.otp.join("");
    console.log("Entered OTP:", otpValue);

    // Add OTP validation logic here
    if (otpValue.length === 4) {
      navigate("/basic-details");
    } else {
      alert("Please enter a valid 4-digit OTP.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-black">
      <div className="bg-gradient-to-b from-gray-800 to-gray-800 text-white rounded-lg p-8 shadow-lg text-center">
        <h1 className="text-2xl font-bold text-white-400 mb-2 mt-7">
          Welcome to <span className="text-yellow-400">BunchUp</span>
        </h1>
        <h1 className="text-sm font-bold text-white mb-2">Enter the OTP sent to</h1>

        <img
          className="w-[127px] h-[94px] bg-cover mb-6 mt-20 mx-14"
          src={require("../Image/bro.png")}
          alt="Custom"
        />

<div class="flex gap-4">
    <input
      class="w-12 text-center text-2xl text-gray-800 border-0 border-b-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-black"
      type="text"
      inputmode="numeric"
      maxlength="1"
      style={{ borderTopWidth: '0', borderLeftWidth: '0', borderRightWidth: '0', borderBottomWidth: '2px' }}
    />
    <input
      class="w-12 text-center text-2xl text-gray-800 border-0 border-b-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-black"
      type="text"
      inputmode="numeric"
      maxlength="1"
    />
    <input
      class="w-12 text-center text-2xl text-gray-800 border-0 border-b-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-black"
      type="text"
      inputmode="numeric"
      maxlength="1"
    />
    <input
      class="w-12 text-center text-2xl text-gray-800 border-0 border-b-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-black"
      type="text"
      inputmode="numeric"
      maxlength="1"
    />
  </div>
  


        <button
          onClick={handleContinue}
          className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-bold py-2 px-4 transition w-full rounded-full border mt-4"
        >
          Continue
        </button>

        <p className="text-base text-gray-400 mt-4 mb-8">
          Already have an account?{" "}
          <Link to="/" className="text-yellow-500 cursor-pointer">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;
