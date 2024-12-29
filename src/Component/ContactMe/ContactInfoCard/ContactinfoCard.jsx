import React from "react";
import "./ContactinfoCard.css";
import { Link } from "react-router-dom";

const ContactinfoCard = ({ title, url, src }) => {
  return (
    <>
      <div className="contact-details-card">
        <div className="icon">
          <img src={src} alt={title} />
        </div>
        <a href={url} target="blank">
          {title}
        </a>
      </div>
    </>
  );
};

export default ContactinfoCard;
