import React from "react";
import "./ContactMe.css";
import ContactinfoCard from "./ContactInfoCard/ContactinfoCard";
import email from "../../assets/email.webp";
import github from "../../assets/github.png";
import Resume from "./DirectContact/Resume";
import { SOCIAL } from "../utils/data";
import ContactForm from "./ContactForm/ContactForm";
import { IoIosSend } from "react-icons/io";
import { MdAddCall } from "react-icons/md";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div className="contact-content-card" style={{ flex: 1 }}>
          <div className="contact-mail">
            <h4>
              <IoIosSend /> Singhavanish720@gmail.com
            </h4>
            <h4>
              <MdAddCall /> 9120311875
            </h4>
          </div>
          <div className="social-madia-connect">
            {SOCIAL.map((skills, item) => (
              <ContactinfoCard
                key={item}
                title={skills.title}
                url={skills.url}
                src={skills.src}
              />
            ))}
          </div>
          <Resume />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
