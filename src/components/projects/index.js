import React from "react";
import Project from "../project/index";
import { ProjectsContainer, ProjectsDiv, ProjectsTitle, ProjectsTitleUnderline } from "./style";

const Projects = () => {
    const [data, setData] = React.useState([
        { name: "ilad", description:"My personal website.", link:"https://github.com/iLaD08/ilad" },
        { name: "todo-app", description:"Todo App template by iLaD", link:"https://github.com/iLaD08/todo-app" },
        { name: "D&L mode", description:"A dark and light mode template.", link:"https://github.com/iLaD08/dark-and-light-mode" },
        { name: "Monster Rolodex", description:"My first React app", link:"https://monsters-rolodex.ilad08.now.sh/" },
        { name: "Radio bot", description:"A Discord radio bot template.", link:"https://github.com/iLaD08/discord-radio-bot" },
        { name: "", description:"", link:"" }
    ]);

    return (
        <ProjectsContainer id="projects">
            <ProjectsTitle>Projects</ProjectsTitle>
            <ProjectsTitleUnderline></ProjectsTitleUnderline>
            <ProjectsDiv>
                {data.map((data, index) => (
                    <Project
                     key={index}
                     name={data.name}
                     description={data.description}
                     link={data.link}
                    />
                ))}
            </ProjectsDiv>
        </ProjectsContainer>
    )
};

export default Projects;