import React from "react";
import "./ContactMe.css";
import ContactinfoCard from "./ContactInfoCard/ContactinfoCard";
import email from "../../assets/email.webp";
import github from "../../assets/github.png";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactinfoCard iconUrl={email} text="singhavanish720@gmail.com" />
          <ContactinfoCard
            iconUrl={github}
            text="https://github.com/avanishav"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
