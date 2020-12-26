import React from "react";
import Project from "../project/index";
import { ProjectsContainer, ProjectsDiv, ProjectsTitle, ProjectsTitleUnderline } from "./style";

const Projects = () => {
    const [data, setData] = React.useState([
        { name: "iLaD", description:"My personal website.", link:"https://github.com/iLaD08/ilad" }, 
        { name: "Clothing store", description:"A e-commerce website template", link:"https://clothingstore.now.sh/" },
        { name: "Todo app", description:"Todo App template by iLaD", link:"https://github.com/iLaD08/todo-app" },
        { name: "Random Meme", description:"A web app that generate memes from reddit posts.", link:"https://github.com/iLaD08/random-meme" },
        { name: "B3bola chat", description:"A simple real-time-chat app", link:"https://b3bolachat1.glitch.me/" },
        { name: "Monster Rolodex", description:"My first React app", link:"https://monsters-rolodex.ilad08.now.sh/" },
        { name: "Radio bot", description:"A Discord radio bot template.", link:"https://github.com/iLaD08/discord-radio-bot" },
        { name: "D&L mode", description:"A dark and light mode template.", link:"https://github.com/iLaD08/dark-and-light-mode" },
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