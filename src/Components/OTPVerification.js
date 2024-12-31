import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOTPChange = (e) => {
    setOtp(e.target.value);
  };

  const handleContinue = () => {
    // Validate OTP here
    navigate("/basic-details");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 ">
    
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg  text-center">
      <h1 className="text-2xl font-bold text-white mb-2">Enter OTP</h1>

            <img
        className="w-[277px] h-[194px] bg-cover mb-6 mt-20"
        src={require('../Image/bro.png')}
        alt="Custom"
      />

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={handleOTPChange}
        className="input-style"
      />
      <button onClick={handleContinue} className="btn-primary w-full mt-4">
        Continue
      </button>
    </div>
    </div>
  
  );
};

export default OTPVerification;
