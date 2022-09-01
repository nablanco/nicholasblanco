import React from "react";
import styled from "styled-components";

import CVObject from "./CV.json";
import WorkHistory from "./WorkHistory";
// import Education from "./Education";

const StyledResume = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const StyledResumeSeparator = styled.div``;

const Resume = () => {
  let cv = CVObject;

  return (
    <StyledResume>
      <WorkHistory data={cv["Work-History"]} />
      <StyledResumeSeparator />
      {/* <Education data={cv.Education} /> */}
      <StyledResumeSeparator />
    </StyledResume>
  );
};

export default Resume;
