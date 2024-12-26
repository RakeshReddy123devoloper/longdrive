// import React from 'react';
// import './index.css';
// import img1 from "../new-img/Xuv701.webp"
// const Choose = () => {
//   return (
//     <div className="why-choose-us">
//       <div className="features">
//         <h2>Why Choose Us?</h2>
//         <ul>
//           <li><strong>No Deposit</strong>: Start your journey without the financial commitment of a deposit.</li>
//           <li><strong>24/7 Breakdown Service</strong>: We’re here for you anytime, day or night.</li>
//           <li><strong>Unlimited Kilometers</strong>: Travel without limitations on distance.</li>
//           <li><strong>Choose Your Own Hours</strong>: Flexibility to drive when it suits you.</li>
//         </ul>
//       </div>
//       <div className="images">
//         <div className="car-image">
//           <img src={img1} alt="Car" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Choose;
import React from 'react';
import './index.css';
import img1 from "../new-img/Xuv701.webp";

const Choose = () => {
  return (
    <div className="why-choose-us">
      <div className="features">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>No Deposit</strong>: Start your journey without the financial commitment of a deposit.</li>
          <li><strong>24/7 Breakdown Service</strong>: We’re here for you anytime, day or night.</li>
          <li><strong>Unlimited Kilometers</strong>: Travel without limitations on distance.</li>
          <li><strong>Choose Your Own Hours</strong>: Flexibility to drive when it suits you.</li>
        </ul>
      </div>
      <div className="images">
        <div className="car-image">
          <img src={img1} alt="Car" />
        </div>
      </div>
    </div>
  );
};

export default Choose;
