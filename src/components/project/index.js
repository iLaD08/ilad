import React from "react";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
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
    <div className="links">
      {links.link ? (
        <a className="link" href={links.link} target="_blank" rel="noreferrer">
          <LinkIcon className="link-svg" />
          Visit
        </a>
      ) : (
        ""
      )}

      {links.github ? (
        <a
          className="github"
          href={links.github}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
          Github
        </a>
      ) : (
        ""
      )}
    </div>
  </ProjectContainer>
);

export default Project;
