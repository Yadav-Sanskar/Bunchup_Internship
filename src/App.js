import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import CreateAccount from "./Components/CreateAccount"; // Create Account Page
import OTPVerification from "./Components/OTPVerification";
import AddProfilePicture from "./Components/AddProfilePicture";
import BasicDetails from "./Components/BasicDetails";
import AdditionalDetails from "./Components/AdditionalDetails";
import Interests from "./Components/Interests";

const App = () => { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} /> 
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/add-profile-picture" element={<AddProfilePicture />} /> 
        <Route path="/basic-details" element={<BasicDetails />} /> 
        <Route path="/additional-details" element={<AdditionalDetails />} /> 
        <Route path="/interests" element={<Interests />} /> 
      </Routes>
    </Router>
  );
};

export default App;
