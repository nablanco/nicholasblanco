import React from "react";
import styled from "styled-components";
import projects from "./projectObject";

const StyledProjectsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0px 15px;
`;
const SectionHeader = styled.div`
  color: #b267e6;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
`;
const ProjectLink = styled.a`
  margin-bottom: 25px;
  text-decoration: none;
  /* position: relative; */
`;
const ProjectFigure = styled.figure`
  display: flex;
  flex-flow: row nowrap;
`;
const ProjectImageContainer = styled.div`
  flex-basis: 50%;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
const ProjectCaption = styled.figcaption`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  /* padding: 15px 15px; */
  background-color: #292929;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const ProjectCaptionText = styled.div`
  font-size: 16px;
  margin-left: 10px;
  margin-right: 5px;
  color: #54d9be;
`;

const Projects = () => {
  return (
    <StyledProjectsContainer>
      <SectionHeader>Projects</SectionHeader>
      {projects.map((project, index) => {
        return (
          <ProjectLink key={index} href={project.link}>
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
  );
};

export default Projects;
