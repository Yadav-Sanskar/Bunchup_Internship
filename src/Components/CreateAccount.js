import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const CreateAccount = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleContinue = () => {
    if (mobileNumber.length === 10) {
      window.location.href = '/otp'; // Navigate to OTP Page
    } else {
      alert('Please enter a valid 10-digit mobile number.');
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
      
      <img
            className="w-[160px] h-[160px] bg-cover mb-20 mt-14 mx-14"
            src={require('../Image/bro.png')}
            alt="Custom"
          />

      

         <input
          type="text"
          name="mobile"
          placeholder=" Enter Mobile No"
          className=" w-full border-b border-gray-300 text-white bg-transparent focus:outline-none  mb-7 placeholder-white"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />

      <button
        onClick={handleContinue}
        className=" text-black text-xl py-2 px-4 transition w-full rounded-full  border-black mt-3 "
        style={{
          background: `
            radial-gradient(92.58% 3558.8% at 7.42% 100%, #FFF000 0%, #FF8A00 100%)
          `,
          backgroundBlendMode: "overlay",
        }}
      >
        Continue
      </button>
      <p className="text-base text-white mt-7 mb-8  ">
        Already have an account?{} <span className='mr-2'></span>
        <Link to="/" className="text-[rgba(255,240,0,1)] cursor-pointer text-xl " >Sign in</Link>
      </p>
    </div>
    </div>
    
  );
};

export default CreateAccount;
