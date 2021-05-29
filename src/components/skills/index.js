import React from "react";
import {
  SkillsContainer,
  SkillsDiv,
  SkillDiv,
  SkillsTitle,
  SkillsUnderline,
  SkillImg,
  Skilltxt,
} from "./style";

const Skills = () => (
  <SkillsContainer>
    <SkillsTitle>Skills</SkillsTitle>
    <SkillsUnderline />
    <SkillsDiv>
      <SkillDiv>
        <SkillImg
          src='https://svgur.com/i/QcU.svg'
          alt="I don't have a beard LOL!"
          title="I don't have a beard LOL!"
        />
        <Skilltxt>Front-end Developer</Skilltxt>
      </SkillDiv>
      <SkillDiv>
        <SkillImg
          src='https://svgur.com/i/Qdu.svg'
          alt='Umm, yeah cool'
          title='Umm, yeah cool'
        />
        <Skilltxt>UI/UX Design</Skilltxt>
      </SkillDiv>
    </SkillsDiv>
  </SkillsContainer>
);

export default Skills;
