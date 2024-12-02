import React, { useState } from "react";
import "../../Styles/Skills/Skills.css";
import { SKILLS } from "../utils/data";
import Skillcard from "./SkillCard";
import SkillinfoCard from "./SkillinfoCard";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <Skillcard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelectSkill(item)}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillinfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
