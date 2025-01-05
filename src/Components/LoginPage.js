import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
      {/* Full-Screen Glass Background */}
      <div className="absolute inset-0 ">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br"
          style={{
            background: "linear-gradient(135deg,#181812 40%,rgb(15, 15, 15) 50%)",
          }}
        ></div>

        {/* Subtle Yellow Glow */}
        <div className="absolute top-0 right-52 w-[350px] h-[200px] bg-[rgba(255,240,0,1)]/100  rounded-full blur-[150px]"></div>

        <div className="absolute bottom-0 left-60 w-[350px] h-[150px] bg-[rgba(255,240,0,1)]/100 rounded-full blur-[150px]"></div>
      </div>

      {/* Login Box */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 bg-transparent rounded-[20px] p-8 shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold text-white mb-0">
          Welcome to <span className="text-[rgba(255,240,0,1)]">BunchUp</span>
        </h1>
        <p className="text-white text-xs">Get ready to move out and have fun</p>

        <img
          className="w-[270px] h-[180px] bg-cover mb-8 mt-10 px-2 "
          src={require('../Image/bro1.png')}
          alt="Custom"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile No"
          className="w-full border-b border-gray-300 text-white bg-transparent focus:outline-none  mb-7 placeholder-white"
          value={formData.mobile}
          onChange={handleInputChange}
        />
        <div className="relative w-full mb-6">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full py-1 border-b-2 border-gray-300 focus:outline-none  text-white bg-transparent placeholder-white"
            value={formData.password}
            onChange={handleInputChange}
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
          className="bg-gradient-to-r from-[rgba(255,240,0,1)] to-red-400 text-black font-bold py-2 px-4 transition w-full rounded-full border mt-3 text-xl"
        >
          Log in
        </button>

        <p className="text-base text-white mt-2 mb-3">
          Don't have an account? {" "}
          <Link to="/create-account" className="text-teal-50 text-xl cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
