import React from "react";
import Typewriter from "typewriter-effect";
import {
  AboutContainer,
  AboutDiv,
  AboutContentDiv,
  AboutTextTyperDiv,
  AboutImg,
  AboutH2,
  AboutP,
  AboutButton,
} from "./style";

const About = () => (
  <AboutContainer id='aboutme'>
    <AboutDiv>
      <AboutContentDiv>
        <AboutTextTyperDiv>
          <AboutH2>
            <Typewriter
              options={{
                strings: ["I am iLaD"],
                autoStart: true,
                loop: true,
              }}
            />
          </AboutH2>
        </AboutTextTyperDiv>
        <AboutP>
          A mern stack developer that love building websites and contribute to open source.
        </AboutP>
        <AboutButton onClick={() => (window.location.href = "/contact")}>
          Contact me
        </AboutButton>
      </AboutContentDiv>
    </AboutDiv>
    <AboutImg
      src='https://i.imgur.com/jvYjBZL_d.webp?maxwidth=728&fidelity=grand'
      alt='REMOVE YOUR CURSOR FORM ME!!!!!!'
      title='REMOVE YOUR CURSOR FROM ME!!!!!!'
    />
  </AboutContainer>
);

export default About;
