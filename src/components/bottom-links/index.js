import React from "react";
import Instagram from "../../assests/instagram.png";
import Twitter from "../../assests/twitter.png";
import Github from "../../assests/github.png";
import { BottomLinksDivContainer, BottomLink, BottomLinkImg } from "./style";

const BottomLinks = () => {
  const [links] = React.useState([
    { name: "Github", image: `${Github}`, link: "https://github.com/iLaD08" },
    {
      name: "Instagram",
      image: `${Instagram}`,
      link: "https://www.instagram.com/ilad.08/",
    },
    {
      name: "Twitter",
      image: `${Twitter}`,
      link: "https://twitter.com/MrHunter2008",
    },
  ]);

  return (
    <BottomLinksDivContainer>
      {links.map((link, index) => (
        <BottomLink href={link.link} target='_blank' key={index}>
          <BottomLinkImg
            src={`${link.image}`}
            alt={link.name}
            title={link.name}
          />
        </BottomLink>
      ))}
    </BottomLinksDivContainer>
  );
};

export default BottomLinks;
