import React from "react";
import Intro from "../Component/Intro/intro";
import ContactMe from "../Component/ContactMe/ContactMe";
import Skills from "../Component/Skills/Skills";
import WorkExperience from "../Component/WorkExperience/WorkExperience";
import Myproject from "../Component/Project/Myproject";

const Home = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Myproject />
      <WorkExperience />
      <ContactMe />
    </div>
  );
};

export default Home;
