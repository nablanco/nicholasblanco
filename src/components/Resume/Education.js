import React from "react";
import {
  StyledResumeSection,
  SectionHeader,
  ExperienceTitle,
} from "./ResumeContainers";

const Education = (data) => {
  const education = data.data;

  return (
    <StyledResumeSection>
      <SectionHeader>Education</SectionHeader>
      <ul>
        {education.map(
          ({ university, graduation, degree, location }, index) => (
            <li key={index} className="education-item">
              <div className="education-details">
                <ExperienceTitle>
                  <p className="education-university">{university}</p>
                  <p className="education-degree">{degree}</p>
                  <p className="education-graduation">
                    Graduated: {graduation}
                  </p>
                  <p className="education-description-location">{location}</p>
                </ExperienceTitle>
              </div>
            </li>
          )
        )}
      </ul>
    </StyledResumeSection>
  );
};

export default Education;
