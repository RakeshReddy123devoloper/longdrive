
// import React, { useState } from "react";
// import './index.css'; // Include the responsive CSS
// import axios from "axios";
// function Mobile1() {
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setMobileNumber(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//     .post('https://carwebsite-c2012-default-rtdb.firebaseio.com/register.json', setMobileNumber)
//     .then(() => {
//       alert("Submitted successfully");
//       setIsSubmitting(true); // If form is valid and submitted, show confirmation
//     })
//     .catch((error) => {
//       console.error("Error submitting data:", error);
//       alert("There was an error submitting the form.");
//     });
//     if (!mobileNumber) {
//       setMessage("Please enter a valid mobile number.");
//       return;
//     }

//     setIsSubmitting(true);
//     // Simulate a callback request by using a timeout
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setMessage("We will call you back shortly!");
//     }, 2000); // Simulate an API call or backend request

//     // Here, you would typically send the mobile number to your backend or an API
//     // Example: axios.post('/api/callback', { mobileNumber })
//   };

//   return (
//     <div className="callback-container">
//       <h2>Can't find the perfect car?</h2>
//       <p>Let us help you on a quick call</p>

//       <form onSubmit={handleSubmit}>
//         <div className="form-wrapper">
//           <div className="input-group">
//             <label htmlFor="mobileNumber">Enter mobile number</label>
//             <input
//               type="tel"
//               id="mobileNumber"
//               value={mobileNumber}
//               onChange={handleChange}
//               placeholder="Enter your mobile number"
//               required
//             />
//           </div>

//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Submitting..." : "Get Callback"}
//           </button>
//         </div>
//       </form>

//       {message && <p className="response-message">{message}</p>}
//     </div>
//   );
// }

// export default Mobile1;


import React, { useState } from "react";
import './index.css'; // Include the responsive CSS
import axios from "axios";

function Mobile1() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate mobile number before submitting
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true); // Start submission process
    setMessage(""); // Clear any previous messages

    // Submit data to Firebase
    axios
      .post(
        "https://carwebsite-c2012-default-rtdb.firebaseio.com/CallBackRequestData.json",
        { mobileNumber } // Send the mobile number in an object
      )
      .then(() => {
        setMessage("Submitted successfully! We will call you back shortly.");
        setMobileNumber(""); // Clear the input field
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        setMessage("There was an error submitting the form. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false); // Reset submission state
      });
  };

  return (
    <div className="callback-container custom-cursor">
      <h2>Can't find the perfect car?</h2>
      <p>Let us help you on a quick call</p>

      <form  onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div className="input-group">
            <label htmlFor="mobileNumber">Enter mobile number</label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Get Callback"}
          </button>
        </div>
      </form>

      {message && <p className="response-message">{message}</p>}
    </div>
  );
}

export default Mobile1;
