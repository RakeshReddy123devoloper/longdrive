import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          Have questions or need help? We'd love to hear from you.
        </p>
      </header>
      <main style={styles.main}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
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
  form: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "1rem",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    height: "100px",
    resize: "none",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 15px",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    marginTop: "20px",
  },
};

export default ContactUs;
