import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Skills from "./Component/Skills/Skills.jsx";
import Myproject from "./Component/Project/Myproject.jsx";
import Intro from "./Component/Intro/intro.jsx";
import WorkExperience from "./Component/WorkExperience/WorkExperience.jsx";
import ContactMe from "./Component/ContactMe/ContactMe.jsx";
import "./main.css";
import Home from "./Routes/Home.jsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/skills", element: <Skills /> },
      { path: "/project", element: <Myproject /> },
      { path: "/experience", element: <WorkExperience /> },
      { path: "/Contact", element: <ContactMe /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
