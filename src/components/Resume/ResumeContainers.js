import styled from "styled-components";

const StyledResumeSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 20px;
  padding: 15px;
  @media screen and (min-width: 768px) {
    width: 750px;
  }
`;

const SectionHeader = styled.div`
  color: #b267e6;
  font-weight: 700;
`;

const ResumeSeparator = styled.div``;

const ExperienceTitle = styled.div``;

export { StyledResumeSection, SectionHeader, ResumeSeparator, ExperienceTitle };
