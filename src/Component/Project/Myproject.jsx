import React, { useRef } from "react";
import "./Myproject.css";
import { PROJECT } from "../utils/data";
import Projectcard from "./Projectcard";
import Slider from "react-slick";

const Myproject = () => {
  // const sliderRef = useRef();
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToshow: 2,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 769,
  //       setting: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <section className="project-container">
      <h5>Projects</h5>
      <div className="card">
        {/* <Slider ref={sliderRef} {...settings}> */}
        {PROJECT.map((skills, index) => (
          <Projectcard
            icon={skills.icon}
            title={skills.title}
            Description={skills.Description}
            // technology={skills.Technology_used}
          />
        ))}
        {/* </Slider> */}
      </div>
    </section>
  );
};

export default Myproject;
