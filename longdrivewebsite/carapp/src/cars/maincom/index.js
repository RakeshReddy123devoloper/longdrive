
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import "./app2.css";

// function App2() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo">Long drive cars</div>
//         <button className="toggle-button" onClick={toggleMenu}>
//           ☰
//         </button>
//         <ul className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
//           <li>
//             <Link to="/" onClick={() => setIsMenuOpen(false)}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/services" onClick={() => setIsMenuOpen(false)}>
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={() => setIsMenuOpen(false)}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// function Home() {
//   return <h1>Welcome to the Home Page</h1>;
// }

// function Services() {
//   return <h1>Our Services</h1>;
// }

// function About() {
//   return <h1>About Us</h1>;
// }

// function Contact() {
//   return <h1>Contact Us</h1>;
// }

// export default App2;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../homecom/index";
import "./app2.css"
import  img1 from '../new-img/logo1.jpg'
import Footer from "../nextpage/index";
// import Details from "../cards/index";
function App2() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/services" element={<Blog/>} />
          <Route path="/about" element={<Aboutus/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer/>} />
          <Route>               </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img
          src={img1}
          alt="Logo"
          className="navbar-logo"
        />
        <div className="logo">Long Drive Cars</div>
        <button className="toggle-button" onClick={toggleMenu}>
          ☰
        </button>
        <ul className= {`menu ${isMenuOpen ? "menu-open" : ""}`}>
          <li>
            <Link className="home1" to="*" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
        
          </li>
          <li>
            <Link className="home1" to="/services" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link className="home1" to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link className="home1" to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact  
            </Link>
            
          </li>
        </ul>
      
      </div>
    </nav>
  );
}

// function Home() {
//   return <h1>Welcome to the Home Page</h1>;
// }

function Blog() {
  return <h1>Our Services</h1>;
}

function Aboutus() {
  return <h1>About Us</h1>;
}

function Contact() {
  return <h1>Contact Us</h1>;
}

export default App2;
