
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Ensure this path is correct

const InstantBooking = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/form1");
  };

  return (
    <div style={styles.container}>
      <h1>Instant Booking</h1>
      <p>Click below to book your ride now!</p>

      {/* Instant Booking Button */}
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleNavigation}>
          Book Now
        </button>
      </div>
    </div>
  );
};

// Styling for the container and button
const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor:"lightgrey"
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    backgroundColor: 'violet',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default InstantBooking; // Exporting App component for routing