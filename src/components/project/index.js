import React from "react";
import {
  ProjectContainer,
  ProjectContent,
  ProjectName,
  ProjectDescription,
} from "./style";

const Project = ({ name, description, links }) => (
  <ProjectContainer>
    <ProjectContent>
      <ProjectName>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectContent>
    <div className='links'>
      {links.link ? (
        <a className='link' href={links.link} target='_blank' rel='noreferrer'>
          Visit
        </a>
      ) : (
        ""
      )}

      {links.github ? (
        <a
          className='github'
          href={links.github}
          target='_blank'
          rel='noreferrer'>
          Github
        </a>
      ) : (
        ""
      )}
    </div>
  </ProjectContainer>
);

export default Project;
