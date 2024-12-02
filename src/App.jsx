import "./App.css";
import Navbar from "./Component/Navbar";
import Intro from "./Component/Intro/intro";
import Skills from "./Component/Skills/Skills";
import WorkExperience from "./Component/WorkExperience/WorkExperience";
import ContactMe from "./Component/ContactMe/ContactMe";
import Footer from "./Component/Footer/Footer";
import Myproject from "./Component/Project/Myproject";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
