
import React, { useState, useEffect } from "react";
import './index.css'
import { motion, AnimatePresence } from "framer-motion";
import vid1 from "../new-img/vid1.mp4";
import vid2 from "../new-img/vid2.mp4";
import vid3 from "../new-img/vid3.mp4";
import vid4 from "../new-img/vid4.mp4";
import vid5 from "../new-img/vid5.mp4";

const cars = [
  { id: 1, name: "Car 1", video: vid1 },
  { id: 2, name: "Car 2", video: vid2 },
  { id: 3, name: "Car 3", video: vid3 },
  { id: 4, name: "Car 4", video: vid4 },
  { id: 5, name: "Car 5", video: vid5 },
];

const CardSlider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        <AnimatePresence>
        <motion.div
            key={cars[currentIndex].id}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="slide"
          >
            <video
              src={cars[currentIndex].video}
              autoPlay
              loop
              muted
              className="video"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <h3 className="slider-title">{cars[currentIndex].name}</h3>
    </div>
  );
};

export default CardSlider1;
