import React from "react";
import styled from "styled-components";
import {
  StyledExperienceSection,
  SectionHeader,
  ExperienceTitle,
} from "./ResumeContainers";
const WorkHistory = (data) => {
  const experience = data.data;

  return (
    <StyledExperienceSection>
      <SectionHeader>Work Experience</SectionHeader>
      <ul>
        {experience.map(
          ({ company, date, role, description, location }, index) => (
            <li key={index} className="experience-item">
              <div className="experience-details">
                <ExperienceTitle>
                  <p className="experience-company">{company}</p>
                  <p className="experience-role">{role}</p>
                  <p className="experience-date">{date}</p>
                </ExperienceTitle>
                <div className="experience-description-div">
                  <div className="experience-description">
                    <ul>
                      {description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="experience-description-location">{location}</p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </StyledExperienceSection>
  );
};

export default WorkHistory;
