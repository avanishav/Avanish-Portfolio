import React from "react";
import "./Projectcard.css";
import { Link } from "react-router-dom";

const Projectcard = ({ icon, title, Description, Demo, Source }) => {
  return (
    <div className="project-card">
      <img src={icon} alt="" />
      <div className="project-content">
        <h3>{title}</h3>
        <p className="description">{Description}</p>
      </div>
      <div className="btn-div">
        <Link to={Demo}>Demo</Link>
        <Link to={Source}>Source</Link>
      </div>
    </div>
  );
};

export default Projectcard;
