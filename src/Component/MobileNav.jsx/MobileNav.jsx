import React from "react";
import "./MobileNav.css";
import icon from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const navigateToContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src={icon} alt="Logo" className="logo" />
          <ul>
            <li>
              <Link className="menu-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="menu-item" to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="menu-item" to="/experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="menu-item" to="/project">
                Projects
              </Link>
            </li>
            <button className="contact-btn" onClick={navigateToContact}>
              Hire me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
