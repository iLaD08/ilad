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
    <div className='links'>
      <a href='https://www.google.com' target='_blank' rel='noreferrer'>
        Visit
      </a>
      <a href='https://www.google.com' target='_blank' rel='noreferrer'>
        Github
      </a>
    </div>
  </ProjectContainer>
);

export default Project;
