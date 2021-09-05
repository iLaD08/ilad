import React from "react";
import Project from "../../components/project/index";
import {
  ProjectsContainer,
  ProjectsDiv,
  ProjectsTitle,
  ProjectsTitleUnderline,
} from "./style";

const ProjectPage = () => {
  const [data] = React.useState([
    {
      name: "iLaD",
      description: "My personal website.",
      links: {
        link: "http://ilad.now.sh/",
        github: "https://github.com/iLaD08/ilad",
      },
    },
    {
      name: "ShareCode",
      description:
        "An open source website that make developers share code with each other.",
      links: {
        link: "http://share-code.vercel.app/",
        github: "https://github.com/ShareCode-org",
      },
    },
    {
      name: "Memeshare",
      description: "An open source social media to share memes!",
      links: {
        link: "https://meme-share.netlify.app/",
        github: "https://github.com/MemeShare-org/",
      },
    },
    {
      name: "react-weather-app",
      description: "A simple react app that shows you some weather info.",
      links: {
        link: "react-weather-app-demo.vercel.app/",
        github: "https://github.com/iLaD08/react-weather-app",
      },
    },
    {
      name: "Clothing store",
      description: "A e-commerce website template",
      links: {
        link: "https://clothingstore.now.sh/",
        github: "",
      },
    },
    {
      name: "Protip",
      description: "A discord bot designed to give helpful advice.",
      link: "https://github.com/IMAD200",
      links: {
        link: "http://protip.now.sh/",
        github: "https://github.com/IMAD200",
      },
    },
    {
      name: "todo-app",
      description: "Todo App template by iLaD",
      links: {
        link: "https://ilad08.github.io/todo-app/",
        github: "https://github.com/iLaD08/todo-app",
      },
    },
    {
      name: "b3bola-chat",
      description: "A simple real-time-chat app",
      links: {
        link: "https://b3bola-chat.herokuapp.com/",
        github: "https://github.com/iLaD08/b3bola-chat",
      },
    },
    {
      name: "Monster Rolodex",
      description: "My first React app",
      links: {
        link: "https://monsters-rolodex.ilad08.now.sh/",
        github: "",
      },
    },
    {
      name: "discord-radio-bot",
      description: "A Discord radio bot template.",
      links: {
        link: "",
        github: "https://github.com/iLaD08/discord-radio-bot",
      },
    },
    {
      name: "dark-and-light-mode",
      description: "A dark and light mode template.",
      links: {
        link: "https://dark-and-light-mode.vercel.app/",
        github: "https://github.com/iLaD08/dark-and-light-mode",
      },
    },
  ]);

  React.useEffect(() => (document.title = "iLaD | Projects"), []);

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsTitleUnderline />
      <ProjectsDiv>
        {data.map((data, index) => (
          <Project
            key={index}
            name={data.name}
            description={data.description}
            links={data.links}
          />
        ))}
      </ProjectsDiv>
    </ProjectsContainer>
  );
};

export default ProjectPage;
