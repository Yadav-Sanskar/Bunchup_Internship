import './Component.css';
import { Link } from 'react-router-dom';


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ mobile: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    // API call here
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black ">  
 
    <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg p-8 shadow-lg text-center  ">
      <h1 className="text-2xl font-bold text-white mb-2">
              Welcome to <span className="text-yellow-400">BunchUp</span>
            </h1>
            <p className="text-gray-400 mb-6">Get ready to move out and have fun</p>

            {/* Image Placeholder */}
            <img
  className="w-[277px] h-[194px] mx-auto bg-cover mb-6"
  src="https://via.placeholder.com/277x194"
  alt=""
/>

      <input
        type="text"
        name="mobile"
        placeholder="Mobile No"
        className="input-style"
        value={formData.mobile}
        onChange={handleInputChange}
      />
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="input-style"
          value={formData.password}
          onChange={handleInputChange}
        />
        <span
          className="absolute right-4 top-2 text-gray-500 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "🙈" : "👁️"}
        </span>
      </div>
      <button onClick={handleLogin} className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-black text-black font-bold py-2 px-4  transition w-full rounded-full border">
        Log in
      </button>

      <p className="text-sm text-gray-400 mt-4">
        Don't  have an account?{}
        <Link to="/create-account" className="text-yellow-500 cursor-pointer" >Sign up</Link>
      </p>
      
    </div>
    </div>

  );
};

export default LoginPage;
