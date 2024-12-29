import frontendIcon from "../../assets/Frontend.png";
import backendIcon from "../../assets/Backend.png";
import toolsIcon from "../../assets/tools.png";
import FoodApp from "../../assets/Food-App.png";
import studySync from "../../assets/studySync.png";
import NewsApp from "../../assets/News-App.png";
import softSkillsIcon from "../../assets/softskill.png";
import Github from "../../assets/github1.png";
import Linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: frontendIcon,
    skills: [
      { skill: "HTML5", percentage: "90%" },
      { skill: "CSS3", percentage: "80%" },
      { skill: "JAVASCRIPT", percentage: "75%" },
      { skill: "REACT.JS", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: backendIcon, // Update with the imported backend image
    skills: [
      { skill: "Node.js", percentage: "70%" },
      { skill: "Express.js", percentage: "65%" },
    ],
  },
  {
    title: "Tools",
    icon: toolsIcon, // Update with the imported tools image
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "MySQl", percentage: "70%" },
      { skill: "Responsive Design", percentage: "70%" },
    ],
  },
  {
    title: "Programming Language",
    icon: softSkillsIcon, // Update with the imported soft skills image
    skills: [
      { skill: "C++", percentage: "80%" },
      { skill: "Python", percentage: "70%" },
      { skill: "JavaScript", percentage: "80%" },
    ],
  },
];

export const EXPERIENCE = [
  {
    title: "Web Development And Designing Intern",
    date: "April 2023 - May 2023",
    responsibilities: [
      "Designed responsive and visually appealing landing pages using HTML and CSS, enhancing user experience and driving a 25% increase in website traffic",
      "Developed and deployed professional portfolio websites to effectively showcase skills, projects, and accomplishments, resulting in a 40% boost in online engagement",
      "Created a fully functional Temperature Converter tool using HTML, CSS, and JavaScript, achieving seamless unit conversions and improving user interaction efficiency by 25%",
      "Collaborated on refining designs and functionalities to align with industry standards, ensuring high-quality and accessible web solutions",
      "Strengthened problem-solving and coding skills by debugging and optimizing web projects for performance and scalability",
    ],
  },
];

export const PROJECT = [
  {
    title: "Av News App",
    icon: NewsApp,
    Description:
      "The News App is a dynamic web application built with React and News API, offering users real-time news updates across various categories. Styled with Bootstrap",
    Demo: "",
    Source: "",
  },
  {
    title: "Burger Food App",
    icon: FoodApp,
    Description:
      "A Food Delivery App built with React, Redux, and Bootstrap, featuring dynamic functionality, state management, and a responsive design for a seamless user experience.",
    Demo: "",
    Source: "",
  },
  {
    title: "Study Sync",
    icon: studySync,
    Description:
      "Study Sync is a web-based platform designed using HTML and CSS, offering a clean and responsive interface for seamless learning and collaboration.",
    Demo: "https://avanishav.github.io/Study-sync/",
    Source: "https://github.com/avanishav/Study-sync",
  },
];

export const SOCIAL = [
  {
    title: "Github",
    url: "https://github.com/avanishav",
    src: Github,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/avanish-singhav/",
    src: Linkedin,
  },
  {
    title: "Twitter",
    url: "https://x.com/singhavanish720",
    src: twitter,
  },
];
