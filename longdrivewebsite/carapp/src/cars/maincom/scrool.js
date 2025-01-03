import React from 'react';

function App1() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif',  }}>
      {/* Scrolling Text */}
      <div
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'relative',
    
          height: '60px',
          // backgroundColor: '#8174A0',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            animation: 'scroll 30s linear infinite',
            fontSize: '20px',
            paddingLeft: '10%',
            width: '200%',
          }}
        >
          <ul
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: '5vw',
              color: 'black',
              margin: 0,
              padding: 0,
              listStyleType: 'none',
            }}
          >
            <li>Book Now</li>
            <li>Neatly Washed</li>
            <li>No Deposit</li>
            <li>Unlimited Kilometers</li>
            <li>Choose Your Favorite Color Car</li>
            <li>Dzire ₹1992 per day</li>
            <li>Pay 10% Advance and Book</li>
            <li>24/7 Customer Service</li>
            <li>Lowest Price Guaranteed</li>
            <li>Check Original Car Photos</li>
            <li>Choose Your Own Hours</li>
          </ul>
        </div>
      </div>

      {/* Custom styles */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(40%); }
            100% { transform: translateX(-40%); }
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            div[style*="height: 60px"] {
              height: 50px; /* Adjust container height */
            }

            ul {
              font-size: 16px; /* Adjust text size */
              gap: 8vw; /* Adjust spacing between items */
            }
          }

          @media (max-width: 480px) {
            div[style*="height: 60px"] {
              height: 40px; /* Further reduce container height */
            }

            ul {
              font-size: 14px; /* Smaller text for mobile */
              gap: 6vw; /* Reduce spacing */
            }
          }
        `}
      </style>

      {/* Footer Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-around',
          backgroundColor:"#A888B5",
          color: 'white',
          height: '10vh',
          alignItems: 'center',
          // marginTop: '-3vh',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '18px',
          }}
        >
          For Booking Now
        </h2>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '18px',
          }}
        >
          <a
            style={{ textDecoration: 'none', color: 'white' }}
            href="tel:6304699210"
          >
            6304699210
          </a>
        </h2>
      </div>
    </div>
  );
}

export default App1;
