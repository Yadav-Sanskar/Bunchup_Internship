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
    <div  className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black ">  
    <div className="bg-gradient-to-b from-gray-800 to-gray-800 text-white rounded-lg p-8 shadow-lg w-80 mx-auto text-center  ">
      
      <h1 className="text-2xl font-bold text-white-400 mb-2 mt-7">
        Welcome to <span className="text-yellow-400">BunchUp</span>
      </h1>
      
      <img
            className="w-[180px] h-[170px] bg-cover mb-6 mt-14 mx-7"
            src={require('../Image/bro.png')}
            alt="Custom"
          />

      <input
        type="tel"
        maxLength="10"
        placeholder="Enter Mobile No"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        className="w-full border-b border-gray-300 text-white bg-transparent focus:outline-none focus:border-yellow-400 mb-7 mt-14"
        style={{ borderTopWidth: '0', borderLeftWidth: '0', borderRightWidth: '0', borderBottomWidth: '2px' }}
      />
      <button
        onClick={handleContinue}
        className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-black text-black font-bold py-2 px-4  transition w-full rounded-full border"
      >
        Continue
      </button>
      <p className="text-base text-gray-400 mt-4 mb-8">
        Already have an account?{}
        <Link to="/" className="text-yellow-500 cursor-pointer" >Sign in</Link>
      </p>
    </div>
    </div>
  );
};

export default CreateAccount;
