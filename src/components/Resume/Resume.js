import React from "react";

// import "./Resume.scss";
import CVObject from "./CV.json";
import WorkHistory from "./workHistory";
import Education from "./Education";

const Resume = () => {
  let cv = CVObject;

  return (
    <div id="resume" className="resume-div">
      <div className="resume-separator"></div>
      <WorkHistory data={cv["Work-History"]} />
      <div className="resume-separator"></div>
      <Education data={cv.Education} />=<div className="resume-separator"></div>
    </div>
  );
};

export default Resume;
