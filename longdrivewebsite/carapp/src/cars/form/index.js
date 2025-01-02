

// import React, { useState, useEffect } from "react";

// const cars = [
//   { name: "Maruthi Wagon R", price: 1488, fuel: "Petrol", seating: "5 Seater", transmission: "Manual", phone: "6304699210" },
//   // Add other cars here...
  
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



import axios from 'axios';
import React, { useState, useEffect } from "react";

const cars = [
  { name: "Maruthi Wagon R", price: 1488, fuel: "Petrol", seating: "5 Seater", transmission: "Manual", phone: "6304699210" },
  { name: "Toyota Corolla", price: 3000, fuel: "Petrol", seating: "5 Seater", transmission: "Automatic", phone: "6304699211" },
  { name: "Honda Civic", price: 3500, fuel: "Petrol", seating: "5 Seater", transmission: "Automatic", phone: "6304699212" },
  { name: "Hyundai Verna", price: 2500, fuel: "Diesel", seating: "5 Seater", transmission: "Manual", phone: "6304699213" },
  { name: "Ford Endeavour", price: 6000, fuel: "Diesel", seating: "7 Seater", transmission: "Automatic", phone: "6304699214" },
  { name: "BMW 5 Series", price: 8000, fuel: "Petrol", seating: "5 Seater", transmission: "Automatic", phone: "6304699215" },
  { name: "Audi A6", price: 9000, fuel: "Diesel", seating: "5 Seater", transmission: "Automatic", phone: "6304699216" },
  { name: "Mercedes-Benz E-Class", price: 9500, fuel: "Petrol", seating: "5 Seater", transmission: "Automatic", phone: "6304699217" },
  { name: "Tata Nexon", price: 2000, fuel: "Electric", seating: "5 Seater", transmission: "Automatic", phone: "6304699218" },
  { name: "Kia Seltos", price: 3500, fuel: "Petrol", seating: "5 Seater", transmission: "Manual", phone: "6304699219" },
];

const Form1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    bookingDateTime: "",
    selectedCar: "",
    fuelVariant: "Petrol",
    numberOfDays: 1,
    totalPayment: 0,
    aadhaarNumber: "",
    licenseFront: null,
    licenseBack: null,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (formData.selectedCar && formData.numberOfDays) {
      const selectedCar = cars.find((car) => car.name === formData.selectedCar);
      if (selectedCar) {
        const total = selectedCar.price * formData.numberOfDays;
        setFormData((prevData) => ({
          ...prevData,
          totalPayment: total,
        }));
      }
    }
  }, [formData.selectedCar, formData.numberOfDays]);

  useEffect(() => {
    // Validate all fields
    const errors = {};
    const isValidName = formData.name.trim().length > 0;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isValidMobile = /^[0-9]{10}$/.test(formData.mobile);
    const isValidBookingDateTime = formData.bookingDateTime.trim().length > 0;
    const isSelectedCarValid = formData.selectedCar.trim().length > 0;
    const isNumberOfDaysValid = formData.numberOfDays > 0;
    const isAadhaarValid = /^[0-9]{12}$/.test(formData.aadhaarNumber);

    if (!isValidName) errors.name = "Name is required.";
    if (!isValidEmail) errors.email = "Please enter a valid email address.";
    if (!isValidMobile) errors.mobile = "Please enter a valid 10-digit mobile number.";
    if (!isValidBookingDateTime) errors.bookingDateTime = "Booking date and time are required.";
    if (!isSelectedCarValid) errors.selectedCar = "Please select a car.";
    if (!isNumberOfDaysValid) errors.numberOfDays = "Number of days must be greater than zero.";
    if (!isAadhaarValid) errors.aadhaarNumber = "Please enter a valid 12-digit Aadhaar number.";

    setValidationErrors(errors);
    setIsFormValid(
      Object.keys(errors).length === 0 &&
      isValidName &&
      isValidEmail &&
      isValidMobile &&
      isValidBookingDateTime &&
      isSelectedCarValid &&
      isNumberOfDaysValid &&
      isAadhaarValid
    );
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   axios.post('https://carwebsite-c2012-default-rtdb.firebaseio.com/register.json', formData)
  .then(() => alert("submitted successfully"))
  .catch((error) => console.error("Error submitting data:", error));


    if (isFormValid) {
      console.log("Submitted Data:", formData);
      setFormSubmitted(true);
    }
  };

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  if (formSubmitted) {
    return (
      <div style={styles.container}>
        <h1>Your Booking is Confirmed!</h1>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1>Car Booking</h1>
      {!showForm ? (
        <button onClick={handleBookNowClick} style={styles.button}>
          Book Now
        </button>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={styles.input}
            />
            {validationErrors.name && <span style={styles.error}>{validationErrors.name}</span>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={styles.input}
            />
            {validationErrors.email && <span style={styles.error}>{validationErrors.email}</span>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="mobile" style={styles.label}>Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              style={styles.input}
            />
            {validationErrors.mobile && <span style={styles.error}>{validationErrors.mobile}</span>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="bookingDateTime" style={styles.label}>Date and Time of Booking</label>
            <input
              type="datetime-local"
              id="bookingDateTime"
              name="bookingDateTime"
              value={formData.bookingDateTime}
              onChange={handleInputChange}
              style={styles.input}
            />
            {validationErrors.bookingDateTime && <span style={styles.error}>{validationErrors.bookingDateTime}</span>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="selectedCar" style={styles.label}>Choose Vehicle</label>
            <select
              id="selectedCar"
              name="selectedCar"
              value={formData.selectedCar}
              onChange={handleInputChange}
              style={styles.input}
            >
              <option value="">Select a car</option>
              {cars.map((car) => (
                <option key={car.name} value={car.name}>
                  {car.name} - {car.fuel} - {car.seating}
                </option>
              ))}
            </select>
            {validationErrors.selectedCar && <span style={styles.error}>{validationErrors.selectedCar}</span>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="numberOfDays" style={styles.label}>Number of Days</label>
            <input
              type="number"
              id="numberOfDays"
              name="numberOfDays"
              value={formData.numberOfDays}
              onChange={handleInputChange}
              style={styles.input}
              min="1"
            />
            {validationErrors.numberOfDays && <span style={styles.error}>{validationErrors.numberOfDays}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Total Payment</label>
            <input
              type="text"
              value={`₹ ${formData.totalPayment}`}
              readOnly
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="aadhaarNumber" style={styles.label}>Aadhaar Number</label>
            <input
              type="text"
              id="aadhaarNumber"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              onChange={handleInputChange}
              style={styles.input}
            />
            {validationErrors.aadhaarNumber && <span style={styles.error}>{validationErrors.aadhaarNumber}</span>}
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="licenseFront" style={styles.label}>Driving License Front</label>
            <input
              type="file"
              id="licenseFront"
              name="licenseFront"
              onChange={handleFileChange}
              style={styles.input}
              accept="image/*"
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="licenseBack" style={styles.label}>Driving License Back</label>
            <input
              type="file"
              id="licenseBack"
              name="licenseBack"
              onChange={handleFileChange}
              style={styles.input}
              accept="image/*"
            />
          </div>

          <button type="submit" style={styles.button} disabled={!isFormValid}>
            Submit Booking
          </button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  form: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "violet",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
    display: "block",
  },
};

export default Form1;
