
import React, { useState } from "react";
import './index.css'; // Include the responsive CSS

function Mobile1() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mobileNumber) {
      setMessage("Please enter a valid mobile number.");
      return;
    }

    setIsSubmitting(true);
    // Simulate a callback request by using a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage("We will call you back shortly!");
    }, 2000); // Simulate an API call or backend request

    // Here, you would typically send the mobile number to your backend or an API
    // Example: axios.post('/api/callback', { mobileNumber })
  };

  return (
    <div className="callback-container">
      <h2>Can't find the perfect car?</h2>
      <p>Let us help you on a quick call</p>

      <form onSubmit={handleSubmit}>
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
