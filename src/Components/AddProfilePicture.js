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
        <h1 className="text-4xl font-bold text-[rgba(255,240,0,1)] mb-">Tell us more about you</h1>
          
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
