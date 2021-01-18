import React from "react";
import Project from "../../components/project/index";
import { ProjectsContainer, ProjectsDiv, ProjectsTitle, ProjectsTitleUnderline } from "./style";

const ProjectPage = () => {
    const [data, setData] = React.useState([
        { name: "iLaD", description:"My personal website.", link:"https://github.com/iLaD08/ilad" }, 
        { name: "Clothing store", description:"A e-commerce website template", link:"https://clothingstore.now.sh/" },
        { name: "FL-Network", description:"A project that i made for my dad", link:"https://github.com/FL-Network" },
        { name: "Protip", description:"A discord bot designed to give helpful advice.", link:"https://github.com/IMAD200" },
        { name: "Todo app", description:"Todo App template by iLaD", link:"https://github.com/iLaD08/todo-app" },
        { name: "Random Meme", description:"A web app that generate memes from reddit posts.", link:"https://github.com/iLaD08/random-meme" },
        { name: "B3bola chat", description:"A simple real-time-chat app", link:"https://b3bolachat1.glitch.me/" },
        { name: "Monster Rolodex", description:"My first React app", link:"https://monsters-rolodex.ilad08.now.sh/" },
        { name: "Radio bot", description:"A Discord radio bot template.", link:"https://github.com/iLaD08/discord-radio-bot" },
        { name: "D&L mode", description:"A dark and light mode template.", link:"https://github.com/iLaD08/dark-and-light-mode" },
        { name: "", description:"", link:"" },
        { name: "", description:"", link:"" }
    ]);

    return (
        <ProjectsContainer id="projects">
            <ProjectsTitle>Projects</ProjectsTitle>
            <ProjectsTitleUnderline/>
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

export default ProjectPage;