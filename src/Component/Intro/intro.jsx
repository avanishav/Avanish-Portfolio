import React from "react";
import myphoto from "../../assets/myphoto2.png";
import reactjpg from "../../assets/react-logo.webp";
import html from "../../assets/html5.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import express from "../../assets/expressjs.png";
import node from "../../assets/nodejs.png";
import "../Intro/intro.css";

const intro = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>
          Hi, I'm <br />
          Avanish Singh
        </h2>
        <p>
          passionate Mern Stack Developer | Transforming Ideas intto Seamless
          and Visually Stunnning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon-backend">
            <div className="tech-icon">
              <img src={express} alt="" />
            </div>
            <div className="tech-icon">
              <img src={node} alt="" />
            </div>
          </div>
          <img src={myphoto} alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src={html} alt="" />
          </div>
          <div className="tech-icon">
            <img src={css} alt="" />
          </div>
          <div className="tech-icon">
            <img src={javascript} alt="" />
          </div>
          <div className="tech-icon">
            <img src={reactjpg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default intro;
