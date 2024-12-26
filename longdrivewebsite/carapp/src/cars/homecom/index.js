import React from "react";
import "./index.css"; // Add custom styles here
import img2 from "../new-img/homebanner.webp";
import img3 from "../new-img/location.webp";
import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/footer"); // Replace "/next-page" with your desired route
  };
  return (
    <div>
      <div className="home-container">
        {/* Main Heading */}
        <h1 className="home-title">
          Install Long Drive Cars Mobile App & Start Your Journey!
        </h1>
        {/* Store Links */}
        <div className="store-links">
          <button className="store-button">Andriod ios</button>
          <button className="store-button">Google play store</button>
        </div>
        {/* List of Features */}
        <div className="div1">
          <div>
            <ul className="features-list">
              <li>Choose Your Own Hours</li>
              <li>24/7 Breakdown Service</li>
              <li>Unlimited Kilometers</li>
              <li>No Deposit</li>
              <li>Check Original Car Photo</li>
              <li>Car Starts at ₹1488/day</li>
              <li>Lowest Price Challenge</li>
              <li>Swift Dzire ₹1776 per Day</li>
              <li>Just pay 10% Advance & Book</li>
            </ul>
          </div>

          <div>
            <img src={img2} alt="Logo" className="imglogo" />
          </div>
        </div>
      </div>

      <div className="div21">
        <div>
          <h1>Explore cars near you</h1>
          <h3>20km around your location</h3>
          <h2 className="clh2" onClick={handleClick}>
            Get near you
          </h2>
        </div>
        <div>
          <img src={img3} alt="logos" className="img1" />
        </div>
      </div>
      <div>
        
      </div>
      
    </div>
  
  );
}

export default Home;
