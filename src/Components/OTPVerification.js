import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const OTPVerification = () => {
  const [formData, setFormData] = useState({ otp: ["", "", "", ""] }); 
  const navigate = useNavigate();

  // const handleOTPChange = (index, value) => {
  //   const otpArr = [...formData.otp]; 
  //   otpArr[index] = value.slice(0, 1); 
  //   setFormData({ ...formData, otp: otpArr }); 
  // };

  const handleContinue = () => {
    // Combine OTP digits
    // const otpValue = formData.otp.join("");
    // console.log("Entered OTP:", otpValue);

    // Add OTP validation logic here
    // if (otpValue.length === 4) {
      navigate("/basic-details");
  //   } else {
  //     alert("Please enter a valid 4-digit OTP.");
  //   }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-black">
      <div className="bg-gradient-to-b from-gray-800 to-gray-800 text-white rounded-lg p-8 shadow-lg text-center">
        <h1 className="text-2xl font-bold text-white-400 mb-7 mt-1">
          Welcome to <span className="text-yellow-400">BunchUp</span>
        </h1>
        <h1 className="text-sm font-bold text-white mb-0">Enter the OTP sent to</h1>
        <h1 className="text-sm font-bold text-white mb-10 ">+9689675896</h1>
        <div className="mt-15"></div>

        <img
          className="w-[120px] h-[125px] bg-cover mb-6  mx-14"
          src={require("../Image/bro.png")}
          alt="Custom"
        />

<div class="flex gap-4 mt-20">
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
    <input
      class="w-12 text-center text-2xl text-gray-800 border-0 border-b-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-black"
      type="text"
      inputmode="numeric"
      maxlength="1"
    />
  </div>


      <p className="text-base text-teal-45 mt-4  ">
              Didn't receive the code ?   {" "}
              <pre></pre>
              <Link to="/" className="text-teal-50  cursor-pointer">
                Resend Code
              </Link>
            </p>
  


        <button
          onClick={handleContinue}
          className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-bold py-2 px-4 transition w-full rounded-full border mt-7 mb-8"
        >
          Continue
        </button>

        
      </div>
    </div>
  );
};

export default OTPVerification;