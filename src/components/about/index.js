import React from "react";
import Typewriter from 'typewriter-effect';
import {
    AboutContainer,
    AboutDiv,
    AboutContentDiv,
    AboutTextTyperDiv,
    AboutImg,
    AboutH2,
    AboutP,
    AboutButton
} from "./style";

const About = () => (
    <AboutContainer id="aboutme">
        <AboutDiv>
            <AboutContentDiv>
                <AboutTextTyperDiv>
                    <AboutH2>
                        <Typewriter
                            options={{
                                strings: ['Im ImadEddine Lakhdar'],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </AboutH2>
                </AboutTextTyperDiv>
                <AboutP>
                    A 12 years old mern stack developer, I love <br/> building websites and contribute on open source.
                </AboutP>
                <AboutButton onClick={() => window.location.href = '/contact'}>Contact me</AboutButton>
            </AboutContentDiv>
        </AboutDiv>
        <AboutImg src="https://i.imgur.com/jvYjBZL_d.webp?maxwidth=728&fidelity=grand" />
    </AboutContainer>
);

export default About;