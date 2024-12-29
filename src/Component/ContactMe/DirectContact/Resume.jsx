import React from "react";
import resumepdf from "../../../assets/Avanish Singh.pdf";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <a href={resumepdf} download="Avanish_Singh_Resume.pdf">
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <FaDownload /> Download Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;
