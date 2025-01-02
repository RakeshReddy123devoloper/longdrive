// import React from "react";
// function About() {
//     return <h1>About Us</h1>;
//   }
//   export default About;
import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>
          Discover who we are and what drives us to make your journeys memorable.
        </p>
      </header>
      <main style={styles.main}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.sectionContent}>
            At Long Drive Cars, our mission is to make every journey an unforgettable experience. 
            We believe in creating moments, exploring new horizons, and helping you find the perfect 
            car for your adventures.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Who We Are</h2>
          <p style={styles.sectionContent}>
            Established in 2020, Long Drive Cars is a team of travel enthusiasts, car experts, 
            and customer service professionals who share a passion for road trips. With a 
            wide range of vehicles, we ensure you find the right match for your needs.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
          <ul style={styles.list}>
            <li>Wide selection of well-maintained vehicles for every need.</li>
            <li>Affordable pricing with transparent policies.</li>
            <li>24/7 customer support for a stress-free experience.</li>
            <li>Flexible rental plans to suit short or long trips.</li>
          </ul>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Us</h2>
          <p style={styles.sectionContent}>
            Have questions or need assistance? Reach out to us at:
          </p>
          <p style={styles.contact}>
            Email: <a href="mailto:info@longdrivecars.com">info@longdrivecars.com</a>
          </p>
          <p style={styles.contact}>
            Phone: <a href="tel:+1234567890">+1 234 567 890</a>
          </p>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>Long Drive Cars &copy; 2025 | All Rights Reserved</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: "1.6",
  },
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "2.5rem",
  },
  subtitle: {
    margin: "10px 0",
    fontSize: "1.2rem",
  },
  main: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  section: {
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    margin: "10px 0",
  },
  sectionContent: {
    fontSize: "1rem",
  },
  list: {
    paddingLeft: "20px",
    listStyleType: "disc",
  },
  contact: {
    fontSize: "1rem",
    marginTop: "5px",
  },
  footer: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    marginTop: "20px",
  },
};

export default About;
