import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProfilePicture = () => {
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleContinue = () => {
    // Add file upload logic here
    navigate("/interests");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 ">
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg w-80 text-center">
      <h1 className="text-2xl font-bold text-yellow-400 mb-4">Upload Profile Picture</h1>
      <input type="file" onChange={handleFileChange} className="input-style" />
      <button onClick={handleContinue} className="btn-primary w-full mt-4">
        Continue
      </button>
    </div>
    </div>
  );
};

export default AddProfilePicture;
