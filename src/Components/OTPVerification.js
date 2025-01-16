import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const OTPVerification = () => {
  const [formData, setFormData] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleOTPChange = (index, value) => {
    if (isNaN(value)) return; 
    const newOtp = [...formData];
    newOtp[index] = value.slice(0, 1); 
    setFormData(newOtp);

    
    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    
    if (e.key === "Backspace" && !formData[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleContinue = () => {
    const otpValue = formData.join("");
    console.log("Entered OTP:", otpValue);

    if (otpValue.length === 4) {
      navigate("/basic-details");
    } else {
      alert("Please enter a valid 4-digit OTP.");
    }
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
          Welcome to <span className="bg-gradient-to-b from-[rgba(255,240,0,1)] to-[rgba(253,246,132,1)] bg-clip-text text-transparent">BunchUp</span>
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
          {formData.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              className="w-12 text-center text-2xl text-white bg-transparent border-0 border-b border-white focus:outline-none focus:ring-0"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOTPChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
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
          className=" text-black text-xl py-2 px-4 transition w-full rounded-full  border-black  mt-7 mb-8"
          style={{
            background: `
              radial-gradient(92.58% 3558.8% at 7.42% 100%, #FFF000 0%, #FF8A00 100%)
            `,
            backgroundBlendMode: "overlay",
          }}
        >
          Continue
        </button>

        
      </div>
    </div>
  );
};

export default OTPVerification;