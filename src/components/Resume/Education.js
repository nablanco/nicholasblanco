import React from "react";
import {
  StyledExperienceSection,
  SectionHeader,
  ExperienceTitle,
} from "./ResumeContainers";

const Education = (data) => {
  const education = data.data;

  return (
    <StyledExperienceSection>
      <SectionHeader>Education</SectionHeader>
      <ul>
        {education.map(
          ({ university, graduation, degree, location }, index) => (
            <li key={index} className="education-item">
              <div className="education-details">
                <div className="education-title">
                  <p className="education-university">{university}</p>
                  <p className="education-degree">{degree}</p>
                  <p className="education-graduation">
                    Graduated: {graduation}
                  </p>
                  <p className="education-description-location">{location}</p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </StyledExperienceSection>
  );
};

export default Education;
