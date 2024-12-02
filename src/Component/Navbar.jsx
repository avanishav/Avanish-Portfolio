import React, { useState } from "react";
import "../Styles/Navbar.css";
import logo from "../assets/logo.png";
import MobileNav from "./MobileNav.jsx/MobileNav"; // Fixed path issue
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src={logo} alt="Logo" className="logo" />
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
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
