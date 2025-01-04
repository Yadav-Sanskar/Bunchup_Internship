import './Component.css';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Decorative Yellow Ellipse */}
      <div className="absolute top-0 ml-56 w-52 h-52 bg-gradient-to-r from-white  to-yellow-200 opacity-70 z-10 rounded-full"></div>



      <div className="relative bg-gradient-to-b from-gray-800 to-gray-800 rounded-lg p-8 shadow-lg text-center">
        <h1 className="text-2xl font-bold text-white mb-0">
          Welcome to <span className="text-yellow-400">BunchUp</span>
        </h1>
        <p className="text-gray-400 text-xs">Get ready to move out and have fun</p>

        {/* Image Placeholder */}
        <img
          className="w-[277px] h-[194px] bg-cover mb-6 mt-10"
          src={require('../Image/bro1.png')}
          alt="Custom"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile No"
          className="w-full border-b border-gray-300 text-white bg-transparent focus:outline-none focus:border-yellow-400 mb-7"
          value={formData.mobile}
          onChange={handleInputChange}
          style={{ borderTopWidth: '0', borderLeftWidth: '0', borderRightWidth: '0', borderBottomWidth: '2px' }}
        />
        <div className="relative w-full mb-6">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-yellow-400 text-white bg-transparent"
            value={formData.password}
            onChange={handleInputChange}
            style={{ borderTopWidth: '0', borderLeftWidth: '0', borderRightWidth: '0', borderBottomWidth: '2px' }}
          />
          <span
            className="absolute right-4 top-2 text-gray-200 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </span>
        </div>
        <button
          onClick={handleLogin}
          className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-bold py-2 px-4 transition w-full rounded-full border mt-3"
        >
          Log in
        </button>

        <p className="text-base text-gray-400 mt-2 mb-3">
          Don't have an account?{" "}
          <Link to="/create-account" className="text-teal-50 cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
