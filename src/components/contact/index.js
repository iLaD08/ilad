import React from "react";
import { ContactContainer, ContactTitle, ContactTitleUnderline, ContactFrameDiv, ContactFrame  } from "./style";

const Projects = () => (
    <ContactContainer id="contacts">
            <ContactTitle>Contact</ContactTitle>
                <ContactTitleUnderline />
            <ContactFrameDiv>
                <iframe class="contact-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSdEWb95WvUVyq36gY6HSZZoSb8noSiEeCvG8utW7gyoKss_KQ/viewform?embedded=true" width="600" height="600" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
            </ContactFrameDiv>
        </ContactContainer>    
);

export default Projects;