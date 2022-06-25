import React from "react";

// import "./Resume.scss";
import CVObject from "../../CV.json";
import Experience from "./Experience";
import Education from "./Education";

const Resume = () => {
  let cv = CVObject;
  // console.log(typeof cv.Experience);

  return (
    <div id="resume" className="resume-div">
      <div className="resume-separator"></div>

      <div className="resume-header"> Experience </div>

      <Experience data={cv.Experience} />

      <div className="resume-separator"></div>

      <div className="resume-header">Education</div>

      <Education data={cv.Education} />

      <div className="resume-separator"></div>
    </div>
  );
};

export default Resume;
