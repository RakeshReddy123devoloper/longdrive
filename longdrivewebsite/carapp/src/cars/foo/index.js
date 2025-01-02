import React from "react";
import "./index1.css"; // Add custom CSS here
// import Footer from "../nextpage";

function footer2() {
  return (
   
    <footer className="footer-container">
      {/* About Section */}
      <div className="footer-about">
        <h2>Long Drive Cars App</h2>
        <p>
          Long Drive cars, a leading car rental company, offers rental cars for Long Drives in Hyderabad and various other cities. Currently operational in Hyderabad, Warangal, and Bangalore, Long Drive Cars offers a huge selection of cars ranging from luxury SUVs to sensible sedans.
        </p>
      </div>

      {/* Branches Section */}
      <div className="footer-branches">
        <h3>Our Branches</h3>
        <ul>
          <li>Hyderabad</li>
          <li>Warangal</li>
          <li>Vizag</li>
          <li>Vijayawada</li>
        </ul>
      </div>

      {/* Useful Links Section */}
      <div className="footer-links">
        <h3>Useful Links</h3>
        <ul>
          <li>Terms & Conditions</li>
          <li>Refund & Cancellation Policy</li>
          <div style={{display:"flex",gap:"1vw"}}>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="lg:size-8 size-9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="lg:size-8 size-9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="lg:size-8 size-9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="lg:size-8 size-9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
          </div>
        </ul>
      </div>

      {/* Social Media & Contact Info */}
      <div className="footer-contact">
        <h3>Social Media Links</h3>
        <p>Follow us on social media platforms for updates.</p>
        <h3>Contact Info</h3>
        <p>Telangana, AP: <a href="tel:9000478478">9000-478-478</a></p>
        <p>Bangalore: <a href="tel:9129122525">912-912-2525</a></p>

      </div>

      {/* Head Office Section */}
      <div className="footer-office">
        <h3>Head Office</h3>
        <p>Long Drive Cars, Pillar No 129, Main Road, beside Medipally, Medipally, Hyderabad, Telangana 500098</p>
      </div>
    </footer>
  );
}
export default footer2;