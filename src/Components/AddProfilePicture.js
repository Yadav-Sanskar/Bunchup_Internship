import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";






const App = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result); // Load image as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();
  const handleLogin = () => {
    // API call here
    navigate("/interests");
  };




  

  return (
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br"
          style={{
            background: "linear-gradient(135deg,rgba(15, 15, 15, 0.97)40%,rgb(15, 15, 15) 60%)",
          }}
        ></div>
        <div className="absolute top-0 right-52 w-[350px] h-[150px] bg-[rgba(255,240,0,1)]/100  rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-60 w-[350px] h-[100px] bg-[rgba(255,240,0,1)]/100 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 bg-transparent rounded-[20px] p-8 shadow-lg text-center max-w-md" style={{ width: "352px" }}>
        <h1 className="text-3xl font-bold text-[rgba(255,240,0,1)] mb-">Show us how </h1>
        <h1 className="text-3xl font-bold text-[rgba(255,240,0,1)] mb-"> you look</h1>

        
        
        <div className="mt-7 mb-5">
      {profileImage ? (
        <div className="w-[270px] h-[270px] cursor-pointer overflow-hidden">
          <img
            src={profileImage}
            alt="Uploaded Preview"
            className="w-[270px] h-[270px] object-cover" 
            onClick={() => document.getElementById("fileInput").click()}
          />
        </div>
      ) : (
        <div
          className="w-[270px] h-[270px] ml-3 cursor-pointer flex items-center justify-center  rounded-lg"
          onClick={() => document.getElementById("fileInput").click()}
        >
          <img
            src={require("../Image/photo.png")}
            alt="Placeholder"
            className="w-full h-full object-contain rounded-lg" 
          />
        </div>
      )}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        hidden
      />
    </div>



        <label htmlFor="profile-image-upload" className="text-white text-sm ">
          Add a clear picture of yourself
        </label>


        <button onClick={handleLogin} className="verify-button  bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-medium py-2 px-4 transition w-full rounded-full  
                          mt-16 text-xl ">Get Profile Verified</button>
        <p className="verification-details text-gray-300 text-xs mb-5 mt-3 ">
          Verify now to get 50 BunCoins <span className="info-icon text-yellow-400">Ⓑ</span>
        </p>

      </div>
    </div>
  );
}

export default App;
