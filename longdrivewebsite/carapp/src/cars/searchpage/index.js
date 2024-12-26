

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
// import { useNavigate } from "react-router-dom";
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
      phone: "6304699210", // Example phone number
    },
    {
      name: "Renault Kwid",
      price: "₹ 1488/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Manual",
      image: car2,
      phone: "9948638817", // Example phone number
    },
    {
      name: "Renault Kiger",
      price: "₹ 1680/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Manual",
      image: car3,
      phone: "8465084918", // Example phone number
    },
    {
      name: "Maruthi Swift",
      price: "₹ 1680/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Manual",
      image: car4,
      phone: "9848734272", // Example phone number
    },
    {
      name: "Tata Punch",
      price: "₹ 1776/day",
      fuel: "Petrol",
      seating: "5 Seater",
      transmission: "Manual",
      image: car5,
      phone: "6304699210", // Example phone number
    },
    {
      name: "Hyundai i20",
      price: "₹ 1800/day",
      fuel: "Diesel",
      seating: "5 Seater",
      transmission: "Automatic",
      image: car6,
      phone: "6304699210", // Example phone number
    },
    {
      name: "Toyota Innova Crysta",
      price: "₹ 2500/day",
      fuel: "Diesel",
      seating: "7 Seater",
      transmission: "Automatic",
      image: car7,
      phone: "6304699210", // Example phone number
    },
    {
      name: "Kia Seltos",
      price: "₹ 2800/day",
      fuel: "Diesel",
      seating: "5 Seater",
      transmission: "Automatic",
      image: car8,
      phone: "6304699210", // Example phone number
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
    },
  ]);

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter cars based on search query
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
          <div className="car-card" key={index}
           >
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
            <p>Fuel: {car.fuel}</p>
            <p>Seating: {car.seating}</p>
            <p>Transmission: {car.transmission}</p>
            <div className="buttons">
              <a
                href={`https://wa.me/91${car.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                Whatsapp
              </a>
              <a
                href={`tel:${car.phone}`}
                className="callus-button"
              >
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
