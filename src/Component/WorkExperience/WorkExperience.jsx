import React, { useRef } from "react";
import "./WorkExperience.css";
import { EXPERIENCE } from "../utils/data";
import ExperienceCard from "./ExperienceCard";
import Slider from "react-slick";

const WorkExperience = () => {
  return (
    <section className="experience-container">
      <h5>Work Experience</h5>
      <div className="experience-content">
        {EXPERIENCE.map((item) => (
          <ExperienceCard key={item.title} details={item} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
