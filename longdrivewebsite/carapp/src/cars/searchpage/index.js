
import React, { useState } from "react";
import "./index.css";
import car1 from "../new-img/wagnor.webp";
import car2 from "../new-img/renault.webp";
import car3 from "../new-img/rekiger.webp";
import car4 from "../new-img/marutiswift.webp";
import car5 from "../new-img/Tata-Punch1.webp";
import car6 from "../new-img/hyundai120.webp";
import car7 from "../new-img/toyotainnova.webp";
import car8 from "../new-img/seltos.webp";
import car9 from "../new-img/xuv700.jpeg";
import car10 from "../new-img/jeepcompass.jpeg";
import car11 from "../new-img/toyotafortuner.jpeg";
import car12 from "../new-img/mghector.jpeg";
import car13 from "../new-img/hondacity.jpeg";
import car14 from "../new-img/bmw.jpeg";
import car15 from "../new-img/benz.jpeg";
import car16 from "../new-img/audi.jpeg";
import car17 from "../new-img/nissan.jpeg";
import car18 from "../new-img/ford.jpeg";
import car19 from "../new-img/skoda.jpeg";
import car20 from "../new-img/Volkswagen.jpeg";
const App3 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cars] = useState([
    {
      name: "Maruthi Wagon R",
      price: "₹ 1488/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Manual",
      image: car1,
      phone: "6304699210",
    },
    {
      name: "Renault Kwid",
      price: "₹ 1488/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Manual",
      image: car2,
      phone: "9948638817",
    },
    {
      name: "Renault Kiger",
      price: "₹ 1680/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Manual",
      image: car3,
      phone: "8465084918",
    },
    {
      name: "Maruthi Swift",
      price: "₹ 1680/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Manual",
      image: car4,
      phone: "9848734272",
    },
    {
      name: "Tata Punch",
      price: "₹ 1776/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Manual",
      image: car5,
      phone: "6304699210",
    },
    {
      name: "Hyundai i20",
      price: "₹ 1800/day",
      fuel: "Diesel",
      seating: "5 Seater",
      transmission: "Automatic",
      image: car6,
      phone: "6304699210",
    },
    {
      name: "Toyota Innova Crysta",
      price: "₹ 2500/day",
      fuel: "Diesel",
      seating: "7 Seater",
      transmission: "Automatic",
      image: car7,
      phone: "6304699210",
    },
    {
      name: "Kia Seltos",
      price: "₹ 2800/day",
      fuel: "Diesel",
      seating: "5 Seater",
      transmission: "Automatic",
      image: car8,
      phone: "6304699210",
    },
     {
      name: "Mahindra XUV700",
      price: "₹ 3000/day",
      fuel: "Diesel",
      seating: "7 Seater",
      transmission: "Automatic",
      image: car9,
      phone: "6304699210", // Example phone number
    },
    {
      name: "Jeep Compass",
      price: "₹ 3200/day",
      fuel: "Diesel",
      seating: "5 Seater",
      transmission: "Manual",
      image: car10,
      phone: "6304699210", // Example phone number
    },
    {
      name: "Toyota Fortuner",
      price: "₹ 3500/day",
      fuel: "Diesel",
      seating: "7 Seater",
      transmission: "Automatic",
      image: car11,
      phone: "6304699210", // Example phone number
    },
    {
      name: "MG Hector",
      price: "₹ 3200/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Automatic",
      image: car12,
      phone: "6304699210", // Example phone number
    },
    {
      name: "Honda City",
      price: "₹ 2000/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Automatic",
      image: car13,
      phone: "6304699210", // Example phone number
    },
    {
      name: "BMW X1",
      price: "₹ 4500/day",
      fuel: "Diesel",
      seating: "5 Seater",
      transmission: "Automatic",
      image: car14,
      phone: "6304699210", // Example phone number
    },
    {
      name: "Mercedes-Benz C-Class",
      price: "₹ 5000/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Automatic",
      image: car15,
      phone: "1234567890", // Example phone number
    },
    {
      name: "Audi Q5",
      price: "₹ 6000/day",
      fuel: "Diesel",
      seating: "5 Seater",
      transmission: "Automatic",
      image:car16,
      phone: "6304699210", // Example phone number
    },
     {
      name: "Nissan X-Trail",
      price: "₹ 3500/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Manual",
      image: car17,
      phone: "6304699210", // Example phone number
    },
    {
      name: "Ford EcoSport",
      price: "₹ 2200/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Automatic",
      image: car18,
      phone: "6304699210", // Example phone number
    },
    {
      name: "Skoda Kushaq",
      price: "₹ 2500/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Manual",
      image: car19,
      phone: "6304699210", // Example phone number
    },
    {
      name: "Volkswagen Taigun",
      price: "₹ 2500/day",
      fuel: "Diesel",
      seating: "5 Seater",
      transmission: "Automatic",
      image: car20,
      phone: "9701574932", // Example phone number
    }
  ]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Explore Our Cars</h1>
      <input
        type="text"
        placeholder="Search for cars..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="car-list">
        {filteredCars.map((car, index) => (
          <div
            className={`car-card ${index % 2 === 0 ? "style-one" : "style-two"}`}
            key={index}
          >
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p className="price">{car.price}</p>
            <p>Fuel: {car.fuel}</p>
            <p>Seating: {car.seating}</p>
            <p>Transmission: {car.transmission}</p>
            <div className="buttons">
              <a
                href={`https://wa.me/91${car.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-button"
              >
                WhatsApp
              </a>
              <a href={`tel:${car.phone}`} className="btn callus-button">
                Call Us
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App3;

// import React, { useState } from "react";
// import "./index.css";
// import car1 from "../new-img/wagnor.webp";
// import car2 from "../new-img/renault.webp";
// import car3 from "../new-img/rekiger.webp";
// import car4 from "../new-img/marutiswift.webp";
// import car5 from "../new-img/Tata-Punch1.webp";
// import car6 from "../new-img/hyundai120.webp";
// import car7 from "../new-img/toyotainnova.webp";
// import car8 from "../new-img/seltos.webp";
// import car9 from "../new-img/xuv700.jpeg";
// import car10 from "../new-img/jeepcompass.jpeg";
// import car11 from "../new-img/toyotafortuner.jpeg";
// import car12 from "../new-img/mghector.jpeg";
// import car13 from "../new-img/hondacity.jpeg";
// import car14 from "../new-img/bmw.jpeg";
// import car15 from "../new-img/benz.jpeg";
// import car16 from "../new-img/audi.jpeg";
// import car17 from "../new-img/nissan.jpeg";
// import car18 from "../new-img/ford.jpeg";
// import car19 from "../new-img/skoda.jpeg";
// import car20 from "../new-img/Volkswagen.jpeg";
// // import { useNavigate } from "react-router-dom";
// const App3 = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [cars] = useState([
//     {
//       name: "Maruthi Wagon R",
//       price: "₹ 1488/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car1,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Renault Kwid",
//       price: "₹ 1488/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car2,
//       phone: "9948638817", // Example phone number
//     },
//     {
//       name: "Renault Kiger",
//       price: "₹ 1680/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car3,
//       phone: "8465084918", // Example phone number
//     },
//     {
//       name: "Maruthi Swift",
//       price: "₹ 1680/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car4,
//       phone: "9848734272", // Example phone number
//     },
//     {
//       name: "Tata Punch",
//       price: "₹ 1776/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car5,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Hyundai i20",
//       price: "₹ 1800/day",
//       fuel: "Diesel",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car6,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Toyota Innova Crysta",
//       price: "₹ 2500/day",
//       fuel: "Diesel",
//       seating: "7 Seater",
//       transmission: "Automatic",
//       image: car7,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Kia Seltos",
//       price: "₹ 2800/day",
//       fuel: "Diesel",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car8,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Mahindra XUV700",
//       price: "₹ 3000/day",
//       fuel: "Diesel",
//       seating: "7 Seater",
//       transmission: "Automatic",
//       image: car9,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Jeep Compass",
//       price: "₹ 3200/day",
//       fuel: "Diesel",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car10,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Toyota Fortuner",
//       price: "₹ 3500/day",
//       fuel: "Diesel",
//       seating: "7 Seater",
//       transmission: "Automatic",
//       image: car11,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "MG Hector",
//       price: "₹ 3200/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car12,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Honda City",
//       price: "₹ 2000/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car13,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "BMW X1",
//       price: "₹ 4500/day",
//       fuel: "Diesel",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car14,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Mercedes-Benz C-Class",
//       price: "₹ 5000/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car15,
//       phone: "1234567890", // Example phone number
//     },
//     {
//       name: "Audi Q5",
//       price: "₹ 6000/day",
//       fuel: "Diesel",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image:car16,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Nissan X-Trail",
//       price: "₹ 3500/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car17,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Ford EcoSport",
//       price: "₹ 2200/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car18,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Skoda Kushaq",
//       price: "₹ 2500/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car19,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Volkswagen Taigun",
//       price: "₹ 2500/day",
//       fuel: "Diesel",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car20,
//       phone: "9701574932", // Example phone number
//     },
//   ]);

//   // Handle search query change
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter cars based on search query
//   const filteredCars = cars.filter((car) =>
//     car.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
  
  
//   return (
//     <div className="app">
//       <h1>Explore Our Cars</h1>
//       <input
//         type="text"
//         placeholder="Search for cars..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//         className="search-input"
//       />
//       <div className="car-list">
//         {filteredCars.map((car, index) => (
//           <div className="car-card" key={index}
//            >
//             <img src={car.image} alt={car.name} />
//             <h3>{car.name}</h3>
//             <p>{car.price}</p>
//             <p>Fuel: {car.fuel}</p>
//             <p>Seating: {car.seating}</p>
//             <p>Transmission: {car.transmission}</p>
//             <div className="buttons">
//               <a
//                 href={`https://wa.me/91${car.phone}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="whatsapp-button"
//               >
//                 Whatsapp
//               </a>
//               <a
//                 href={`tel:${car.phone}`}
//                 className="callus-button"
//               >
//                 Call Us
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App3;

// import React, { useState } from "react";
// import "./index.css";
// import car1 from "../new-img/wagnor.webp";
// import car2 from "../new-img/renault.webp";
// import car3 from "../new-img/rekiger.webp";
// import car4 from "../new-img/marutiswift.webp";
// import car5 from "../new-img/Tata-Punch1.webp";
// import car6 from "../new-img/hyundai120.webp";
// import car7 from "../new-img/toyotainnova.webp";
// import car8 from "../new-img/seltos.webp";
// import car9 from "../new-img/xuv700.jpeg";
// import car10 from "../new-img/jeepcompass.jpeg";
// import car11 from "../new-img/toyotafortuner.jpeg";
// import car12 from "../new-img/mghector.jpeg";
// import car13 from "../new-img/hondacity.jpeg";
// import car14 from "../new-img/bmw.jpeg";
// import car15 from "../new-img/benz.jpeg";
// import car16 from "../new-img/audi.jpeg";
// import car17 from "../new-img/nissan.jpeg";
// import car18 from "../new-img/ford.jpeg";
// import car19 from "../new-img/skoda.jpeg";
// import car20 from "../new-img/Volkswagen.jpeg";
// // import { useNavigate } from "react-router-dom";
// const App3 = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [cars] = useState([
//     {
//       name: "Maruthi Wagon R",
//       price: "₹ 1488/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car1,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Renault Kwid",
//       price: "₹ 1488/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car2,
//       phone: "9948638817", // Example phone number
//     },
//     {
//       name: "Renault Kiger",
//       price: "₹ 1680/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car3,
//       phone: "8465084918", // Example phone number
//     },
//     {
//       name: "Maruthi Swift",
//       price: "₹ 1680/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car4,
//       phone: "9848734272", // Example phone number
//     },
//     {
//       name: "Tata Punch",
//       price: "₹ 1776/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car5,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Hyundai i20",
//       price: "₹ 1800/day",
//       fuel: "Diesel",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car6,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Toyota Innova Crysta",
//       price: "₹ 2500/day",
//       fuel: "Diesel",
//       seating: "7 Seater",
//       transmission: "Automatic",
//       image: car7,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Kia Seltos",
//       price: "₹ 2800/day",
//       fuel: "Diesel",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car8,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Mahindra XUV700",
//       price: "₹ 3000/day",
//       fuel: "Diesel",
//       seating: "7 Seater",
//       transmission: "Automatic",
//       image: car9,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Jeep Compass",
//       price: "₹ 3200/day",
//       fuel: "Diesel",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car10,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Toyota Fortuner",
//       price: "₹ 3500/day",
//       fuel: "Diesel",
//       seating: "7 Seater",
//       transmission: "Automatic",
//       image: car11,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "MG Hector",
//       price: "₹ 3200/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car12,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Honda City",
//       price: "₹ 2000/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car13,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "BMW X1",
//       price: "₹ 4500/day",
//       fuel: "Diesel",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car14,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Mercedes-Benz C-Class",
//       price: "₹ 5000/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car15,
//       phone: "1234567890", // Example phone number
//     },
//     {
//       name: "Audi Q5",
//       price: "₹ 6000/day",
//       fuel: "Diesel",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image:car16,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Nissan X-Trail",
//       price: "₹ 3500/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car17,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Ford EcoSport",
//       price: "₹ 2200/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car18,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Skoda Kushaq",
//       price: "₹ 2500/day",
//       fuel: "Petrol",
//       seating: "5 Seater",
//       transmission: "Manual",
//       image: car19,
//       phone: "6304699210", // Example phone number
//     },
//     {
//       name: "Volkswagen Taigun",
//       price: "₹ 2500/day",
//       fuel: "Diesel",
//       seating: "5 Seater",
//       transmission: "Automatic",
//       image: car20,
//       phone: "9701574932", // Example phone number
//     },
//   ]);

//   // Handle search query change
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Filter cars based on search query
//   const filteredCars = cars.filter((car) =>
//     car.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
  
  
//   return (
//     <div className="app">
//       <h1>Explore Our Cars</h1>
//       <input
//         type="text"
//         placeholder="Search for cars..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//         className="search-input"
//       />
//       <div className="car-list">
//         {filteredCars.map((car, index) => (
//           <div className="car-card" key={index}
//            >
//             <img src={car.image} alt={car.name} />
//             <h3>{car.name}</h3>
//             <p>{car.price}</p>
//             <p>Fuel: {car.fuel}</p>
//             <p>Seating: {car.seating}</p>
//             <p>Transmission: {car.transmission}</p>
//             <div className="buttons">
//               <a
//                 href={`https://wa.me/91${car.phone}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="whatsapp-button"
//               >
//                 Whatsapp
//               </a>
//               <a
//                 href={`tel:${car.phone}`}
//                 className="callus-button"
//               >
//                 Call Us
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App3;
// import React, { useState, useEffect } from "react";

// const cars = [
//   { name: "Maruthi Wagon R", price: 1488, fuel: "Petrol", seating: "5 Seater", transmission: "Manual", phone: "6304699210" },
//   { name: "Toyota Corolla", price: 3000, fuel: "Petrol", seating: "5 Seater", transmission: "Automatic", phone: "6304699211" },
//   { name: "Honda Civic", price: 3500, fuel: "Petrol", seating: "5 Seater", transmission: "Automatic", phone: "6304699212" },
//   { name: "Hyundai Verna", price: 2500, fuel: "Diesel", seating: "5 Seater", transmission: "Manual", phone: "6304699213" },
//   { name: "Ford Endeavour", price: 6000, fuel: "Diesel", seating: "7 Seater", transmission: "Automatic", phone: "6304699214" },
//   { name: "BMW 5 Series", price: 8000, fuel: "Petrol", seating: "5 Seater", transmission: "Automatic", phone: "6304699215" },
//   { name: "Audi A6", price: 9000, fuel: "Diesel", seating: "5 Seater", transmission: "Automatic", phone: "6304699216" },
//   { name: "Mercedes-Benz E-Class", price: 9500, fuel: "Petrol", seating: "5 Seater", transmission: "Automatic", phone: "6304699217" },
//   { name: "Tata Nexon", price: 2000, fuel: "Electric", seating: "5 Seater", transmission: "Automatic", phone: "6304699218" },
//   { name: "Kia Seltos", price: 3500, fuel: "Petrol", seating: "5 Seater", transmission: "Manual", phone: "6304699219" },
// ];

// const Form1 = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     bookingDateTime: "",
//     selectedCar: "",
//     fuelVariant: "Petrol",
//     numberOfDays: 1,
//     totalPayment: 0,
//     aadhaarFront: null,
//     aadhaarBack: null,
//     licenseFront: null,
//     licenseBack: null,
//   });

//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [isFormValid, setIsFormValid] = useState(false);

//   useEffect(() => {
//     if (formData.selectedCar && formData.numberOfDays) {
//       const selectedCar = cars.find((car) => car.name === formData.selectedCar);
//       if (selectedCar) {
//         const total = selectedCar.price * formData.numberOfDays;
//         setFormData((prevData) => ({
//           ...prevData,
//           totalPayment: total,
//         }));
//       }
//     }
//   }, [formData.selectedCar, formData.numberOfDays]);

//   useEffect(() => {
//     // Validate all fields
//     const isValidName = formData.name.trim().length > 0;
//     const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
//     const isValidMobile = /^[0-9]{10}$/.test(formData.mobile);
//     const isValidBookingDateTime = formData.bookingDateTime.trim().length > 0;
//     const isSelectedCarValid = formData.selectedCar.trim().length > 0;
//     const isNumberOfDaysValid = formData.numberOfDays > 0;
//     const areFilesUploaded =
//       formData.aadhaarFront && formData.aadhaarBack && formData.licenseFront && formData.licenseBack;

//     setIsFormValid(
//       isValidName &&
//         isValidEmail &&
//         isValidMobile &&
//         isValidBookingDateTime &&
//         isSelectedCarValid &&
//         isNumberOfDaysValid &&
//         areFilesUploaded
//     );
//   }, [formData]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files[0],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isFormValid) {
//       console.log("Submitted Data:", formData);
//       setFormSubmitted(true);
//     }
//   };

//   const handleBookNowClick = () => {
//     setShowForm(true);
//   };

//   if (formSubmitted) {
//     return (
//       <div style={styles.container}>
//         <h1>Your Booking is Confirmed!</h1>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <h1>Car Booking</h1>
//       {!showForm ? (
//         <button onClick={handleBookNowClick} style={styles.button}>
//           Book Now
//         </button>
//       ) : (
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <div style={styles.formGroup}>
//             <label htmlFor="name" style={styles.label}>
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="email" style={styles.label}>
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="mobile" style={styles.label}>
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               id="mobile"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleInputChange}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="bookingDateTime" style={styles.label}>
//               Date and Time of Booking
//             </label>
//             <input
//               type="datetime-local"
//               id="bookingDateTime"
//               name="bookingDateTime"
//               value={formData.bookingDateTime}
//               onChange={handleInputChange}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="selectedCar" style={styles.label}>
//               Choose Vehicle
//             </label>
//             <select
//               id="selectedCar"
//               name="selectedCar"
//               value={formData.selectedCar}
//               onChange={handleInputChange}
//               style={styles.input}
//               required
//             >
//               <option value="">Select a car</option>
//               {cars.map((car) => (
//                 <option key={car.name} value={car.name}>
//                   {car.name} - {car.fuel} - {car.seating}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="numberOfDays" style={styles.label}>
//               Number of Days
//             </label>
//             <input
//               type="number"
//               id="numberOfDays"
//               name="numberOfDays"
//               value={formData.numberOfDays}
//               onChange={handleInputChange}
//               style={styles.input}
//               min="1"
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label style={styles.label}>Total Payment</label>
//             <input
//               type="text"
//               value={`₹ ${formData.totalPayment}`}
//               readOnly
//               style={styles.input}
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="aadhaarFront" style={styles.label}>
//               Aadhaar Front
//             </label>
//             <input
//               type="file"
//               id="aadhaarFront"
//               name="aadhaarFront"
//               onChange={handleFileChange}
//               style={styles.input}
//               accept="image/*"
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="aadhaarBack" style={styles.label}>
//               Aadhaar Back
//             </label>
//             <input
//               type="file"
//               id="aadhaarBack"
//               name="aadhaarBack"
//               onChange={handleFileChange}
//               style={styles.input}
//               accept="image/*"
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="licenseFront" style={styles.label}>
//               Driving License Front
//             </label>
//             <input
//               type="file"
//               id="licenseFront"
//               name="licenseFront"
//               onChange={handleFileChange}
//               style={styles.input}
//               accept="image/*"
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="licenseBack" style={styles.label}>
//               Driving License Back
//             </label>
//             <input
//               type="file"
//               id="licenseBack"
//               name="licenseBack"
//               onChange={handleFileChange}
//               style={styles.input}
//               accept="image/*"
//               required
//             />
//           </div>

//           <button type="submit" style={styles.button} disabled={!isFormValid}>
//             Submit Booking
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: "20px",
//     textAlign: "center",
//   },
//   form: {
//     maxWidth: "400px",
//     margin: "auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   formGroup: {
//     marginBottom: "15px",
//   },
//   label: {
//     display: "block",
//     fontWeight: "bold",
//     marginBottom: "5px",
//     textAlign: "left",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "16px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "16px",
//     backgroundColor: "violet",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default Form1;



// import React, { useState, useEffect } from "react";

// // Car data
// const cars = [
//   { name: "Maruthi Wagon R", price: 1488, fuel: "Petrol", seating: "5 Seater", transmission: "Manual", phone: "6304699210" },
//   { name: "Toyota Corolla", price: 3000, fuel: "Petrol", seating: "5 Seater", transmission: "Automatic", phone: "6304699211" },
//   { name: "Honda Civic", price: 3500, fuel: "Petrol", seating: "5 Seater", transmission: "Automatic", phone: "6304699212" },
//   { name: "Hyundai Verna", price: 2500, fuel: "Diesel", seating: "5 Seater", transmission: "Manual", phone: "6304699213" },
//   { name: "Ford Endeavour", price: 6000, fuel: "Diesel", seating: "7 Seater", transmission: "Automatic", phone: "6304699214" },
//   { name: "BMW 5 Series", price: 8000, fuel: "Petrol", seating: "5 Seater", transmission: "Automatic", phone: "6304699215" },
//   { name: "Audi A6", price: 9000, fuel: "Diesel", seating: "5 Seater", transmission: "Automatic", phone: "6304699216" },
//   { name: "Mercedes-Benz E-Class", price: 9500, fuel: "Petrol", seating: "5 Seater", transmission: "Automatic", phone: "6304699217" },
//   { name: "Tata Nexon", price: 2000, fuel: "Electric", seating: "5 Seater", transmission: "Automatic", phone: "6304699218" },
//   { name: "Kia Seltos", price: 3500, fuel: "Petrol", seating: "5 Seater", transmission: "Manual", phone: "6304699219" },
// ];

// const Form1 = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     bookingDateTime: "",
//     selectedCar: "",
//     fuelVariant: "Petrol",
//     numberOfDays: 1,
//     totalPayment: 0,
//     aadhaarFront: null,
//     aadhaarBack: null,
//     licenseFront: null,
//     licenseBack: null,
//   });

//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [isFormValid, setIsFormValid] = useState(false);

//   // Recalculate total payment when selected car or number of days changes
//   useEffect(() => {
//     if (formData.selectedCar && formData.numberOfDays) {
//       const selectedCar = cars.find((car) => car.name === formData.selectedCar);
//       if (selectedCar) {
//         const total = selectedCar.price * formData.numberOfDays;
//         setFormData((prevData) => ({
//           ...prevData,
//           totalPayment: total,
//         }));
//       }
//     }
//   }, [formData.selectedCar, formData.numberOfDays]);

//   // Validate the form fields
//   useEffect(() => {
//     const isValidName = formData.name.trim().length > 0;
//     const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
//     const isValidMobile = /^[0-9]{10}$/.test(formData.mobile);
//     const isValidBookingDateTime = formData.bookingDateTime.trim().length > 0;
//     const isSelectedCarValid = formData.selectedCar.trim().length > 0;
//     const isNumberOfDaysValid = formData.numberOfDays > 0;
//     const areFilesUploaded =
//       formData.aadhaarFront && formData.aadhaarBack && formData.licenseFront && formData.licenseBack;

//     setIsFormValid(
//       isValidName &&
//         isValidEmail &&
//         isValidMobile &&
//         isValidBookingDateTime &&
//         isSelectedCarValid &&
//         isNumberOfDaysValid &&
//         areFilesUploaded
//     );
//   }, [formData]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files[0],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isFormValid) {
//       console.log("Submitted Data:", formData);
//       setFormSubmitted(true);
//     }
//   };

//   const handleBookNowClick = () => {
//     setShowForm(true);
//   };

//   if (formSubmitted) {
//     return (
//       <div style={styles.container}>
//         <h1>Your Booking is Confirmed!</h1>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <h1>Car Booking</h1>
//       {!showForm ? (
//         <button onClick={handleBookNowClick} style={styles.button}>
//           Book Now
//         </button>
//       ) : (
//         <form onSubmit={handleSubmit} style={styles.form}>
//           <div style={styles.formGroup}>
//             <label htmlFor="name" style={styles.label}>
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="email" style={styles.label}>
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="mobile" style={styles.label}>
//               Mobile Number
//             </label>
//             <input
//               type="tel"
//               id="mobile"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleInputChange}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="bookingDateTime" style={styles.label}>
//               Date and Time of Booking
//             </label>
//             <input
//               type="datetime-local"
//               id="bookingDateTime"
//               name="bookingDateTime"
//               value={formData.bookingDateTime}
//               onChange={handleInputChange}
//               style={styles.input}
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="selectedCar" style={styles.label}>
//               Choose Vehicle
//             </label>
//             <select
//               id="selectedCar"
//               name="selectedCar"
//               value={formData.selectedCar}
//               onChange={handleInputChange}
//               style={styles.input}
//               required
//             >
//               <option value="">Select a car</option>
//               {cars.map((car) => (
//                 <option key={car.name} value={car.name}>
//                   {car.name} - {car.fuel} - {car.seating}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="numberOfDays" style={styles.label}>
//               Number of Days
//             </label>
//             <input
//               type="number"
//               id="numberOfDays"
//               name="numberOfDays"
//               value={formData.numberOfDays}
//               onChange={handleInputChange}
//               style={styles.input}
//               min="1"
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label style={styles.label}>Total Payment</label>
//             <input
//               type="text"
//               value={`₹ ${formData.totalPayment}`}
//               readOnly
//               style={styles.input}
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="aadhaarFront" style={styles.label}>
//               Aadhaar Front
//             </label>
//             <input
//               type="file"
//               id="aadhaarFront"
//               name="aadhaarFront"
//               onChange={handleFileChange}
//               style={styles.input}
//               accept="image/*"
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="aadhaarBack" style={styles.label}>
//               Aadhaar Back
//             </label>
//             <input
//               type="file"
//               id="aadhaarBack"
//               name="aadhaarBack"
//               onChange={handleFileChange}
//               style={styles.input}
//               accept="image/*"
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="licenseFront" style={styles.label}>
//               Driving License Front
//             </label>
//             <input
//               type="file"
//               id="licenseFront"
//               name="licenseFront"
//               onChange={handleFileChange}
//               style={styles.input}
//               accept="image/*"
//               required
//             />
//           </div>

//           <div style={styles.formGroup}>
//             <label htmlFor="licenseBack" style={styles.label}>
//               Driving License Back
//             </label>
//             <input
//               type="file"
//               id="licenseBack"
//               name="licenseBack"
//               onChange={handleFileChange}
//               style={styles.input}
//               accept="image/*"
//               required
//             />
//           </div>

//           <button type="submit" style={styles.button} disabled={!isFormValid}>
//             Submit Booking
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// // Styles for the form and page
// const styles = {
//   container: {
//     padding: "20px",
//     textAlign: "center",
//   },
//   form: {
//     maxWidth: "400px",
//     margin: "auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//   },
//   formGroup: {
//     marginBottom: "15px",
//   },
//   label: {
//     display: "block",
//     fontWeight: "bold",
//     marginBottom: "5px",
//     textAlign: "left",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "16px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "16px",
//     backgroundColor: "violet",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default Form1;
