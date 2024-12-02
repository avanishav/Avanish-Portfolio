import React from "react";
import "./ContactinfoCard.css";
import { Link } from "react-router-dom";

const ContactinfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ContactinfoCard;
