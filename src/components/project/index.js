import React from "react";
import {
  ProjectContainer,
  ProjectContent,
  ProjectName,
  ProjectDescription,
} from "./style";

const Project = ({ name, description, link }) => (
  <ProjectContainer onClick={() => (window.location.href = `${link}`)}>
    <ProjectContent>
      <ProjectName>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectContent>
  </ProjectContainer>
);

export default Project;
