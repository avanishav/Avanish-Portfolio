import React from "react";
import "../../Styles/Skills/SkillCard.css";

const Skillcard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <img src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default Skillcard;
