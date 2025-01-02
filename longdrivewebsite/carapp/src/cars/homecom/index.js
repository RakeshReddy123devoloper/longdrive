// import React from "react";
// import "./index.css"; // Add custom styles here
// import img2 from "../new-img/homebanner.webp";
// import img3 from "../new-img/location.webp";
// import { useNavigate } from "react-router-dom";

// function Home(){
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/footer"); // Replace "/next-page" with your desired route
//   };
//   return (
//     <div>
//       <div className="home-container">
//         {/* Main Heading */}
//         <h1 className="home-title">
//           Install Long Drive Cars Mobile App & Start Your Journey!
//         </h1>
//         {/* Store Links */}
//         <div className="store-links">
//           <button className="store-button">Andriod ios</button>
//           <button className="store-button">Google play store</button>
//         </div>
//         {/* List of Features */}
//         <div className="div1">
//           <div>
//             <ul className="features-list">
//               <li>Choose Your Own Hours</li>
//               <li>24/7 Breakdown Service</li>
//               <li>Unlimited Kilometers</li>
//               <li>No Deposit</li>
//               <li>Check Original Car Photo</li>
//               <li>Car Starts at ₹1488/day</li>
//               <li>Lowest Price Challenge</li>
//               <li>Swift Dzire ₹1776 per Day</li>
//               <li>Just pay 10% Advance & Book</li>
//             </ul>
//           </div>

//           <div>
//             <img src={img2} alt="Logo" className="imglogo" />
//           </div>
//         </div>
//       </div>

//       <div className="div21">
//         <div>
//           <h1>Explore cars near you</h1>
//           <h3>20km around your location</h3>
//           <h2 className="clh2" onClick={handleClick}>
//             Get near you
//           </h2>
//         </div>
//         <div>
//           <img src={img3} alt="logos" className="img1" />
//         </div>
//       </div>
//       <div>
        
//       </div>
      
//     </div>
  
//   );
// }

// export default Home;

// import React from "react";
// import "./index.css"; // Add custom styles here
// import img2 from "../new-img/homebanner.webp";
// import img3 from "../new-img/location.webp";
// import car1 from "../new-img/wagnor.webp";
// import car2 from "../new-img/renault.webp";
// import car3 from "../new-img/rekiger.webp";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/footer"); // Replace "/footer" with your desired route
//   };

//   const cars = [
//     {
//       name: "Maruthi Wagon R",
//       price: "₹ 1488/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car1,
//     },
//     {
//       name: "Renault Kwid",
//       price: "₹ 1488/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car2,
//     },
//     {
//       name: "Renault Kiger",
//       price: "₹ 1680/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car3,
//     },
//   ];

//   return (
//     <div>
//       <div className="home-container">
//         {/* Main Heading */}
//         <h1 className="home-title">
//           Install Long Drive Cars Mobile App & Start Your Journey!
//         </h1>
//         {/* Store Links */}
//         <div className="store-links">
//           <button className="store-button">Android iOS</button>
//           <button className="store-button">Google Play Store</button>
//         </div>
//         {/* List of Features */}
//         <div className="div1">
//           <div>
//             <ul className="features-list">
//               <li>Choose Your Own Hours</li>
//               <li>24/7 Breakdown Service</li>
//               <li>Unlimited Kilometers</li>
//               <li>No Deposit</li>
//               <li>Check Original Car Photo</li>
//               <li>Car Starts at ₹1488/day</li>
//               <li>Lowest Price Challenge</li>
//               <li>Swift Dzire ₹1776 per Day</li>
//               <li>Just pay 10% Advance & Book</li>
//             </ul>
//           </div>

//           <div>
//             <img src={img2} alt="Logo" className="imglogo" />
//           </div>
//         </div>
//       </div>

//       <div className="div21">
//         <div>
//           <h1>Explore cars near you</h1>
//           <h3>20km around your location</h3>
//           <h2 className="clh2" onClick={handleClick}>
//             Get near you
//           </h2>
//         </div>
//         <div>
//           <img src={img3} alt="logos" className="img1" />
//         </div>
//       </div>

//       {/* Car List Section */}
//       <div className="car-list">
//         {cars.map((car, index) => (
//           <motion.div
//             className="car-card"
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <img src={car.image} alt={car.name} />
//             <h3>{car.name}</h3>
//             <p>{car.price}</p>
//             <p>Fuel: {car.fuel}</p>
//             <p>Seating: {car.seating}</p>
//             <p>Transmission: {car.transmission}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


// import React from "react";
// import "./index.css"; // Add custom styles here
// import img2 from "../new-img/homebanner.webp";
// import img3 from "../new-img/location.webp";
// import car1 from "../new-img/wagnor.webp";
// import car2 from "../new-img/renault.webp";
// import car3 from "../new-img/rekiger.webp";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/footer"); // Replace "/footer" with your desired route
//   };

//   // Animation Variants
//   const cardVariants = {
//     initial: { opacity: 0, scale: 0.8, y: -50 },
//     animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
//     hover: { scale: 1.05, transition: { duration: 0.3 } }
//   };

//   const buttonVariants = {
//     hover: { scale: 1.1, transition: { duration: 0.3, yoyo: Infinity } },
//     tap: { scale: 0.9 }
//   };

//   return (
//     <div>
//       <div className="home-container">
//         {/* Main Heading */}
//         <h1 className="home-title">
//           Install Long Drive Cars Mobile App & Start Your Journey!
//         </h1>
//         {/* Store Links */}
//         <div className="store-links">
//           <motion.button className="store-button" whileHover="hover" variants={buttonVariants}>
//             Android iOS
//           </motion.button>
//           <motion.button className="store-button" whileHover="hover" variants={buttonVariants}>
//             Google Play Store
//           </motion.button>
//         </div>
//         {/* List of Features */}
//         <div className="div1">
//           <div>
//             <ul className="features-list">
//               <li>Choose Your Own Hours</li>
//               <li>24/7 Breakdown Service</li>
//               <li>Unlimited Kilometers</li>
//               <li>No Deposit</li>
//               <li>Check Original Car Photo</li>
//               <li>Car Starts at ₹1488/day</li>
//               <li>Lowest Price Challenge</li>
//               <li>Swift Dzire ₹1776 per Day</li>
//               <li>Just pay 10% Advance & Book</li>
//             </ul>
//           </div>

//           <div>
//             <img src={img2} alt="Logo" className="imglogo" />
//           </div>
//         </div>
//       </div>

//       {/* New Animations Section */}
//       <motion.div
//         className="new-animations-container"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.3 }}
//       >
//         <h1>Unleash Your Adventure</h1>
//         <motion.h2
//           className="clh2"
//           whileHover="hover"
//           whileTap="tap"
//           variants={buttonVariants}
//           onClick={handleClick}
//         >
//           Start your journey now
//         </motion.h2>
//         <motion.img
//           src={img3}
//           alt="location"
//           className="img1"
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         />
//       </motion.div>

//       {/* Car List Section with New Animations */}
//       <motion.div
//         className="car-list"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       >
//         {[car1, car2, car3].map((car, index) => (
//           <motion.div
//             className="car-card"
//             key={index}
//             variants={cardVariants}
//             whileHover="hover"
//           >
//             <img src={car} alt={`Car ${index + 1}`} />
//             <h3>Car Model {index + 1}</h3>
//             <p>Price: ₹ 1488/day</p>
//             <p>Fuel: Petrol</p>
//             <p>Seating: 5 Seater</p>
//             <p>Transmission: Manual</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// export default Home;


import React from "react";
import "./index.css"; // Add custom styles here
import img2 from "../new-img/homebanner.webp";
import img3 from "../new-img/location.webp";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/footer");
  };

  // Animation Variants
  const iconVariants = {
    hover: { rotate: 360, scale: 1.2, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3, yoyo: Infinity } },
    tap: { scale: 0.9 },
  };

  const headingVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
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
          <motion.button className="store-button" whileHover="hover" variants={buttonVariants}>
            Android iOS
          </motion.button>
          <motion.button className="store-button" whileHover="hover" variants={buttonVariants}>
            Google Play Store
          </motion.button>
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

      {/* New Animations Section */}
      {/* <motion.div
        className="new-animations-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 variants={headingVariants}>Unleash Your Adventure</motion.h1>
        <motion.div className="icon-wrapper">
          <motion.div className="rotating-icon" variants={iconVariants} whileHover="hover">
            <img src={img3} alt="Adventure Icon" />
          </motion.div>
        </motion.div>
        <motion.h2
          className="clh2"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          onClick={handleClick}
        >
          Get cars near you
        </motion.h2>
      </motion.div> */}
      <motion.div
  className="new-animations-container"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <motion.h1 variants={headingVariants}>Unleash Your Adventure</motion.h1>
  <motion.div className="icon-wrapper">
    <motion.div className="rotating-icon" variants={iconVariants} whileHover="hover">
      <img src={img3} alt="Adventure Icon" />
    </motion.div>
  </motion.div>
  <motion.h2
    className="clh2"
    whileHover="hover"
    whileTap="tap"
    variants={buttonVariants}
    onClick={handleClick}
  >
    Get cars near you
  </motion.h2>
</motion.div>

    </div>
  );
}

export default Home;
