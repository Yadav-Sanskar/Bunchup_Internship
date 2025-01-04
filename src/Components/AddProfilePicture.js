import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function App() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };
  
  const navigate = useNavigate();
  const handleLogin = () => {
    // API call here
    navigate("/interests");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black    ">  
    <div className="bg-gradient-to-b from-gray-800 to-gray-800 rounded-lg p-8 shadow-lg text-center max-w-[350px] mx-auto     ">
         
          <h className="text-4xl font-bold text-yellow-400 mb-8  ">Show us how you look</h>
          
      <div className="mt-7 mb-5">
        {profileImage ? (
          <span>+</span>
        ) : (
          <div className=" w-[250px] h-[250px] ml-5  cursor-pointer ">
            <img src={require("../Image/photo.png")}  alt="Custom"/>
          </div>
        )}
        <input
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
      <p className="verification-details text-white text-xs mb-5 ">
        Verify now to get 50 BunCoins <span className="info-icon text-yellow-400">Ⓑ</span>
      </p>
    
    </div>
    </div>
  );
}

export default App;
