import React from "react";
import styled from "styled-components";
import projects from "./projectObject";

const StyledProjectsSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0px 15px;
`;
const SectionHeader = styled.div`
  color: #b267e6;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    margin-bottom: 35px;
    font-size: 24px;
  }
`;
const StyledProjectsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  @media screen and (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
`;
const ProjectLink = styled.a`
  margin-bottom: 15px;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    flex-basis: 48%;
    margin-bottom: 41px;
  }
`;
const ProjectFigure = styled.figure`
  display: flex;
  flex-flow: row nowrap;
  @media screen and (min-width: 768px) {
    flex-flow: column wrap;
  }
`;
const ProjectImageContainer = styled.div`
  flex-basis: 50%;
`;

const ProjectImage = styled.img`
  display: block;
  width: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  vertical-align: center;

  @media screen and (min-width: 768px) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0px;
  }
`;
const ProjectCaption = styled.figcaption`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  background-color: #292929;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  @media screen and (min-width: 768px) {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 0px;
    line-height: 50px;
  }
`;
const ProjectCaptionText = styled.div`
  font-size: 16px;
  margin-left: 10px;
  margin-right: 5px;
  color: #54d9be;
`;

const Projects = () => {
  return (
    <StyledProjectsSection>
      <SectionHeader>Projects</SectionHeader>
      <StyledProjectsContainer>
        {projects.map((project, index) => {
          return (
            <ProjectLink
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectFigure>
                <ProjectImageContainer>
                  <ProjectImage
                    src={project.screenshot}
                    alt={`Screenshot of ${project.name}`}
                  />
                </ProjectImageContainer>
                <ProjectCaption>
                  <ProjectCaptionText>{project.name}</ProjectCaptionText>
                </ProjectCaption>
              </ProjectFigure>
            </ProjectLink>
          );
        })}
      </StyledProjectsContainer>
    </StyledProjectsSection>
  );
};

export default Projects;
