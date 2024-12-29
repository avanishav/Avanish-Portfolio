import React, { useRef } from "react";
import "./Myproject.css";
import { PROJECT } from "../utils/data";
import Projectcard from "./Projectcard";
import Slider from "react-slick";

const Myproject = () => {
  return (
    <section className="project-container">
      <h5>Projects</h5>
      <div className="card">
        {PROJECT.map((skills, index) => (
          <Projectcard
            key={index}
            icon={skills.icon}
            title={skills.title}
            Description={skills.Description}
            Demo={skills.Demo}
            Source={skills.Source}
          />
        ))}
      </div>
    </section>
  );
};

export default Myproject;
