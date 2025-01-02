// import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const ContactUs = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         // height: '100vh',
//         padding: '20px',
//         backgroundColor:" #074799"
//       }}
//     >
//       {/* Main heading */}
//       <h1 style={{ textAlign: 'center' }}>Get in Touch with Us to Arrange Your Booking</h1>
//       <h3 style={{ textAlign: 'center' }}>CONTACT US NOW</h3>

//       {/* Contact options container */}
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           marginTop: '20px',
//           width: '100%',
//           maxWidth: '400px',
//         }}
//       >
//         {/* WhatsApp Button */}
//         <a
//           href="https://wa.me/1234567890"  // Replace with your WhatsApp number
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{
//             width: '100%',
//             marginBottom: '10px',
//             textDecoration: 'none',
//           }}
//         >
//           <button
//             style={{
//               backgroundColor: '#25d366', // WhatsApp color
//               color: 'white',
//               padding: '15px',
//               borderRadius: '5px',
//               border: 'none',
//               fontSize: '16px',
//               width: '100%',
//               cursor: 'pointer',
//             }}
//           >
//             WhatsApp
//           </button>
//         </a>

//         {/* Call Us Button */}
//         <a
//           href="tel:+1234567890"  // Replace with your phone number
//           style={{
//             width: '100%',
//             textDecoration: 'none',
//           }}
//         >
//           <button
//             style={{
//               backgroundColor: '#007bff', // Blue color
//               color: 'white',
//               padding: '15px',
//               borderRadius: '5px',
//               border: 'none',
//               fontSize: '16px',
//               width: '100%',
//               cursor: 'pointer',
//             }}
//           >
//             Call Us
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;





import React from 'react';

// Define custom colors
const colors = {
  primaryBackground: '#074799',
  secondaryBackground: '#25d366', // WhatsApp color
  buttonCallBackground: '#007bff',
  textPrimary: '#ffffff',
  textSecondary: '#f2f2f2',
};

const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: colors.primaryBackground, // Use primary background color
      }}
    >
      {/* Main heading */}
      <h1 style={{ textAlign: 'center', color: colors.textPrimary }}>
        Get in Touch with Us to Arrange Your Booking
      </h1>
      <h3 style={{ textAlign: 'center', color: colors.textSecondary }}>
        CONTACT US NOW
      </h3>

      {/* Contact options container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '100%',
            marginBottom: '10px',
            textDecoration: 'none',
          }}
        >
          <button
            style={{
              backgroundColor: colors.secondaryBackground, // Use WhatsApp color
              color: colors.textPrimary,
              padding: '15px',
              borderRadius: '5px',
              border: 'none',
              fontSize: '16px',
              width: '100%',
              cursor: 'pointer',
            }}
          >
            WhatsApp
          </button>
        </a>

        {/* Call Us Button */}
        <a
          href="tel:+1234567890" // Replace with your phone number
          style={{
            width: '100%',
            textDecoration: 'none',
          }}
        >
          <button
            style={{
              backgroundColor: colors.buttonCallBackground, // Use button call background color
              color: colors.textPrimary,
              padding: '15px',
              borderRadius: '5px',
              border: 'none',
              fontSize: '16px',
              width: '100%',
              cursor: 'pointer',
            }}
          >
            Call Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
