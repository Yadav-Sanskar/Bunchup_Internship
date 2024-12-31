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
    <div  className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black">  
    <div className="bg-gradient-to-b from-gray-900 to-black text-white rounded-lg p-8 shadow-lg w-80 mx-auto text-center  ">
      
      <h1 className="text-2xl font-bold text-white-400 mb-2">
        Welcome to <span className="text-yellow-400">BunchUp</span>
      </h1>
      
      <img
            className="w-[277px] h-[194px] bg-cover mb-6 mt-20"
            src={require('../Image/bro.png')}
            alt="Custom"
          />

      <input
        type="tel"
        maxLength="10"
        placeholder="Enter Mobile No"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        className="w-full py-2 px-3 text-lg rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500 mb-4"
      />
      <button
        onClick={handleContinue}
        className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-black text-black font-bold py-2 px-4  transition w-full rounded-full border"
      >
        Continue
      </button>
      <p className="text-sm text-gray-400 mt-4">
        Already have an account?{}
        <Link to="/" className="text-yellow-500 cursor-pointer" >Sign in</Link>
      </p>
    </div>
    </div>
  );
};

export default CreateAccount;
