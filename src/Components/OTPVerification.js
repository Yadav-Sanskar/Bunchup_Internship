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
        <div className="absolute top-0 left-52 w-[350px] h-[150px] bg-[rgba(255,240,0,1)]/100  rounded-full blur-[150px]"></div>

        <div className="absolute bottom-0 right-60 w-[350px] h-[100px] bg-[rgba(255,240,0,1)]/100 rounded-full blur-[150px]"></div>
      </div>


      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 bg-transparent rounded-[20px] p-8 shadow-lg text-center max-w-md" style={{ width: "352px" }}>
        <h1 className="text-2xl font-bold text-white mb-0">
          Welcome to <span className="text-[rgba(255,240,0,1)]">BunchUp</span>
        </h1>
        <h1 className="text-sm font-bold text-white mb-0 mt-5">Enter the OTP sent to</h1>
        <h1 className="text-sm font-bold text-white mb-10 ">+9689675896</h1>
        <div className="mt-15"></div>

        <img
          className="w-[120px] h-[130px] bg-cover mx-14"
          src={require("../Image/bro.png")}
          alt="Custom"
        />

<div className="flex gap-6 mt-16 ml-3">
  <input
    className="w-12 text-center text-2xl text-white bg-transparent border-0 border-b border-white  focus:outline-none focus:ring-0 "
    inputMode="numeric"
    maxLength="1"
    placeholder=""
  />
  <input
    className="w-12 text-center text-2xl text-white bg-transparent border-0 border-b border-white placeholder-white focus:outline-none focus:ring-0 "
    type="text"
    inputMode="numeric"
    maxLength="1"
    placeholder=""
  />
  <input
    className="w-12 text-center text-2xl text-white bg-transparent border-0 border-b border-white placeholder-white focus:outline-none focus:ring-0 "
    type="text"
    inputMode="numeric"
    maxLength="1"
    placeholder=""
  />
  <input
    className="w-12 text-center text-2xl text-white bg-transparent border-0 border-b border-white placeholder-white focus:outline-none focus:ring-0 "
    type="text"
    inputMode="numeric"
    maxLength="1"
    placeholder=""
  />
</div>




      <p className="text-base text-white mt-4  ">
              Didn't receive the code ?   {" "}
              <pre></pre>
              <Link to="/" className="text-teal-50  cursor-pointer font-bold">
                Resend Code
              </Link>
            </p>
  


        <button
          onClick={handleContinue}
          className="bg-gradient-to-r from-[rgba(255,240,0,1)] to-red-300 text-black text-xl py-2 px-4 transition w-full rounded-full  border-black  mt-7 mb-8"
        >
          Continue
        </button>

        
      </div>
    </div>
  );
};

export default OTPVerification;