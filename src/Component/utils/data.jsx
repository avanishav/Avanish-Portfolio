import frontendIcon from "../../assets/Frontend.png";
import backendIcon from "../../assets/Backend.png";
import toolsIcon from "../../assets/tools.png";
import FoodApp from "../../assets/Food-App.png";
import studySync from "../../assets/studySync.png";
import NewsApp from "../../assets/News-App.png";

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
      { skill: "Webpack", percentage: "60%" },
      { skill: "Responsive Design", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: softSkillsIcon, // Update with the imported soft skills image
    skills: [
      { skill: "Problem-Solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "75%" },
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
  },
  {
    title: "Burger Food App",
    icon: FoodApp,
    Description:
      "A Food Delivery App built with React, Redux, and Bootstrap, featuring dynamic functionality, state management, and a responsive design for a seamless user experience.",
  },
  {
    title: "Study Sync",
    icon: studySync,
    Description:
      "Study Sync is a web-based platform designed using HTML and CSS, offering a clean and responsive interface for seamless learning and collaboration.",
  },
];
