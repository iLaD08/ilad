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
        <SkillImg src='https://svgur.com/i/QcU.svg' />
        <Skilltxt>Front-end Developer</Skilltxt>
      </SkillDiv>
      <SkillDiv>
        <SkillImg src='https://svgur.com/i/Qdu.svg' />
        <Skilltxt>UI/UX Design</Skilltxt>
      </SkillDiv>
    </SkillsDiv>
  </SkillsContainer>
);

export default Skills;
