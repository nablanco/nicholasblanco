import React from "react";
import styled from "styled-components";

const StyledResumeSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;
  @media screen and (min-width: 768px) {
    width: 750px;
  }
`;
const SectionHeader = styled.div`
  color: #b267e6;
  font-size: 20px;
  font-weight: 400;
`;
const ExperienceContainer = styled.li`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  margin-top: 25px;
`;
const ExperienceTitle = styled.div`
  flex-basis: 35%;
  color: #ce9178;
`;
const ExperienceDescription = styled.div`
  flex-basis: 65%;
`;
const ExperienceCompany = styled.p``;
const ExperienceRole = styled.p``;
const ExperienceDate = styled.p``;
const ExperienceDescriptionItem = styled.li`
  margin-bottom: 10px;
  list-style-type: "> ";
`;

const WorkHistory = (data) => {
  const experience = data.data;
  return (
    <StyledResumeSection>
      <SectionHeader>Work Experience</SectionHeader>
      {experience.map(({ company, date, role, description }, index) => (
        <ExperienceContainer key={index}>
          <ExperienceTitle>
            <ExperienceRole>{role}</ExperienceRole>
            <ExperienceCompany>{company}</ExperienceCompany>
            <ExperienceDate>{date}</ExperienceDate>
          </ExperienceTitle>
          <ExperienceDescription>
            <ul>
              {description.map((item, index) => (
                <ExperienceDescriptionItem key={index}>
                  {item}
                </ExperienceDescriptionItem>
              ))}
            </ul>
          </ExperienceDescription>
        </ExperienceContainer>
      ))}
    </StyledResumeSection>
  );
};

export default WorkHistory;
