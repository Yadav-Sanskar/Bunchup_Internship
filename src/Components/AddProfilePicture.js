import React, { useState } from 'react';


function App() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black   ">  
    <div className="bg-gradient-to-b from-gray-800 to-gray-800 rounded-lg p-8 shadow-lg text-center    ">
         
          <h className="text-4xl font-bold text-yellow-400 mb-4 ">Show us how you look</h>
          
      <div className="profile-image-container">
        {profileImage ? (
          // <img src={require("../Image/photo.png")} />
          <span>+</span>
        ) : (
          <div className=" w-[177px] h-[194px] ">
            <img src={require("../Image/photo.png")} />
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          hidden
        />
        <label htmlFor="profile-image-upload" className="text-white">
          Add a clear picture of yourself
        </label>
      </div>
      <button className="verify-button  bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-bold py-2 px-4 transition w-full rounded-full border 
                        ">Get Profile Verified</button>
      <p className="verification-details text-white">
        Verify now to get 50 BunCoins <span className="info-icon text-yellow-400">Ⓑ</span>
      </p>
    
    </div>
    </div>
  );
}

export default App;
